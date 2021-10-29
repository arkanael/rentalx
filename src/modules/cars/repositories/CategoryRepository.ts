import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../contratcs/repositories/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
      constructor() {
            this.categories = [];
      }

      private categories: Category[];

      create({ description, name }: ICreateCategoryDTO): void {
            const category = new Category();

            Object.assign(category, {
                  name,
                  description,
                  created_at: new Date(),
            });

            this.categories.push(category);
      }

      findAll(): Category[] {
            return this.categories;
      }

      findByName(name: string): Category {
            const category = this.categories.find(
                  (category) => category.name === name
            );
            return category;
      }
}

export { CategoryRepository };
