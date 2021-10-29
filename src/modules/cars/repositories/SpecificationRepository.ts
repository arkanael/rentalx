import {ISpecificationRepository, ICreateSpecifictionDTO} from "../contratcs/repositories/ISpecificationRepository"
import { Specification } from "../models/Specification";

class SpecificationRepository implements ISpecificationRepository {
      private specifications: Specification[];
      constructor(){
            this.specifications = [];
      }
    
      create({ name, description }: ICreateSpecifictionDTO): void {
            const specification = new Specification();

            Object.assign(specification, {
                  name, 
                  description,
                  created_at: new Date()
            });

            this.specifications.push(specification);
      }

      findByName(name: string): Specification {
            const specification = this.specifications.find(spec => spec.name === name);
            return specification;
      }

}

export { SpecificationRepository };
