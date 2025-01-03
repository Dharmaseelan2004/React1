var express = require("express")
var app = express()
const PORT = 3001
app.get('/',(req,res)=>{
    res.send("Welcome to Backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend Server",url:"localhost",port:3001})
})
app.get('/static',(req,res)=>{
    res.sendFile('/C:\ReactCourse\vite-project\index.html')
})
app.listen(PORT,()=>
{
    console.log(`Backend server is started\nUrl:http://localhost:${PORT}`)
})