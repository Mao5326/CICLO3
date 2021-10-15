require("dotenv").config()

const express =  require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', require('./routes/serviciosRuta'));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/site/'))
  app.use('*', (req, res) => {
    res.sendFile(__dirname + '/site/index.html')
  })
}
mongoose.connect(process.env.URI_DB)
    .then(() => console.log("DB IS CONNECT"))
    .catch(err =>console.log(err));

app.listen(port, () => {
  console.log(`Servidor escuchando a traves de http://127.0.0.1:${port}`);
});


