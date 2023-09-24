import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Req,
  Res,
  Put,
  Delete,
  Logger,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {ApiBody, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';
import { SendChallengeDtoList } from 'src/utils/dtos/send-challenge-dto';
import { Public } from '../utils/decorators/roles.decorator';
import HttpResponse from 'src/utils/responses/http-response';
import { FindChallengeDto } from 'src/utils/dtos/find-challenge-dto';
import reqResponse from '../utils/cores/ResponseHandler';




@ApiTags('Auth')
@Controller('api/v1/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/send')
  @HttpCode(200)
  @ApiOperation({
    summary: 'send challenges',
  })
  @ApiBody({ type: SendChallengeDtoList})
  @ApiOkResponse({
    type: HttpResponse,
  })
  @Public()
  async sendChallege(@Body() body: SendChallengeDtoList,@Req() req, @Res() res) {
    return this.authService.sendChallenge(body, req, res);
  }

  @Post('/find')
  @HttpCode(200)
  @ApiOperation({
    summary: 'find a challange',
  })
  @ApiBody({ type: FindChallengeDto})
  @ApiOkResponse({
    type: HttpResponse,
  })
  @Public()
  async findChallege(@Body() body: FindChallengeDto,@Req() req, @Res() res) {
    Logger.log(body)
    if (body.sex == "MF"){
      delete body.sex;
    }
    if (body.type == "truth"){
      delete body.isNearby
    }
    const challenges = await this.authService.findChallenge(body, req)
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return res.status(200).send(reqResponse.Response(200, 'challenge found', challenges[randomIndex]));
  } 
}
