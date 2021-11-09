
const http = require ('http')
const server = http.createServer(function(req,res){
    res.end('ola tudo')
})
// server.listen(3000, function(){
//     console.log('servidor rodando --> http//localhost:3000')
// })


const port = (process.env.PORT | 3000)

server.listen(port, function(){
    console.log('servidor rodando --> http//localhost:3000')
})