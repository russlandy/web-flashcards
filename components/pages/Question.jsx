const React = require('react');

function Question({ question }) {
  return (
    <>
      <h3>{question.title}</h3>
      <form>
        <input type='text' placeholder='Enter your guess' />
        <button type='submit'>submit your guess</button>
      </form>
    </>
  );
}
module.exports = Question;
