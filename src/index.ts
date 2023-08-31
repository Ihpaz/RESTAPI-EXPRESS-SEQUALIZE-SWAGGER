import express, {Request , Response, Router} from "express";
import dotenv from "dotenv";
import router from "./routes/Routes";
import bodyParser from "body-parser";

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'REST API PROVINCE',
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

app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));


app.use(router)

app.listen(process.env.APP_PORT, () =>{
    console.log(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`)
})