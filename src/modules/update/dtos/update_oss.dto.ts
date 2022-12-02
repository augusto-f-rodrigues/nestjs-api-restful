import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateOSSDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newSerialNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  oldSerialNumber: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  time: string;
}
