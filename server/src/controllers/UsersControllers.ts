import { Request, Response } from 'express';

export class UsersControllers {
  
  public async create(req: Request, res: Response): Promise<Response> {
		return res.json({ message: 'Users from Controllers' });
  }
}