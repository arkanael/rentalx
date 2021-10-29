import { ICategoryRepository } from "../../contratcs/repositories/ICategoryRepository";
import { Category } from "../../models/Category";

class ListCategoryUseCase {
      constructor(private categoryRepository: ICategoryRepository) {}

      execute(): Category[] {
            const categories = this.categoryRepository.findAll();

            return categories;
      }
}

export { ListCategoryUseCase };
