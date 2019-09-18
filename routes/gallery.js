const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  return req.db.Gallery.fetchAll().then(results => {
    let all = results.toJSON();
    console.log(all);
    
    res.render("./templates/index", { all: all });
  });
});
router.get('/login',(req,res)=>{
  res.render('./login')
})

router.get('/new',(req,res)=>{
    res.render('./templates/new')
})

router.get('/:id/edit', (req,res)=>{
    res.render('./templates/edit')
})

router.get("/:id", (req, res) => {
  return req.db.Gallery.forge({ id: req.params.id })
    .fetch()
    .then(results => {
      let post = results.toJSON();
      console.log(post);
      res.render("./templates/post", post);
    });
});



router.post('/',(req,res)=>{
    console.log(req.body)
    return req.db.Gallery.forge({link: req.body.link,
    author: req.body.author,
description: req.body.description}).save().then(results=>{
    res.redirect('gallery')
})
})

module.exports = router;
