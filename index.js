require('dotenv/config');
require('colors');

const path = require('path');

(async () => {
    let info = {};
    info.db = await require("./database/connect.js")();
    info.client = await require("./client/settings/client.js")();


    ["./client/main.js" ].forEach(handler => {
        require(path.join(__dirname, handler))(info);
    });
})();