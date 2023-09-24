import {
  HttpException,
  Injectable,
} from '@nestjs/common';
import { prisma } from '../services/prisma/prisma.service';
import { SendChallengeDtoList } from 'src/utils/dtos/send-challenge-dto';
import reqResponse from '../utils/cores/ResponseHandler';
import { FindChallengeDto } from 'src/utils/dtos/find-challenge-dto';


@Injectable()
export class AuthService {
  constructor() { }
  async sendChallenge(sendChallengeDto: SendChallengeDtoList, req, res) {
    try {
      for (const challenge of sendChallengeDto.challenges) {
        await prisma.challengeModel.create({
          data: challenge,
        });
      }
      return res.status(200).send(reqResponse.Response(200, 'Chellenges Were Added', sendChallengeDto));
    } catch (ex) {
      throw new HttpException(ex.message, 400);
    }
  }

  async findChallenge(findChallengeDto: FindChallengeDto, req) {
    const { type, couple, sex, adult, isNearby } = findChallengeDto;
    try {
      const where = {
        type,
        couple,
        adult,
        sex: {
          contains: sex,
        },
        isNearby,
      };
      if (isNearby == undefined ) {
        delete where.isNearby
      }
      if (sex == undefined) {
        delete where.sex
      }
      const challenges = await prisma.challengeModel.findMany({
        where,
      })
      return challenges
    } catch (ex) {
      throw new HttpException(ex.message, 400);
    }
  }

}
 