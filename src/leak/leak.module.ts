import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { LeakService } from './leak.service'
import { Leak } from './leak.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Leak])],
  providers: [LeakService]
})
export class LeakModule {}
