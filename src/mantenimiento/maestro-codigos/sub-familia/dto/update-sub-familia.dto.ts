import { PartialType } from '@nestjs/swagger';
import { CreateSubFamiliaDto } from './create-sub-familia.dto';

export class UpdateSubFamiliaDto extends PartialType(CreateSubFamiliaDto) {}
