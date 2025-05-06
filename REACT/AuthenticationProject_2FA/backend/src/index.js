import express, { json, urlencoded } from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// middlewares
app.use(json({ limit: "100mb" }));
app.use(urlencoded({ limit: "100mb", extended: true }));

const coreOptions = {
    origin : ["http://localhost:3001"],
    credentials:true,
};

app.use(cors(coreOptions));

app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:60000*60,
    }
}));
app.use(passport.initialize());
app.use(passport.session());

// routes (add your route handlers here)

// start server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
