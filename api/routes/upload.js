const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
fs = require('fs-extra');
const Image = require("../models/image");
  var upload = multer()

router.get("/",(req, res, next) => {
  Image.find()
    .exec()
    .then(docs => {
      if (docs.length >= 0) {
      res.status(200).json(docs);
        } else {
            res.status(404).json({
                message: 'No entries found'
            });
        }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", upload.single('picture'), (req, res, next) => {
    console.log(req.file,"post")
    // console.log(req.body.base64Img,"post");
    
    // var img = fs.readFileSync(req.file.originalname);
    // var encode_image = img.toString('base64');   
    var finalImg = new Image({
        _id: new mongoose.Types.ObjectId(),
        //  contentType: req.file.mimetype,
        //  image:  new Buffer(encode_image, 'base64'),
         base64Img:req.body.base64Img
      });
     finalImg
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Image saved successfully."
      });
    })
    .catch(err => {
      console.log(err,"105");
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;