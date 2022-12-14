const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DATABASE,
});
module.exports = pool;
//# sourceMappingURL=connectdb.js.map