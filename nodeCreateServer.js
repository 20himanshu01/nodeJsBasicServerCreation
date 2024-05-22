const http=require("http");
const fs=require("fs");
 const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:request recieved \n`
    fs.appendFile("./serverDetail.txt",log,(err)=>{
        if(err){
            res.end("404 not found")
            return;
        }else[
            res.end("HEllo welcome to my server ")
        ]

    })

 });
 myserver.listen(800,()=>{console.log("server started")})