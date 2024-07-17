const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
const app=require('./app');
const connectDB = require('./src/config/config');


connectDB()

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server running port no :${port}`)
})
