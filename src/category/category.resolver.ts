import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation()
  createCategory(@Args('input') input: CreateCategoryInput) {
    console.log(input);
    return this.categoryService.create(input);
  }

  @Query('category')
  findAll() {
    return this.categoryService.findAll();
  }
}
