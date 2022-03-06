const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for homepage
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_content',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  // Get all the data from posts
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      // Create condition: if on main page and post title is not clicked, do not show post content on home page.
      posts.map(post => post.main = true);

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get single post
router.get('/post/:id', (req, res) => {
  
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_content',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      console.log(req.session.user_id);
      console.log(post);

      res.render('add-comment', {
        post,
        loggedIn: req.session.loggedIn,
        sessionUser: req.session.user_id
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Direct to login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Direct to sign-up page
router.get('/sign-up', (req, res) => {
  if (req.session.loggedIn){
    res.redirect('/');
    return;
  }
  res.render('sign-up');
});

// // Direct to new-post page
router.get('/new-post', (req, res) => {
  res.render('new-post');
});

// Direct to edit comment page
router.get('/comment/edit/:id', withAuth, (req, res) => {
  Comment.findByPk(req.params.id, {
    attributes: [
      'comment_text'
    ],
  })
    .then(dbCommentData => {
      if (dbCommentData) {
        const comment = dbCommentData.get({ plain: true });
        
        res.render('edit-comment', {
          comment,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
