const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>leran nodehhjs</title></head>");
    res.write("<body><h1>manoj sever  </h1><form action='/message' method='post' ><input name='text'> <input type='submit' value='send'></form></body>");
    res.write("</html>");
    return   res.end();
  }


  if(url === '/message' && method == 'POST'){
    const body = [];
    req.on('data' , (chunk)=>{
         body.push(chunk)
      console.log("chunk");
      console.log(chunk)
    })
    
  req.on('end',()=>{
    const joinData = Buffer.concat(body).toString();
    const message = joinData.split('=');
    fs.writeFileSync('hello.txt',message[1]);
  })
   

    fs.writeFileSync('hell.txt' ,"Dummy")
    res.setHeader('Location','/')
    res.statusCode = 302;
    return res.end();

  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>leran nodehhjs</title></head>");
  res.write("<body><h1>node js server is runing </h1></body>");
  res.write("</html>");

  res.end();
});

server.listen(3000);
    