const React = require("react");
const Layout = require("../Layout")

module.exports = function RoundStat({title, user}) {
  return( 
    <Layout title={title}>
        <div className='card-header'>
        <h1>Flashcards</h1>
        <div className='card-nav-bar'>
          <a href={`/profile/${user.id}`}>{user.login}</a>
          <a href='/logout'>logout</a>
          <a href='/'>home</a>
        </div>
      </div>
        <div className="wrap">
        <div></div>
        <div>You completed a round of World Capitals. You answered {user.points}/(все кол-во вопросов) cards correctly on the first try. You submitted (что то) total guesses before each card was answered correctly</div>
        </div>

    </Layout>
    )
}