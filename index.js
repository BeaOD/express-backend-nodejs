const express = require ('express');
const server = express();


//request handling methods
const HandleRequests = (req,res) => {
    res.send('Response from server.use');
}

const handleProfileRequestType = (req,res) =>{
    res.send('Responded to profile request with method of value put')
}

const handleDeleteRequestType = (req,res) =>{
    res.send('Responded to profile request with method of value put')
}

server.post('/profile', HandleRequests);
server.get('/login',(req,res) => res.send('this is login page'))
server.put('/signup',(req,res) => res.send('sign up here'))
server.patch('/contactus',(req,res) => res.send('contact for customer care here'))

server.put('/profile', handleProfileRequestType);

server.delete('/products', handleDeleteRequestType);
server.delete('/link',(req,res) => res.send('delete link'))

server.listen(3000,() => console.log('server ready'))