const MySQL = require('mysql-database');
const dBconfig = require("../config/database.json");
const database = new MySQL();

module.exports = async function () {
    let db = await new Promise(async (resolve, reject) => {
        let dbtc = await database.connect({
            host: dBconfig.host,
            user: dBconfig.username,
            password: dBconfig.password,
            database: dBconfig.database,
            charset: 'utf8mb4_unicode_ci'
        });
        
        dbtc.on('connected', (connection) => {
            console.log("[INFO]:".cyan, 'DataBase Connected!'.green);
            resolve(dbtc);
        });
    });
    return db;
}