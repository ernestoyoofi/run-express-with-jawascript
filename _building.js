const { translate } = require("jawascript")
const fs = require("fs")
const path = require("path")

const rootFolder = path.resolve(process.cwd())
const outputFolder = path.resolve(rootFolder, ".vercel")
console.log("Root now:", rootFolder)
function BuildApp(paths = []) {
  console.log("Run...", paths)
  const folderScan = path.resolve(rootFolder, ...paths)
  const readfolder = fs.readdirSync(folderScan)
  for(let name of readfolder) {
    const nameToRead = path.resolve(rootFolder, ...paths, name)
    const nameToSave = path.resolve(outputFolder, "output", ...paths)
    const nameParser = path.parse(name)
    if(fs.statSync(nameToRead).isDirectory()) {
      // Rootpath
      let ignoreThis = false
      if(!paths[0] && ["node_modules",".vercel",".git","output","_next","_cache"].includes(name)) {
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
// fs.rmSync(outputFolder, { force: true })
fs.mkdirSync(outputFolder)
fs.mkdirSync(path.resolve(outputFolder,"output"))
fs.writeFileSync(path.resolve(outputFolder,"output","config.json"), JSON.stringify(require("./vercel.json")),"utf-8")
BuildApp() // Start Build