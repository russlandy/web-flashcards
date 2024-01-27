const React = require("react");
const ReactDOMServer = require("react-dom/server")

function renderComponent(component, props = {}, {doctype} = {doctype:true}){
    const page = ReactDOMServer.renderToStaticMarkup(React.createElement(component, {
        ...props,
        ...this.locals,
        ...this.app.locals,
    }))
    return doctype? `<!DOCTYPE html> ${page}`: page
}

function ssr(req, res, next) {
    res.renderComponent = renderComponent;
    next()
}
module.exports = ssr