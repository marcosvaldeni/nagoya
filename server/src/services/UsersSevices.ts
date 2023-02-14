interface Request {
  name: string;
  email: string;
  password: string;
  role: string;
}

export class CreateUserService {

  public async execute({ name, email, password, role }: Request): Promise<string> {

    return 'From Sevice';
  }
}