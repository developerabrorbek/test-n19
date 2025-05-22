import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Language } from './models';
import { CreateLanguageDto } from './dtos/create-language.dto';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language.name) private langModel: Model<Language>) {}

  async getAll() {
    const langs = await this.langModel.find();
    return {
      count: langs.length,
      data: langs,
    };
  }

  async create(payload: CreateLanguageDto) {
    const lang = await this.langModel.create({
      title: payload.title,
      code: payload.code,
    });

    return {
      message: 'success',
      data: lang,
    };
  }
}
