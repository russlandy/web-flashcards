const React = require('react');

function Question({ question }) {
  return (
    <>
      <h3>{question.question}</h3>
      <form action={`/api/answer/${question.topicID}`} method='post'>
        <input name='text' type='text' placeholder='Enter your guess' />
        <button type='submit'>submit your guess</button>
      </form>
    </>
  );
}
module.exports = Question;
