import { ApiProperty} from "@nestjs/swagger";
import { IsBoolean, IsString, ValidateNested } from "class-validator";

export class FindChallengeDto {
    @IsString()
    @ApiProperty({ example: "dare"})
    type: string;
    
    @IsBoolean()
    @ApiProperty({ example: true})
    couple: boolean;

    @IsString()
    @ApiProperty({ example: "F"})
    sex: Sex;

    @IsBoolean()
    @ApiProperty({ example: true})
    adult: boolean;

    @IsBoolean()
    @ApiProperty({ example: true})
    isNearby: true;
}
export enum Sex {
    MALE = 'M',
    FEMALE = 'F',
    BOTH = 'MF',
}
