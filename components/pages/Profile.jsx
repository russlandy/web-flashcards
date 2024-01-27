const React = require("react");
const Layout = require("../Layout")
const Table = require("../Table")

module.exports = function Profile({user, topics}) {
    return( 
    <Layout title={`страница пользователя: ${user.login}`}>
        <div className='card-header'>
        <h1>Flashcards</h1>
        <div className='card-nav-bar'>
          <a href='/logout'>logout</a>
          <a href='/'>home</a>
        </div>
      </div>
        <div className="wrap">
        <h1>{`${user.login}`}</h1>

        <div>{topics.map((topic)=> (
            <Table key={topic.id} topic={topic} user = {user} />
        ))}</div>



        </div>
    
    </Layout>
    )
}