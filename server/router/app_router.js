const express=require("express");
const router=express.Router();
const DB = require("../module/db.js");
const db = new DB("huwai");
const jwt = require("../module/jwt.js");
const upload = require("../module/upload.js");
const fs = require("fs");

db.insertMany("pbGoods",[
  xie:[{
  	ds_id:"5c491c04bd1e75392076208f",
  	ds_img:"http://localhost:3000/dengshanbao.jpg",
  	ds_title:"【年货合家欢 每满500减70】GREGORY格里高利 Baltoro系列 B65/B75/B85 男款户外徒步登山包双肩背包 山脉户外 ",
  	ds_ms:"18新款上市 全新升级 终身维修 背囊大师 自带防雨罩",
  	ds_xj:"￥2239",
  	ds_yj:"￥3299",
  }],
  
],(err,data)=>{
	console.log("ok")
})
//获取单品
router.get("/getDp",(req,res)=>{
    db.find("dp",{},(err,data)=>{
        res.send(data);
    })
})
router.get("/getTypeList",(req,res)=>{
	db.find("typeList",{},(err,data)=>{
		res.send(data);
	})
})




module.exports = router;
