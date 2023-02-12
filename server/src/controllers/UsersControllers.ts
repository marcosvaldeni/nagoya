import { Request, Response } from 'express';

export default class UsersControllers {

  public async create(req: Request, res: Response): Promise<Response> {
    return res.json({ msg: 'Users from Cotrollers' });
  }
}
