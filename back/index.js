var createError = require('http-errors');
var express = require('express')
var cors = require("cors")
var cookieParser = require('cookie-parser');
var path = require('path');
// const bodyParser = require("body-parser");
const mysql = require("mysql2");
var logger = require('morgan')
var port = 3001;
// app.use(express.json());
// ///////////////////
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const res = require('express/lib/response');


var app = express();
// const PORT = process.env.NODE_DOCKER_PORT || 3001;


var corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3001"
};
app.use(cors(corsOptions))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// /////////////////
// app.use(cors());
//cors setting
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// 파싱
// app.use(bodyParser.json());
app.use(cookieParser());


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "zxcv1120",
    database: "todolist",
    port: port
});
//error 발생시
connection.connect();
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})
// connection.connect(function (err) {
//     if (err) {
//         console.log("MySQL is no connectedd.");
//         throw err;
//     }
//     console.log("Connected to Mysql!")
// });
//list load
app.get("/todos/list", (req, res) => {
    var sql = "SELECT * FROM todos;";
    connection.query(sql, function (result) {
        // if (err) {
        //     console.log(err);
        //     return;
        // }
        res.json(result);
    })
})

//post - add
app.post("/todos/add", (req, res) => {
    let todo = req.body.todo;
    var sql = "INSERT INTO todos (todo, is_done) VALUES (?, ?);";

    connection.query(sql, [todo, 0], function (result) {
        // if (err) {
        //     console.log(err);
        //     return;
        // }
        res.json({ status: "OK", data: "A todo Added Successfully." });
    })
})
//update
app.post("/todos/check", (req, res) => {
    let id = req.body.id;
    let is_done = req.body.is_done;

    var sql = "UPDATE todos SET is_done = ? WHERE id = ?;";

    connection.query(sql, [is_done, id], function (result) {
        // if (err) {
        //     console.log(err);
        //     return;
        // }
        res.json({ status: "OK", data: "A todo updated." })
    })
})

app.post("/todos/delete", (req, res) => {
    let id = req.body.id;
    var sql = "DELETE FROM todos WHERE id = ?;";

    connection.query(sql, [id], function (result) {
        // if (err) {
        //     console.log(err);
        //     return;
        // }
        res.json({ status: "OK", data: "A todo Deleted." })
    })
})




// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;

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

// app.get("/", function (req, res) {
//     connection.query("select * from sample LIMIT 0, 10", function (
//         error,
//         results,
//         fields
//     ) {
//         if (error) throw error;
//         res.send(results);
//     });
// });
// app.post("/api/save", (req, res) => {
//     console.log(req.body.title.title);
//     // 기능
//     var sql = `INSERT INTO todos VALUES ('${req.body.title.title}')`;
//     connection.query(sql, function ( result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//     });
// });




