import {WebSocketServer} from 'ws' 


const wss = new WebSocketServer({port:8080})

wss.on('connection',(ws)=>{
    console.log("client connection");
  
    ws.on('message',(buf)=>{
        const text = buf.toString()
        console.log("got:",text);
        ws.send(`echo: ${text}`)
        
    })
    ws.on('close',()=>{console.log("client disconnection");
    })
})






