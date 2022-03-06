// const deleteCommentHandler = require('../public/javascript/delete-comment');

module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  comment_creator: (sessionUser, comment_author_id) => {
    console.log(sessionUser, comment_author_id);
    if (sessionUser == comment_author_id) {
      return true;
    } else {
      return false;
    }
  }
  // ,
  // comment_deleter: (e, id) => {
  //   deleteCommentHandler(e, id);
  // }

};
