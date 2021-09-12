const express = require('express') // gọi vào node_modules lấy thư viện express ra và gán vào const express
const app = express() // khởi tạo 1 đối tượng để có thể xây dựng website 
const port = 3000
// route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})