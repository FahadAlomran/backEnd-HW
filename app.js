"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 3000;
app.use(express_1["default"].json());
var getDta = function () {
};
app.get('/', function (req, res) {
    //feach
    //res ->send
    res.send(fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) { return response.json(); })
        .then(function (json) { return console.log(json); }));
});
// app.get('/',(req:Request,res:Response)=>{
//     res.send(  fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// );
// })
app.listen(3009);
