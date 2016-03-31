/**
 * Configuration for database config
 */
exports.connection = {
	user: 'postgres',
	password: '123trungdt',
	database: 'mydb',
	dialect: 'postgres',
	options: {
		dialect: 'postgres',
		//host: '172.17.0.1',
		host: '162.243.53.30',
		port: 5432,
		logging: false
	}
};