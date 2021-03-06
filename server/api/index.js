import express from 'express'
import bodyParser from 'body-parser';
import routes from '../routes'
import cors from 'cors';

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(routes)

export { app };
