const { mkdirSync, existsSync, readFileSync, createWriteStream } = require("fs");
module.exports = (e, r) => {
    try {
        try {
            let r = e.split("/");
            r.length > 1 && (r.pop(), (r = r.join("/")), existsSync(r) || mkdirSync(`./${r}/`, { recursive: !0 }));
        } catch (e) {
            throw new Error("[smskdb] " + e + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
        }
        try {
            let t = JSON.parse(readFileSync(`./${e}`, "utf8"));
            t[r] || ((t[r] = {}), require("./writeFile")(e, t));
        } catch (r) {
            try {
                createWriteStream(`./${e}`);
                let r = [{}];
                require("./writeFile")(e, r);
            } catch (e) {
                throw new Error("[smskdb DB] " + e + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
            }
        }
    } catch (e) {
        throw new Error("[smskdb] " + e + " \n\nFOR MORE ADVANCED HELP: https://discord.com/invite/BjEJFwh");
    }
};
