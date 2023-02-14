import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUserRepository } from "./interfaces/IUsersRepository";

export class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {

    const user = this.userRepository.create(data);

    await this.userRepository.save(user);

    return user;
  }

  public async findAll(): Promise<User[] | null> {
    const users = await this.userRepository.find();

    if (!users) return null;

    return users;    
  }

  public async findByEmail(email: string): Promise<User | null> {

    const users = await this.userRepository.findOne({ email });

    if (!users) return null;

    return users;
  }
}