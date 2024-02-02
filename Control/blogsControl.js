//blogs_index,blogs_details blogs_create_get, blogs_create_post, blogs_detalis_get, blogs_delete
const Blog = require("../models/blog");

const blogs_index = (req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
   res.render('blogs/index',{blogs: result});
    })
     .catch(err=>{console.log(err)});
   }
   const blogs_details=(req,res)=>{
    const id =req.params.id;
    Blog.findById(id)
     .then(result=>{
      res.render("blogs/details",{blogs: result})
     })
     .catch(res.status(404).render('404'));
   }
  const blogs_create_get=(req,res)=>{
    
    res.render("blogs/create");
   }
 //const blogs_create_post= 
  
  const blogs_delete=(req,res)=>{
    const id =req.params.id;
    Blog.findByIdAndDelete(id)
     .then(result=>{
      res.json({redirect: '/'})
     })
     .catch(err=>console.log(err));
   }
    const blogs_post=(req,res)=>{

        const blog = new Blog(req.body);
        blog.save()
         .then((result)=>{
         res.redirect('/')}
         )
         .catch(err=>console.log(err));
    
      }
   module.exports = 
   {
    blogs_index,
    blogs_details,
    blogs_create_get,
    blogs_post,
    blogs_delete
            }