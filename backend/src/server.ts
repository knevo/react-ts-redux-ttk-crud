import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'

import { errorHandler } from './middlewares/errorHandler.middleware'
import { config } from './config'
import { contactRoutes } from './api/contact/contact.routes'


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.env.isDevelopment) {
    app.use(cors(config.corsOption));
}

app.use('/api/contact', contactRoutes);


app.use(express.static(path.resolve(__dirname, 'public')));


app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(errorHandler);


export default app
