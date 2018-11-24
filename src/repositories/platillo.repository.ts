import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Platillo} from '../models';
import {MongoDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlatilloRepository extends DefaultCrudRepository<
  Platillo,
  typeof Platillo.prototype.id
> {
  constructor(
    @inject('datasources.mongoDs') dataSource: MongoDsDataSource,
  ) {
    super(Platillo, dataSource);
  }
}
