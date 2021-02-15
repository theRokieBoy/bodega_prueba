require('dotenv').config();
const app =require('./app');

app.set('port',process.env.PORT || 3000);
app.listen(()=>{
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});