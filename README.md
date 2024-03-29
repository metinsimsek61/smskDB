smskDB: An Easy-To-Use Database 
======

<p><b>smskDB</b> is a very easy to use and easily editable database module that allows you to create unlimited amount of unique database files and database childs!</p>
<p><b>smskDB</b> also saves your data in a json file so you can access and edit simple files at any time.</p>
-------

<b>[NPM Page](https://www.npmjs.com/package/smskdb) [GITHUB Page](https://github.com/metinsimsek61/smskDB)</b>
-------

Usage
------------
<p>Here is a simple but effective example!</p>

```js
/* smskDB Files */
const { Database } = require("smskDB");
/* Creating New Database */
const db = new Database("path/to/file");

/* Setting a value in the database */
db.set("just.a.long.data.name", "smskDB is cool!"); // => "smskDB is cool!"
db.set("just.a.long.array", []) // => []
db.set("just.a.long.number", 1) // => 1

/* Getting a value in the database */
db.get("just.a.long.data"); // => { name: "smskDB is cool!" }
db.fetch("just.a.long.number"); // => 1

/* Check if data created */
db.has("just.a.long"); // => true
db.has("just.a.long.name"); // => false

/* Add specified data */
db.add("just.a.long.number", 1) // => 2
db.add("just.a.long.number", 5) // => 7

/* Subtract specified data */
db.subtract("just.a.long.number", 1) // => 6
db.subtract("just.a.long.number", 3) // => 3

/* Push specified data */
db.push("just.a.long.array", 2) // => [2]
db.push("just.a.long.array", null) // => [2, null, 3, "str1", {}]
db.push("just.a.long.array", 3) // => [2, null, 3]
db.push("just.a.long.array", "str1") // => [2, null, 3, "str1"]
db.push("just.a.long.array", {}) // => [2, null, 3, "str1", {}]

/* Pop specified data */
db.pop("just.a.long.array") // => [2, null, 3, "str1"]

/* Shift specified data */
db.shift("just.a.long.array") // => [null, 3, "str1"]

/* Unshift specified data */
db.unshift("just.a.long.array", 5) // => [5, null, 3, "str1"]

/* Mapping data */
db.map(); // =>  { just: { a: { long: [Object] } } }

/* Deleting a value in the database */
db.delete("just.a.long"); // => { just: { a: { long: [Object] } } } has been deleted
```

<p>It looks so scary right :D Don't worry you dont have to know all of these xd</p>
-------------------

\ ゜o゜)ノ
