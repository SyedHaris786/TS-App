const pool = require("../scripts/connectdb")

export const products = (req,res) => {
 pool.query('SELECT * FROM products;')
 .then(
    (data) => 
    res.json(data.rows));
}
