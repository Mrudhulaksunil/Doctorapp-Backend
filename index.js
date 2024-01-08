//import json-server

const jsonServer=require('json-server')

//create a server application on backend using the variable jsonserver

const docServer=jsonServer.create()

//set path for db.json

const router=jsonServer.router('db.json')

//return a middleware used by json server 

const middleware=jsonServer.defaults()

//setup port

const port=3001

//use router and middleware in backend

docServer.use(router)
docServer.use(middleware)

//to run a port

docServer.listen(port,()=>{
    console.log('Docserver listening on port ',port);
})