/**
 * Configuration for database config
 */
exports.connection = {
	user: 'postgres',
	password: '123456',
	database: 'mydb',
	dialect: 'postgres',
	options: {
		dialect: 'postgres',
		host: '127.0.0.1',
		port: 5432,
		logging: false
	}
};