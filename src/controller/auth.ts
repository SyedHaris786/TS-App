//Type definitions 
type jwt = string;

export const baseRoutController = (req, res) => {
    res.json({
      message: 'Hello World!'
    })
  }


//  Single responsibility principle

export const jwtGenerate = (req, res)=>{

  //Only code here for jwt token creation will be written here otherwise it will break single responsibility principle

}

export const jwtValidation = (req,res) =>{
  // Only validation of jwt token will be present here 
  
}