const express = require('express')
const app = express()
const port = 3001;
const cors = require("cors")

app.use(cors());
//모든걸 허용
//sever to server cors필요없음
//server to 브라우저에서만

app.get('/', (req, res) => {
    res.json({ mas: 'This is CORS-enabled for all origins!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
