
const express = require("express");
const route = express.Router();
const Blog = require("../models/blog");
const blogController = require("../Control/blogsControl");
route.get("/",blogController.blogs_index);

   route.get('/create',blogController.blogs_create_get);
   route.post("/",blogController.blogs_post);
   //parametrs
   route.get("/:id",blogController.blogs_details);
   route.delete("/:id",blogController.blogs_delete);

   module.exports=route;