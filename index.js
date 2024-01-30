/*console.log("Welcome to Node")
let count =0;
setInterval(()=>{
    if(count!=10)
    {
      console.log(count)  
      count++;
    }
    else{
        clearInterval()
    }

})
function add(a,b){
    return a+b;
}
console.log(add(5,10))
 */
/*
const os = require('os');
console.log(os.cpus())
console.log(os.uptime())
console.log(os.hostname())
console.log(os.homedir())
console.log(os.freemem())
*/

// readfile:
//const fs = require('fs');


//asynchronous
/*function getData({
    setTimeout(()={
        return str = `This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.If some of this language is unfamiliar, there is a full article on Blocking vs. Non-Blocking.Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind. This makes Node.js well suited for the foundation of a web library or framework. Node.js being designed without threads doesn't mean you can't take advantage of multiple cores in your environment. Child processes can be spawned by using our child_process.fork() API, and are designed to be easy to communicate with. Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores.
        Toggle  limitided content width`
    },3000)
})


fs.writeFile('sample.txt',str,'utf8',(err)=>{
    if(err)
     console.log(err)
})
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err)
    console.log(err)
else
console.log(data)
})
*/

//!asynchronous:
/*fs.writeFile('sample.txt',"This is new content to be added in the file",'utf8',(err)=>{
    if(err)
        console.log(err)
    else{
        fs.readFile('sample.txt','utf8',(err,data)=>{
            if(err)
            console.log(err)
            else
            console.log(data)
        })
    }
} )
*/
//!synchronous:
 /*try{
    fs.writeFileSync('sample.txt',"This is synchronous way of writing the file",'utf8')
    fs.appendFileSync('sample1.txt',"I am appended data",'utf8')
    let data = fs.readFileSync('sample1.txt','utf8')
    console.log(data)
 }
 catch(error){
    console.log(error)
 }
 */
//const PORT = 8000
//const http = require('http')

/*let students =[{"firstname":"Srinidhi","lastname":"Sridhar","email":"srinidhi123@gmail.com","batch":"B52WEE","address":{"state":"Bihar","city":"Patna","zipcode":"12345"},"id":"2"},{"firstname":"Aravinth","lastname":"Senthil Kumar","email":"aravinth@gmail.com","batch":"B53WEE","address":{"state":"Tamil Nadu","city":"Trichy","zipcode":"43211"},"id":"3"},{"firstname":"Manuneethi","lastname":"Cholan","email":"cholan@yahoo.com","batch":"B20","address":{"state":"Tamil Nadu","city":"Coimbatore","zipcode":"632000"},"id":"5"},{"firstname":"Rishi","lastname":"Somnath","email":"rishi@gmail.com","batch":"B22","address":{"state":"Karnataka","city":"Bangalore","zipcode":"738789"},"id":"6"}]
const server  = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    res.end(JSON.stringify(students))
})
*/
/*
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    res.end(`<h1>Welcome to the Node server</h1>`)
})

server.listen(PORT,()=>console.log(`App listening to ${PORT}`))
*/

const PORT = 8000
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let data =fs.readFileSync('index.html','utf8')
    res.writeHead(200,{
        "Content-Type":"text/html"
    })
    res.end(data)
})

server.listen(PORT,()=>console.log(`App listening to ${PORT}`))


