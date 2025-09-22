import { Sequelize } from 'sequelize-typescript';
import config from '../../config';

export default class BaseRepository {
	sequelizeClient: Sequelize;

	constructor() {
		this.sequelizeClient = new Sequelize({
			host: config.db.host,
			port: config.db.port,
			username: config.db.username,
			password: config.db.password,
			database: config.db.database,
			dialect: config.db.dialect as any,
      models: config.db.models,
		});
	}
}
