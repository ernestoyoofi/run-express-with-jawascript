# Syntax Operation

Some suitable keywords to say in place of `less than`, `more than` and `not the same`, here simply write as listed here :

- `luwihSeko` : `more than` → `>`
- `luwihSitik` : `less than` → `<`
- `oraSepadan` : `not the same` → `!==`

And for some operations like `if` `else if` and `else` are replaced like this:

- `naliko` : `if`
- `liyane` : `else`
- `ukoro` : `else if`

For example see below

## 🍵 Operations

```js
naliko(a luwihSeko b) {
  catetan("luwih seko")
} ukoro(a luwihSitik c) {
  catetan("luwih sitik")
  naliko(c luwihSeko d) {
    infoPerkoro("ana masalah")
  }
} liyane {
  catetan("-")
}
```

## 🍵 luwihSeko / More than

```js
naliko(a luwihSeko b) {
  catetan("luwih seko")
}
```

and automatically in javascript like this

```js
if(a > b) {
  console.log("luwih seko")
}
```

## 🍵 luwihSitik / Less than

```js
naliko(a luwihSitik b) {
  catetan("luwih sitik")
}
```

and automatically in javascript like this

```js
if(a < b) {
  console.log("luwih sitik")
}
```

## 🍵 oraSepadan / Not the same

```js
naliko(a oraSepadan b) {
  catetan("ora podo")
}
```

and automatically in javascript like this

```js
if(a !== b) {
  console.log("ora podo")
}
```
