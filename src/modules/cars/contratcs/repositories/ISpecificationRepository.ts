import { Specification } from "../../models/Specification";

interface ICreateSpecifictionDTO {
      name: string;
      description: string;
}

interface ISpecificationRepository {
      create({ name, description }: ICreateSpecifictionDTO): void;
      findByName(name:string): Specification;
}

export { ISpecificationRepository, ICreateSpecifictionDTO };
