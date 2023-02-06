import express from 'express';
import authRoute from './auth.route';


const rootRoutes = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute
    }
];

defaultRoutes.forEach((route) => {
    rootRoutes.use(route.path, route.route)
});

export default rootRoutes