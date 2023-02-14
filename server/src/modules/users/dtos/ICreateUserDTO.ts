export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar?: string;
}