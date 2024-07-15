import { Inject, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PautasService } from './pautas.service';
import { pautaProviders } from './pauta.providers';
import { Repository } from 'typeorm';
import { Pauta } from './pauta.entity';
import { PautasController } from './pautas.controller';

@Module({
  imports: [DatabaseModule],
  providers: [PautasService, ...pautaProviders],
  controllers: [PautasController],
})
export class PautasModule {
  constructor(
    @Inject('PAUTA_REPOSITORY')
    private readonly pautaRepository: Repository<Pauta>,
  ) {}
}
