const React = require("react");
const Layout = require("../Layout")

module.exports = function Profile({title = "User#"}) {
    return( 
    <Layout title={title}>
        <div className='card-header'>
        <h1>Flashcards</h1>
        <div className='card-nav-bar'>
          <a href='/username'>username</a>
          <a href='/logout'>logout</a>
          <a href='/'>home</a>
        </div>
      </div>
        <div className="wrap">
        <h1>(User.name)</h1>
        <h4>(round.title)</h4>
        <table border="1">
            <tr>
                <th>Заголовок 1</th>
                <th>Заголовок 2</th>
                <th>Заголовок 3</th>
                <th>Заголовок 4</th>
            </tr>
            <tr>
                <td>Ячейка 1-1</td>
                <td>Ячейка 1-2</td>
                <td>Ячейка 1-3</td>
                <td>Ячейка 1-4</td>
            </tr>
        </table> 
        </div>
    
    </Layout>
    )
}