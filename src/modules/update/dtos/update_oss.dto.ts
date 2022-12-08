import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

/**
 * **DTO para os dados do update do serviço da V1**
 *
 * @remark Validação dos dados da requisição
 *
 * @returns Retorna o json transformado em um objeto
 *
 * @example {
 * newSerialNumber: string;
 * oldSerialNumber: string;
 * time: string;
 * }
 */
export class UpdateOSSDTO {
  /**
   * Serial Number Novo
   * @decorator `@ApiProperty()`
   * @decorator `@IsString()`
   * @decorator `@IsNotEmpty()`
   */
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  newSerialNumber: string;

  /**
   * Serial Number Antigo
   * @decorator `@ApiProperty()`
   * @decorator `@IsString()`
   * @decorator `@IsNotEmpty()`
   */
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  oldSerialNumber: string;

  /**
   * Data no formato ISO
   * @decorator `@ApiProperty()`
   * @decorator `@IsString()`
   * @decorator `@IsNotEmpty()`
   */
  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  time: string;
}
