import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';

const getRedisHost = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return process.env.REDIS_HOST_PROD;
    default:
      return '127.0.0.1';
  }
};

// create express session using redis
const redisStore = connectRedis(session);
const redisClient = new Redis({
  host: getRedisHost(),
}) as any;

const secret = 'wW4!6Z2uEu4#e'; // Change and move to cloud
const path = '/';
const httpOnly = true;
const secure = false;
const cookie = {
  path,
  httpOnly,
  secure,
};

const resave = false;
const saveUninitialized = false;
const unset = 'destroy';

export default () => {
  const store = new redisStore({
    client: redisClient,
    ttl: 1000 * 60 * 60, // 1hr TTL
  });

  const sessionParser = session({
    secret,
    cookie,
    store,
    resave,
    name: 'connect.client.sid',
    saveUninitialized,
    unset,
  });

  return [sessionParser];
};
