const express = require('express');
const connectToDB = require('./connect');
const router = require('./controllers/user');
const cors = require('cors');

const app = express();
const PORT = 8005;

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
})

connectToDB('mongodb://127.0.0.1:27017/userExpenses').then(() => {
    console.log('DB Connected');
});


app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use('/', router);


