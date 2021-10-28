import { Category } from "../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgreeCategoryRepository implements ICategoryRepository {
      create({name, description}: ICreateCategoryDTO): void {
            console.log(`${name} ${description}`);
      }

      findByName(name: string): Category {
            console.log(name);
            return null;
      }

      findAll(): Category[] {
            return null;
      }
}

export { PostgreeCategoryRepository };
