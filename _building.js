const { translate } = require("jawascript")
const fs = require("fs")
const path = require("path")

const rootFolder = path.resolve(process.cwd())
console.log("Root now:", rootFolder)
function BuildApp(paths = []) {
  const folderScan = path.resolve(rootFolder, ...paths)
  const readfolder = fs.readdirSync(folderScan)
  for(let name of readfolder) {
    const nameToRead = path.resolve(rootFolder, ...paths, name)
    const nameToSave = path.resolve(rootFolder, "output", ...paths)
    const nameParser = path.parse(name)
    if(fs.statSync(nameToRead).isDirectory()) {
      // Rootpath
      let ignoreThis = false
      if(!paths[0] && ["node_modules","output","_next","_cache"].includes(name)) {
        ignoreThis = true
      }
      if(!ignoreThis) {
        fs.mkdirSync(path.resolve(nameToSave,name))
        BuildApp([...paths, name])
      }
    } else {
      if([".jawa",".jw"].includes(nameParser.ext)) {
        const readfile = fs.readFileSync(nameToRead,"utf-8")
        const jawaIntoJs = translate(readfile).res
        console.log("Save To:", path.resolve(nameToSave, `${nameParser.name}.js`))
        fs.writeFileSync(path.resolve(nameToSave, `${nameParser.name}.js`),jawaIntoJs,"utf-8")
      }
    }
  }
}
fs.rmSync(path.resolve(rootFolder,"output"), { force: true, recursive: true })
fs.mkdirSync(path.resolve(rootFolder,"output"))
BuildApp() // Start Build