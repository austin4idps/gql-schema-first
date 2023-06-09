import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/category.entity';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  async create(createProductInput: CreateProductInput) {
    const newProduct = new Product();
    newProduct.name = createProductInput.name;
    newProduct.categories = await Promise.all(
      createProductInput.categoryIds.map((id) => {
        return this.categoryRepo.findOne({ where: { id } });
      }),
    );

    return this.productRepo.save(newProduct);
  }

  findAll() {
    return this.productRepo.find({
      relations: ['categories', 'categories.products'],
    });
  }
}
