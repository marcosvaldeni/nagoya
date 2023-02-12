
interface Request {
  name: string,
  email: string,
  password: string,
}

class CreateOnwerService {

  public async execute({ name, email, password, role }: Request): Promise<User> {

    const user = await this.ownerRepository.create({
      name, 
      email,
      password,
      role
    });

    return user;
  }
}

export default CreateOnwerService;