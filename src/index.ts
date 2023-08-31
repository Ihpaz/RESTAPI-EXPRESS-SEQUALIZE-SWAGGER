import express, {Request , Response, Router} from "express";
import dotenv from "dotenv";
import router from "./routes/Routes";
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes/Routes.ts'], // files containing annotations as above
  };
  
const openapiSpecification = swaggerJsdoc(options);

dotenv.config();

const app= express();

app.get("/",(req:Request, res:Response)=>{
    return res.status(200).send({
        response: "Hello World"
    })
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));


app.use(router)

app.listen(process.env.APP_PORT, () =>{
    console.log(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`)
})