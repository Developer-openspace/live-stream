import express from "express"
import mailer from "./lib/mailer"
import cors from "cors"

const app=express()

//middlewares
app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.get('/',async(req,res):Promise<void>=>{
    try {
        res.status(200).sendFile(__dirname+"/index.html")
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

app.post('/send', mailer)

//listening to port
let port:number|string=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

