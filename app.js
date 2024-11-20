import express from 'express'
import mainRoutes from './routes/main.js'

const app = express()
const PORT = 3000

app.use('/express', (req, res)=>{
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})

app.use('/greeting', (req, res)=>{
    res.send("Hello, Kovácsházi Ádám")
})

app.use('/nodejs', (req, res)=>{
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})

app.use('/', mainRoutes)

app.listen(PORT, ()=> console.log("Hi, there!"))