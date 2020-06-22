require('dotenv/config'); 
const express = require('express'); 
const multer = require('multer'); 

const app = express(); 
const port = 3000; 

const storage = multer.memoryStorage({
    destination: function(req, file, callback) { 
        callback(null, ''); 
    }
}); 

const upload = multer({ storage }).single('image'); 


app.post('/upload', upload, (req, res) => {
    
    console.log(req.file)
    res.send({
        message: "Hello World"
    })
}); 

app.listen(port, () => { 
    console.log(`server is up at ${port}`)
}); 