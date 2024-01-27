const React = require('react');

function Question({ question }) {
  return (
    <div className='card'>
      <h3 className='question_title'>{question.question}</h3>
      <form
        className='question_form'
        action={`/api/answer/${question.topicID}`}
        method='post'
      >
        <input
          className='question_input'
          name='text'
          type='text'
          placeholder='Введите ответ'
        />
        <button className='question_btn' type='submit'>
          Ответить!
        </button>
      </form>
    </div>
  );
}
module.exports = Question;
