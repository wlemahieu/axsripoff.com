import Redis from 'ioredis';

export const getRedisHost = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return process.env.REDIS_HOST_PROD;
    default:
      return '127.0.0.1';
  }
};

export default () => new Redis({ host: getRedisHost() });
