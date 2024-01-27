const React = require('react');
const Layout = require('../Layout');

function Home({ title = 'Flashcards', topics }) {
  return (
    <Layout title={title}>
      <div className='wrapper_header'>
        <div className='header'>
          <h1>Flashcards</h1>
          <div className='nav-bar'>
            <a href='/regPage'>register</a>
            <a href='/login'>login</a>
            <a href='/'>home</a>
          </div>
        </div>
      </div>
      <div className='wrapper_cards'>
        <h2>Flashcard Decks</h2>
        <div className='nav-body'>
          <div className='row-1'>
            {topics.map((topic) => {
              return (
                <a href={`/card/${topic.id}`} key={topic.id}>
                  {topic.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
