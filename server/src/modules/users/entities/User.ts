import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column()
  role: string;

  @Column()
  avatar: string;

	@CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}