import { Controller, Delete, Param, Post, Body, Get, Put } from '@nestjs/common'

import { CreateUserDTO } from './dto/createUser.dto'
import { UpdateUserDTO } from './dto/updateUser.dto'

import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(+id)
  }

  @Post()
  async createOne(@Body() createUserDto: CreateUserDTO) {
    return await this.userService.createOne(createUserDto)
  }

  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() UpdateUserDTO: UpdateUserDTO
  ) {
    return await this.userService.updateOne(+id, UpdateUserDTO)
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.userService.deleteOne(+id)
  }
}
