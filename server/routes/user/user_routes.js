const express = require("express");
const ErrorHandler = require("../../utils/errorHandler.js")
const router = express.Router();
const axios = require("axios");
const catchAsyncErrors = require("../../middleware/catchAsyncErrors.js");

//routes -> /user/

router.get( 
    "/get-user",
    catchAsyncErrors(async (req, res, next) => {
      try {
        res.status(201).json({
            success: true,
            data: "success",
          });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500, "error on /user/get-user" ));
      }
    })
  );


module.exports = router;