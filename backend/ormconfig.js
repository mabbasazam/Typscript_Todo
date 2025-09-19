module.exports = {
type: 'mysql',
host: process.env.DB_HOST || '127.0.0.1',
port: parseInt(process.env.DB_PORT || '3306'),
username: process.env.DB_USERNAME || 'root',
password: process.env.DB_PASSWORD || '',
database: process.env.DB_DATABASE || 'todo_db',
synchronize: true,
logging: false,
entities: ["src/models/**/*.ts"],
migrations: ["src/migrations/**/*.ts"],
subscribers: ["src/subscribers/**/*.ts"]
};