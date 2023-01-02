const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
    let urlobj = url.parse(req.url)
    console.log(urlobj)

    if(urlobj.pathname === '/getWeather') {
        res.end(JSON.stringify( {data: '晴'}))
    }else {
        res.end(fs.readFileSynnc(__dirname + '/index.html'))
    }
}).listen(8888)

console.log('open http://localhost:8888')