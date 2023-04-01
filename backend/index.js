import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"
import session from "express-session";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(express.urlencoded({extended: false}));

app.get('/login', (req, res) => {
    res.render("StartLogin.js")
})

app.listen(5000, ()=> console.log('Server up and running'));