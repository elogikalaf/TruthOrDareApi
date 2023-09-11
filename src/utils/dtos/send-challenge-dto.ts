import { ApiProperty} from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsString, ValidateNested } from "class-validator";

class challengeDto {
    @IsString()
    @ApiProperty({ example: "dare"})
    type: string;
    
    @IsString()
    @ApiProperty({ example: "anything you want"})
    challenge: string;

    @IsBoolean()
    @ApiProperty({ example: true})
    couple: boolean;

    @IsString()
    @ApiProperty({ example: "F"})
    sex: Sex;

    @IsBoolean()
    @ApiProperty({ example: true})
    horny: boolean;

    @IsBoolean()
    @ApiProperty({ example: true})
    isNearby: true;
}

export class SendChallengeDtoList {
    @ValidateNested({ each: true })
    @ApiProperty({ 
        example: [
            {
                "type": "dare",
                "challenge": "Sing a song in front of everyone.",
                "couple": false,
                "sex": "MF",
                "horny": false,
                "isNearby": true 
            },
            {
                "type": "truth",
                "challenge": "who do you like",
                "couple": false,
                "sex": "MF",
                "horny": false,
                "isNearby": false
            }
        ]
    })
    @ValidateNested()
    @Type(() => challengeDto)
    challenges: challengeDto[];
}

export enum Sex {
    MALE = 'M',
    FEMALE = 'F',
    BOTH = 'MF',
}

