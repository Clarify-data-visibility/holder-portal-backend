import { ValidationError } from './exceptions/validation.exception'

import * as _ from 'lodash'

import Yup from './yup'

export class BaseValitizer {
  private parseValidationErrors(inner: any[]) {
    const formattedError = {}

    if (inner)
      inner.forEach((err) => _.set(formattedError, err.path, err.errors))

    return formattedError
  }

  async validate(schema: Yup.BaseSchema, payload: Record<string, any>) {
    try {
      await schema.validate(payload, {
        abortEarly: false,
        stripUnknown: true
      })
    } catch (error) {
      throw new ValidationError(this.parseValidationErrors(error.inner))
    }

    return await schema.cast(payload, { stripUnknown: true })
  }
}
