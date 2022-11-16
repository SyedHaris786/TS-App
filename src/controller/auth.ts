// const pool = require("../scripts/connectdb")
const  { verify } = require("../repo/auth")
const bcrypt = require('bcrypt');

export const auth = async (req,res) => {
  const {email, password} = req.body;
  try {
    console.log('Auth',{email, password})  
    await verify(email,password)
    res.send('done')
  
  } catch (error) {
  console.error('Auth',{error})  
  }
  // try {
  //   pool.query(`SELECT * FROM users WHERE (email='${email}' AND password='${password}')`)
  //    .then(
  //    (data) => 
  //    res.json(data.rows));  
  //   } 
    
  //   catch(err){

  //   console.log(err);
    
  //   }

}

// Registration code
// export const register = async (req,res) =>{
   
//   let  {username, email, password} = req.body;
 
//    try{
//    if (!username || !email || !password){
//      res.send({message:'Please enter all values'});
//    }
   
//    if (password.length < 5){
//      res.send({message:'Please enter a strong password'});
//    } 
 
//    const hashedPassword = await bcrypt.hash(password,5);
   
//    console.log({username, email, hashedPassword});
 
//    await pool.query(`SELECT * FROM users WHERE email = '${email}'`, (err,result)=>{
//      //Proper error handlling needs to be added 
//      if (err) {
//        console.log(err)
//      }
 
//      if (result.rows.length>0){
//        res.send('Email Already Exist');
//      }
//    });       
     
//    await pool.query(`insert into users (username,email, password) values ('${username}','${email}', '${hashedPassword}');`);         
//    res.send("User added successfully")
//   }catch(error){
//     console.log(error);
    
//   }
       
//  }