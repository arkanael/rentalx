interface ICreateSpecifictionDTO {
      name: string;
      description: string;
}

interface ISpecificatiomRepository {
      create({ name, description }: ICreateSpecifictionDTO): void;
}

export { ISpecificatiomRepository };
