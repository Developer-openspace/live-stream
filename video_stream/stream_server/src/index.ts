import express from "express"
import mailer from "./lib/mailer"
import cors from "cors"
import fs from "fs"

const app=express()

//middlewares
app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.get('/',async(req,res):Promise<void>=>{
    try {
        res.status(200).sendFile(__dirname+"/views/index.html")
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

app.get("/video",(req,res)=>{
    try {
        const range:any=req.headers.range
        if(!range){
            res.status(400).send("Requires Range header")
        }

        // get video stats (about 12MB)
        const videoPath=__dirname+"/videos/Ansible_in_100_Seconds.mp4"
        const videoSize=fs.statSync(videoPath).size;
        // Parse Range
        // Example: "bytes=32324-"
        const chunk_size=10**6;
        const start=Number(range.replace(/\D/g,""))
        const end =Math.min(start+chunk_size, videoSize-1)

        // Create headers
        const contentLength=end-start+1
        const headers={
            "Content-Range":`bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges":"bytes",
            "Content-Length":contentLength,
            "Content-Type":"video/mp4"
        }
        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers)
        // create video read stream for this particular chunk
        const videoStream = fs.createReadStream(videoPath, { start, end })
        // Stream the video chunk to the client
        videoStream.pipe(res)

        // res.sendFile(videoPath)
    } catch (error:any) {
        res.status(500).send({error:error.message})   
    }
})

app.post('/send', mailer)

//listening to port
let port:number|string=process.env.PORT||8007
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

