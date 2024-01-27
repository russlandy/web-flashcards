const React = require("react");
const Layout = require("../Layout")

module.exports = function RoundStat({title = "round#"}) {
    return( 
    <Layout title={title}>
        <div className="wrap">
        <h1>(round.title)</h1>
        <h4>(round.answer)</h4>
        <h5>(round.text)</h5>
        </div>

    </Layout>
    )
}