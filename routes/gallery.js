const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  return req.db.Gallery.fetchAll().then(results => {
    let all = results.toJSON();

    res.render("./templates/index", { all: all });
  });
});

router.get("/new", (req, res) => {
  res.render("./templates/new");
});

router.get("/:id/edit", (req, res) => {
  return req.db.Gallery.forge({ id: req.params.id })
    .fetch()
    .then(results => {
      let post = results.toJSON();
      if (req.user.id !== post.user_id) {
        return res.send("You are not allowed to make changes to this post");
      }
      res.render("./templates/edit", post);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Gallery.forge({ id: req.params.id })
    .fetch()
    .then(results => {
      let post = results.toJSON();
      res.render("./templates/post", post);
    });
});

router.post("/", (req, res) => {
  return req.db.Gallery.forge({
    link: req.body.link,
    author: req.user.username,
    description: req.body.description,
    user_id: req.user.id
  })
    .save()
    .then(results => {
      res.redirect("/");
    });
});

router.put("/:id", (req, res) => {
  return req.db.Gallery.forge({ id: req.params.id })
    .save({
      link: req.body.link,
      description: req.body.description
    })
    .then(results => {
      res.redirect(`/${req.params.id}`);
    });
});

router.delete("/:id", (req, res) => {
  return req.db.Gallery.forge({ id: req.params.id })
    .fetch()
    .then(results => {
      let post = results.toJSON();
      if (req.user.id !== post.user_id) {
        return res.send("You are not allowed to make changes to this post");
      }
      return req.db.Gallery.forge({ id: req.params.id })
        .destroy()
        .then(results => {
          res.redirect("/");
        });
    });
});

module.exports = router;
