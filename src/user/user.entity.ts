import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
  Column,
  Entity
} from 'typeorm'

import { Leak } from '../leak/leak.entity'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  id: number

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  email: string

  @Column({ type: 'varchar' })
  password: string

  @Column({ type: 'varchar' })
  cpf: string

  @OneToMany(() => Leak, (leak) => leak.user, { eager: true })
  leaks: Leak[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
