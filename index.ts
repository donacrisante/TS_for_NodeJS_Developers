import * as express from 'express';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;
const uri = "mongodb+srv://donacrisante:digGVx0vRPnJqy5Aot5a@cluster0.mdn9fms.mongodb.net/?retryWrites=true&w=majority";

// mongoose connection
mongoose.connect(uri);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);