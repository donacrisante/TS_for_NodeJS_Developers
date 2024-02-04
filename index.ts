import * as express from "express";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";
import Messenger from "./src/controllers/createMessage";
import { Settings } from "./settings";

const app = express();

// instance of our class
let messages = new Messenger(Settings.PORT);

const dataConnection = (user: string, pass: string): string => {
  return `mongodb+srv://${user}:${pass}@cluster0.mdn9fms.mongodb.net/?retryWrites=true&w=majority`;
};

let uri = dataConnection(Settings.mongoUser, Settings.mongoPass);

// mongoose connection
mongoose.connect(uri);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

/* interface Name {
    firstName: string;
} */

// let myName = {firstName: 'Manny'};

// function with interface
/* const nameCreator = (name: Name): string => {
    return `Hello, ${name.firstName},`; 
} */

// generics
function nameCreator<T>(name: T): T {
  return name;
}

let myName = nameCreator<string>('Manny, ');

// declaration merging: allows to merge multiple items. 
interface Warriors {
    weapon: string;
    skills: number;
}

interface Warriors {
    name: string;
}

let ninja: Warriors = {weapon: 'Shuriken', skills: 5, name: 'Manny'}

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => res.send(ninja));

app.listen(Settings.PORT, () =>
  console.log(myName, messages.messagePrint())
);
