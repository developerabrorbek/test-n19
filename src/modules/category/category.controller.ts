import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos';

@Controller("categories")
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  async getAll(@Headers('accept-language') lang: string) {
    return await this.service.getAll(lang);
  }

  @Post()
  async create(@Body() payload: CreateCategoryDto) {
    return await this.service.createCategory(payload);
  }
}
