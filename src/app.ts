import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize';
import orderRoutes from './routes/orderRoutes';
import vehicleRoutes from './routes/vehicleRoutes';
import userRoutes from './routes/userRoutes';


AdminJS.registerAdapter(AdminJSSequelize)

const app = express();
const admin = new AdminJS({
    databases: [db], // connect resource here
    rootPath: '/admin', //path to adminjs dashboard
});
const adminRouter = AdminJSExpress.buildRouter(admin);

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(admin.options.rootPath, adminRouter);

// routes

app.use('/api/orders', orderRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/users', userRoutes);


app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

//Syncing our database
db.sync({ alter: true }).then(() => {
    console.info("connected to the database!")
});

app.listen(3000);

// import express, { NextFunction, Request, Response } from 'express'
// import morgan from 'morgan';
// import { db } from './models';
// import AdminJS from 'adminjs'
// import AdminJSExpress from '@adminjs/express'
// import AdminJSSequelize from '@adminjs/sequelize';
// import orderRoutes from './routes/orderRoutes';
// import vehicleRoutes from './routes/vehicleRoutes';
// import userRoutes from './routes/userRoutes';


// AdminJS.registerAdapter(AdminJSSequelize)

// const app = express();
// const admin = new AdminJS({
//     databases: [db], // connect resource here
//     rootPath: '/admin', //path to adminjs dashboard
// });
// const adminRouter = AdminJSExpress.buildRouter(admin);

// app.use(morgan('dev'));

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(admin.options.rootPath, adminRouter);

// // routes

// app.use('/api/orders', orderRoutes);
// app.use('/api/vehicles', vehicleRoutes);
// app.use('/api/users', userRoutes);


// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.status(404).end();
// });

// //Syncing our database
// db.sync({ alter: true }).then(() => {
//     console.info("connected to the database!")
// });

// app.listen(3000);