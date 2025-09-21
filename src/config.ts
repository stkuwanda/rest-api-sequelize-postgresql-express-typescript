const config = {
	host: process.env.DB_HOST || 'localhost',
	port: parseInt(process.env.DB_PORT || '5432', 10),
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME || 'test_db',
	dialect: 'postgres', // Changed from 'mysql' to 'postgres'
	models: [__dirname + '/data/models'], // Path to your models
};

export default config;
