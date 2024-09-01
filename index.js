const express = require('express');
const { query, matchedData, validationResult } = require('express-validator');
const app = express();

app.use(express.json());
app.get('/hello', query('person').notEmpty().escape(), (req, res) => {
    // Nếu có lỗi thì sẽ cho vào biến 'loi'
    const loi = validationResult(req);

    // Nếu biến 'loi' trống nghĩa là k có lỗi -> true
    if (loi.isEmpty()) {
        const data = matchedData(req);
        console.log(data);
        return res.send(`Hello, ${data.person}!`);
    }
    // Nếu biến 'loi' không trống là có lỗi -> false in ra lỗi
    res.send({ errors: loi.array() });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});