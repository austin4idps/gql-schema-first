import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}
  create(input: CreateCategoryInput): Promise<Category> {
    const newCategory = this.categoryRepo.create({ ...input });
    return this.categoryRepo.save(newCategory);
  }

  findAll() {
    return this.categoryRepo.find();
  }
}
