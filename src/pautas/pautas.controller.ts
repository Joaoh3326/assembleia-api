import { Body, Controller, Post, Res } from '@nestjs/common';
import { PautasService } from './pautas.service';
import { CriarPautaResource, toDomain } from './pautas.resource';
import { Response } from 'express';
import { Pauta } from './pauta.entity';

@Controller('pautas')
export class PautasController {
  constructor(private readonly service: PautasService) {}

  @Post()
  async save(@Body() pauta: CriarPautaResource, @Res() response: Response) {
    const pautaDomain: Pauta = toDomain(pauta);
    const result = await this.service.save(pautaDomain);

    if (result.isError()) {
      response.status(409).json({ message: result.error.message });
    }

    return response.status(201).json(result.value);
  }
}
