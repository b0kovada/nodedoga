import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const app = express()
const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.use(bodyParser.urlencoded({extended: false}))

app.use('/express', (req, res)=>{
    res.send("<p>Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.</p>")
})

app.use('/express', (req, res)=>{
    res.send("<p>Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.</p>")
})


router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})



export default router