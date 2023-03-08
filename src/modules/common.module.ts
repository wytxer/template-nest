import { Module } from '@nestjs/common'
import { CommonService } from '@services/common.service'
import { CommonController } from '@controllers/common.controller'

@Module({
  imports: [],
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CommonService]
})
export class CommonModule {}
