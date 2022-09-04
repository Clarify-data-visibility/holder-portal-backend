import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  Column,
  Entity
} from 'typeorm'

import { User } from '../user/user.entity'

@Entity('leaks')
export class Leak extends BaseEntity {
  @PrimaryGeneratedColumn('identity')
  id: number

  @ManyToOne(() => User, (user) => user.leaks)
  @Column({ type: 'int' })
  user: User

  @Column({ type: 'varchar' })
  location: string

  @Column({ type: 'timestamp' })
  leakedAt: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
