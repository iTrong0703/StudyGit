// Thay tên biến thành object để sử dụng trực tiếp phương thức
const {sum, minus} = require('./tinhTong.js');

// Lúc này ta có thể bỏ đối tượng để gọi đi tinhTong.
// mà sử dụng trực tiếp tên phương thức
const value = sum(8, 2);
const value2 = minus(7, 3);

console.log(value);
console.log(value2);

