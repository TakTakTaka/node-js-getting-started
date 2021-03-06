const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
// const token = require('./config.js')
var token = process.env.TOKEN;
// getToken = () => {
//   if(token){
//     // token =  process.env.TOKEN;
//   } else {
//     var tokenObject = require('/config.js');
//     TOKEN = tokenObject.token
//   }
// }
// getToken();

// process.env.notexist.TOKEN || require('./config.js')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/token', (req, res) => res.send(token))
  .get('/times', (req, res) => res.send(showTimes()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  showTimes = () => {
    let result = ''
    const times = process.env.TIMES || 5
    for (i = 0; i < times; i++) {
      result += i + ' '
    }
    return result;
  }



