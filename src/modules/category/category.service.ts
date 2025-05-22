import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './models';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dtos';
import { TranslateService } from '../translate';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    private translateService: TranslateService,
  ) {}

  async getAll(language: string) {
    const res = [];
    const categories = await this.categoryModel.find();

    for (let c of categories) {
      const name = await this.translateService.getTranslate(language, c.name);

      res.push({ ...c.toObject(), name });
    }

    return {
      count: res.length,
      data: res,
    };
  }

  async createCategory(payload: CreateCategoryDto) {
    const category = await this.categoryModel.create({ name: payload.name });
    return { message: 'yaratildi' };
  }
}
