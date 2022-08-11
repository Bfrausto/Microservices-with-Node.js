module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
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
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-10644.c44.us-east-1-2.ec2.cloud.redislabs.com',
        port:  process.env.REDIS_PORT || '10644',
        password:  process.env.REDIS_PASS || '6pxrzABzK4GrveooMTqYsBKbjrP1Jawf'
    }
}