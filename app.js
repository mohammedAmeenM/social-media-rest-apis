const express=require('express');
const userRouter=require('./src/apis/router/userRouter')
const postRouter = require('./src/apis/router/postRouter');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const app=express();
const core=require('cors');
const swaggerDocument = require('./swagger-output.json');

 
app.use(core())
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan('dev'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
   
app.use('/api/users/',userRouter) 
app.use('/api/posts/',postRouter)

module.exports=app;