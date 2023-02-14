import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from '../../entities/User';

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findAll(): Promise<User[] | null>;
  findByEmail(email: string): Promise<User | null>;
}