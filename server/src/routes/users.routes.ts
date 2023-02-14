import { Router } from 'express';
import { UsersControllers } from '../controllers/UsersControllers';

export const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.get('/', usersControllers.create);
