/**
 * getTickers.ts
 *
 * Get all stored tickers
 */
import Redis from '@config/redis';

export default async (): Promise<Array<unknown>> => {
  const redis = Redis();
  const resp = await redis.get('TICKERS');
  if (resp) {
    console.log(resp);
  }
  return [];
};
