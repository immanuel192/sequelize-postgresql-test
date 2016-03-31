/**
 * Configuration for database config
 */
exports.connection = {
	user: 'postgres',
	password: '',
	database: 'mydb',
	dialect: 'postgres',
	options: {
		dialect: 'postgres',
		//host: '172.17.0.1',
		host: '192.241.179.185',
		port: 5432,
		logging: false
	}
};