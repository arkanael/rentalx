import { Category } from "../models/Category";

interface ICreateCategoryDTO {
      name: string;
      description: string;
}

class CaregoriyRepository {
      constructor() {
            this.categories = [];
      }

      private categories: Category[];

      create({description, name} : ICreateCategoryDTO):void {
            const category = new Category();

            Object.assign(category, {
                  name,
                  description,
                  created_at: new Date(),
            });

            this.categories.push(category);
      }

      list():Category[]{
            

            return this.categories;
      }
}

export { CaregoriyRepository };
