module.exports = {
    api: {
        port: process.env.PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'thisisasecret',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'brian',
        password: process.env.MYSQL_PASSWORD || 'brian',
        database: process.env.MYSQL_DATABASE || 'test',
    },
}