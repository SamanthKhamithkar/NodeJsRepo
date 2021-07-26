const express = require("express");
const path = require("path");
const requests = require("requests");
const portNo = process.env.PORT || 8000;    //To find the port no of hosted system

const app = express();
const staticPath = path.join(__dirname,"/webapp");

console.log(__dirname);
console.log(path.join(__dirname,"/webapp"));

//built-in middleware
app.use(express.static(staticPath));

app.get("/", (req,res) => {
    res.send("Hello World from ExpressJs.");
});

app.get("/about", (req,res) => {
    res.send("Hello World from About page.");
});

app.get("/weatherapi", (req,res) => {
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=979e5a0ecc11af85fd6941e3f522f05c`)
        .on('data', (chunk) => {
        //    const objData = JSON.parse(chunk);
        //    const arrData = [objData];
            console.log(req.query);
            res.write(chunk);
            res.end();
        })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            console.log('end');
            res.end();
        });
});

app.listen(portNo, () => {
    console.log("Listening...");
});