const asynHandler = require("express-async-handler");
const User = require("../model/userModel");
let jwt = require("jsonwebtoken")
let cookies = require("cookie-parser")

//register user


//login User
const loginUser = asynHandler(async (req, res) => {
  try {
    const { domainID, password } = req.body;
    const user = await User.findOne({ domainID });

    if (user && user.password === password) {

      let token = jwt.sign({ tokenId: user.password }, "randomsecretkey"); // converts the id that is stored in user to a secretcode
      res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 10 * 1000),
      });
      res.status(200).json({ user });

    } else {
      res.status(400);
      throw new Error("Invalid DomainID or Password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

let isAuthenticated = async (req, res, next) => {
  console.log(req)
  const { token } = req.cookies; //req.cookies.token 
  console.log(token );
  if (token) {
    console.log(token);
    let decoded = jwt.verify(token, "randomsecretkey");
    console.log({ decoded });
    // console.log(decoded) it gives us an object with key value pair of token below
    req.user = await User.findById(decoded.tokenId);
    next();
  } else {
    res.res.status(400).json({ message: "User not found" });
  }
};

let logout = (req,res)=>{
        res.cookie("token","loggedIn",{
          httpOnly: true,
          expires : new Date(Date.now())
        })
        res.status(200)
        console.log("youve been logged out")

}

module.exports = {
  loginUser,
  isAuthenticated,
  logout,
};
