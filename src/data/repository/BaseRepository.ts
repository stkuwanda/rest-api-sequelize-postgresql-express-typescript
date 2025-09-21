import { Sequelize } from 'sequelize-typescript';
import config from '../../config';

export default class BaseRepository {
	sequelizeClient: Sequelize;

	constructor() {
		this.sequelizeClient = new Sequelize({
			host: config.host,
			port: config.port,
			username: config.username,
			password: config.password,
			database: config.database,
			dialect: config.dialect as any,
      models: config.models,
		});
	}
}
