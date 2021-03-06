const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// route to return ALL comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// route to create a new post, requires comment_text, user_id, and post_id
router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// route to edit/update ONE comment with specific id
router.put('/:id', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment"}
  Comment.update({
    comment_text: req.body.comment_text
  },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// route to delete ONE comment with specific id
router.delete('/:id', withAuth, (req, res) => {
  if (req.session) {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
});

module.exports = router;
