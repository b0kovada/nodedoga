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

app.listen(PORT, ()=> console.log("Hi, there!"))