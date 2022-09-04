import { UnprocessableEntityException } from '@nestjs/common'

export interface IValidation {
  [key: string]: string[]
}

export class ValidationError extends UnprocessableEntityException {
  constructor(data: IValidation) {
    super({
      data,
      code: 'VALIDATION_ERROR'
    })
  }
}
