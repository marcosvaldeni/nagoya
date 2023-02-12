import { Request, Response } from 'express';
import CreateUserService from '../services/UsersSevices';

export default class UsersControllers {
  private createUserService;

  constructor() {
    this.createUserService = new CreateUserService()
  }

  public async create(req: Request, res: Response): Promise<Response> {
    

    const msg = await this.createUserService.execute({ name: 'name', email: 'email', password: 'pass', role: '123' });

    return res.json({ msg: 'Users from Cotrollers' });
  }
}
