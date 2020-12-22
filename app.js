const env = require("./env")
const express = require('express')
var exphbs  = require('express-handlebars');

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('*', (req, res) => {
  res.render('home',{title:env.REDIRECTOR_TITLE, href:env.REDIRECT_TO});

})

app.listen(env.PORT, () => {
  console.log(`Redirector app listening at http://localhost:${env.PORT}`)
})