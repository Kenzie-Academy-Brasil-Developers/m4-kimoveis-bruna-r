import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { TRealEstateArray } from "../../interfaces/realEstate.inferface";

/*const readRealEstatesByCategoryServices = async (id: number): Promise<TRealEstateArray> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const imoveisByCategory: TRealEstateArray | null = await realEstateRepository.find({
    relations: {
        category: id,
      },
  });

  return imoveisByCategory;
};

export { readRealEstatesByCategoryServices };*/
