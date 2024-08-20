const PORT = 4000;
// Đây là 1 module có sẵn và vô cùng quan trọng, cần thiết với nodejs
const http = require('http');

// Khai báo biến server để createServer
const server = http.createServer((req, res) => {
    res.end('hello world!');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
