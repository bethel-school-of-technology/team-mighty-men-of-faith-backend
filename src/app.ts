import express, { application, NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import orderRoutes from './routes/orderRoutes';
import vehicleRoutes from './routes/vehicleRoutes';
import userRoutes from './routes/userRoutes';


const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://carmigo.org/']
};
app.use(cors(corsOptions));

// routes
app.use('/api/orders', orderRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/users', userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

//Syncing our database
db.sync({ alter: false }).then(() => {
    console.info("connected to the database!")
});

app.listen(3000);
