import express from 'express'
import mainRoutes from './routes/main.js'

const app = express()
const PORT = 3000

app.use('/', mainRoutes)

app.use((err, req, res, next) => {
    if(err){
        console.log(`Error: ${err}`)
        res.status(res.status || 500).send(`Hiba történt: ${err}`)
    }
    next()
})

app.use('/express', (req, res)=>{
    res.send("<p>Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.</p>")
})

app.use('/greeting', (req, res)=>{
    res.send("<p> A név helyére a saját neved kerüljön</p>")
})

app.use('/nodejs', (req, res)=>{
    res.send("<p>A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.</p>")
})

app.listen(PORT, ()=> console.log("Hi, there!"))