import { Repository } from 'typeorm'

import * as _ from 'lodash'

export abstract class BaseRepository<T> extends Repository<T> {}
