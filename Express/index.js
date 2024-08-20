// import express bằng require
const express = require('express')
// gọi express và gán vào biến app
const app = express()
const port = 3000

// Khai báo router, '/' là url mặc định, không có path phía sau
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// router có thêm path name phía sau
app.get('/name', (req, res) => {
    res.send('Nguyen Thanh Trong')
})

// lắng nghe PORT 3000 và chạy console.log
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})