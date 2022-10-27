const express = require('express')
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser");


const PORT = 3001;
var corsOptions = {
    origin: "http://localhost:3001"
};

//cors setting
app.use(cors(corsOptions))

// app.use(express.urlencoded({ extended: true })
// 파싱
app.use(bodyParser.json());


const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zxcv1120",
    database: "todos",
    port: PORT
});
connection.connect();
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
//모든걸 허용
//sever to server cors필요없음
//server to 브라우저에서만


app.get("/", function (req, res) {
    connection.query("select * from sample LIMIT 0, 10", function (
        error,
        results,
        fields
    ) {
        if (error) throw error;
        res.send(results);
    });
});
app.post("/api/save", (req, res) => {
    console.log(req.body.title.title);
    // 기능
    var sql = `INSERT INTO todos VALUES ('${req.body.title.title}')`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})



