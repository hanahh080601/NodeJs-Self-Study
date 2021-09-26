const path = require('path');
const express = require('express'); // gọi vào node_modules lấy thư viện express ra và gán vào const express
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express(); // khởi tạo 1 đối tượng để có thể xây dựng website
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// chuyển đổi middleware để có thể dùng body thay vì query
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
// route

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
