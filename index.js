const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const token = require('./config.js')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/token', (req, res) => res.send(token.TOKEN))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  // express().get('/token', (req,res) => {
  //   console.log(token);
  //   res.send(token);
  //   res.end();
  // })
