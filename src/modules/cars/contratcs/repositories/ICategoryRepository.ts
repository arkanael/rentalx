import { Category } from "../../models/Category";

interface ICreateCategoryDTO {
      name: string;
      description: string;
}


interface ICategoryRepository{
      create({name, description}: ICreateCategoryDTO):void;
      findByName(name: string): Category;
      findAll():Category[];
}

export { ICategoryRepository, ICreateCategoryDTO };