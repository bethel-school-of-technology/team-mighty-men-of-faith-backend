import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
// import { db } from './models';
// import vehicleRoutes from './routes/vehicleRoutes';
// import reservationRoutes from './routes/reservationRoutes';
import userRoutes from './routes/userRoutes';
import vehicleRoutes from './routes/vehicleRoutes';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
// app.use('/api/vehicles', vehicleRoutes);
// app.use('/api/reservation', reservationRoutes);
app.use('/api/users', userRoutes);
app.use('/vehicle', vehicleRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
// db.sync({ alter: true }).then(() => {
//     console.info("connected to the database!")
// });

app.listen(3000);