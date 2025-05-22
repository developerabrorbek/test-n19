import { Module } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageController } from './language.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Language, LanguageSchema } from './models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Language.name, schema: LanguageSchema },
    ]),
  ],
  providers: [LanguageService],
  controllers: [LanguageController],
})
export class LanguageModule {}
