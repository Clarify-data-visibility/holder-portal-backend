import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateLeakDTO } from './dto/createLeak.dto'

import { Leak } from './leak.entity'

@Injectable()
export class LeakService {
  constructor(
    @InjectRepository(Leak) private readonly leaksRepository: Repository<Leak>
  ) {}

  async findAll() {
    return await this.leaksRepository.find()
  }

  async createOne(createLeakDTO: CreateLeakDTO) {
    return await this.leaksRepository.save(createLeakDTO)
  }

  async findOne(id: number) {
    const found = await this.leaksRepository.findOne({ where: { id } })

    if (!found) throw new NotFoundException()

    return found
  }
}
