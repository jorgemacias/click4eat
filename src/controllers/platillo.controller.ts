import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Platillo} from '../models';
import {PlatilloRepository} from '../repositories';

export class PlatilloController {
  constructor(
    @repository(PlatilloRepository)
    public platilloRepository : PlatilloRepository,
  ) {}

  @post('/platillos', {
    responses: {
      '200': {
        description: 'Platillo model instance',
        content: {'application/json': {schema: {'x-ts-type': Platillo}}},
      },
    },
  })
  async create(@requestBody() platillo: Platillo): Promise<Platillo> {
    return await this.platilloRepository.create(platillo);
  }

  @get('/platillos/count', {
    responses: {
      '200': {
        description: 'Platillo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Platillo)) where?: Where,
  ): Promise<Count> {
    return await this.platilloRepository.count(where);
  }

  @get('/platillos', {
    responses: {
      '200': {
        description: 'Array of Platillo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Platillo}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Platillo)) filter?: Filter,
  ): Promise<Platillo[]> {
    return await this.platilloRepository.find(filter);
  }

  @patch('/platillos', {
    responses: {
      '200': {
        description: 'Platillo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() platillo: Platillo,
    @param.query.object('where', getWhereSchemaFor(Platillo)) where?: Where,
  ): Promise<Count> {
    return await this.platilloRepository.updateAll(platillo, where);
  }

  @get('/platillos/{id}', {
    responses: {
      '200': {
        description: 'Platillo model instance',
        content: {'application/json': {schema: {'x-ts-type': Platillo}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Platillo> {
    return await this.platilloRepository.findById(id);
  }

  @patch('/platillos/{id}', {
    responses: {
      '204': {
        description: 'Platillo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() platillo: Platillo,
  ): Promise<void> {
    await this.platilloRepository.updateById(id, platillo);
  }

  @del('/platillos/{id}', {
    responses: {
      '204': {
        description: 'Platillo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.platilloRepository.deleteById(id);
  }
}
