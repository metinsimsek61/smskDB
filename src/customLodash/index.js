for(let e of require("fs").readdirSync("./node_modules/bookman/src/customLodash/").filter(e=>!e.endsWith(".js")))this[e]=require(`./${e}`);module.exports=this;