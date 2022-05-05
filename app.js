const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
const adminData = require("./routes/admin");
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');
app.use(bodyParser.urlencoded({extended: false}));
// to join with file like css
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views','404.html'));
});

app.listen(4000);