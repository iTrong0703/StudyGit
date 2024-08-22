import express from 'express'
const app = express()
const port = 3000

const sum = (obj: { a: number; b: number }) => obj.a + obj.b

app.get('/', (req, res) => {
  const result = sum(null as any)
  res.send(`Sum = ${result}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
