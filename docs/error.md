# Syntax Error

Jika kamu ingin mengambil permasalahan pada asyncronus atau tidak agar script tidak langsung tertutup kamu bisa gunakan seperti ini

```js
nyobake {
  mbalangi perkoroAnyar("Ups!")
} njupuk(e) {
  infoPerkoro(a.stack)
} akire {
  catetan("Rampung!")
}
```

Maka script diatas menjadi seperti ini

```js
try {
  throw new Error("Ups!")
} catch(e) {
  console.error(a.stack)
} finally {
  console.log("Rampung!")
}
```