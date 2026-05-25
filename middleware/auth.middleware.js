const tokenBlackListModel = require("../models/blackList.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
   
   const token =
      req.cookies.token ||
      req.headers.authorization?.split(" ")[1];


   if (!token) {
      return res.status(401).json({
         message: "Unauthorized access, token is missing"
      });
   }

   const isBlacklisted = await tokenBlackListModel.findOne({token})

   if(isBlacklisted) {
      return res.status(401).json({
         messgae: "Unauthorized access, token is invalid"
      })
   }

   try {

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await userModel.findById(decoded.userId);

      req.user = user;

      next();

   } catch (error) {

      return res.status(401).json({
         message: "Unauthorized access, token is invalid"
      });

   }
}

async function authSystemUseMiddleware(req,res, next) {
    const token =
      req.cookies.token ||
      req.headers.authorization?.split(" ")[1];

      //   console.log("TOKEN:", token);   // ✅ here


   if (!token) {
      return res.status(401).json({
         message: "Unauthorized access, token is missing"
      });
   }

    const isBlacklisted = await tokenBlackListModel.findOne({token})

   if(isBlacklisted) {
      return res.status(401).json({
         messgae: "Unauthorized access, token is invalid"
      })
   }

   try {

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

         //  console.log("DECODED:", decoded);  // ✅ after verify

      
      const user = await userModel.findById(decoded.userId).select("+systemUser");

         //  console.log("USER:", user);  // ✅ after DB fetch


      if(!user || !user.systemUser) {
         return res.status(403).json({
            message: "Forbidden access, not a system user"
         })
      }

      req.user = user;

      next();

   } catch (error) {

      return res.status(401).json({
         message: "Unauthorized access, token is invalid"
      });

   }


}

module.exports = {
   authMiddleware,
   authSystemUseMiddleware
}