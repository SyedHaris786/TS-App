// const pool = require("../scripts/connectdb")

// Verify users credentials

// export function verify(email: string, password: string) {
//     console.log('-----------------', email, password)
//     return pool.query(`SELECT * FROM users WHERE (email='${email}' AND password='${password}')`)
//         .then((data) => {
//             console.log('data', { data: data.rows })
//             return data.rows
//         });

// }
// WHERE (email='${email}' AND password='${password}'