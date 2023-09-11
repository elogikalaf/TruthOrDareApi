import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private static instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient({
        errorFormat: 'minimal',
        log: [
          { level: 'error', emit: 'event' },
          { level: 'warn', emit: 'event' },
          { level: 'query', emit: 'event' },
          //{ level: 'query', emit: 'stdout' }, //to log sql of prisma in console
        ],
      });
      // Listen for the 'query' event and log the parameters
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      /*PrismaSingleton.instance.$on('query', (e) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.log('Query:', e.query);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.log('Params:', e.params);
      });*/
    }
    return PrismaService.instance;
  }
}
//export default PrismaSingleton.getInstance();
module.exports = {
  prisma: PrismaService.getInstance(),
};
const prisma = PrismaService.getInstance();
export { prisma };
