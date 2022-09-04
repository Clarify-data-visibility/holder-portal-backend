import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateUserDTO } from './dto/createUser.dto'
import { UpdateUserDTO } from './dto/updateUser.dto'

import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>
  ) {}

  async createOne(createUserDTO: CreateUserDTO) {
    return await this.usersRepository.save(createUserDTO)
  }

  async findAll() {
    return await this.usersRepository.find()
  }

  async findOne(id: number) {
    const found = await this.usersRepository.findOne({ where: { id } })

    if (!found) throw new NotFoundException()

    return found
  }

  async updateOne(id: number, updateUserDTO: UpdateUserDTO) {
    const found = await this.findOne(id)

    await this.usersRepository.update({ id }, { ...found, ...updateUserDTO })

    return found
  }

  async deleteOne(id: number) {
    await this.findOne(id)

    return await this.usersRepository.delete({ id })
  }
}
