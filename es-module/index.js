// Chỉ export default mới được đặt riêng
// còn lại phải nằm trong object
import logName, {sum, minus} from "./helpers.js";

logName('Trong')
console.log(sum(8, 2));
console.log(minus(9, 3));