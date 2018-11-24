import {Entity, model, property} from '@loopback/repository';

@model()
export class Platillo extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  picture: string;

  constructor(data?: Partial<Platillo>) {
    super(data);
  }
}
