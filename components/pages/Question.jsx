const React = require('react');

function Question({ question }) {
  return (
    <>
      <h3>{question.question}</h3>
      <form
        className='form-Q'
        action={`/api/answer/${question.topicID}`}
        method='post'
      >
        <input
          className='input'
          name='text'
          type='text'
          placeholder='Enter your guess'
        />
        <button className='btn' type='submit'>
          submit your guess
        </button>
      </form>
    </>
  );
}
module.exports = Question;
