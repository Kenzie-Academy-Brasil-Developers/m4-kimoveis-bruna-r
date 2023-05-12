import { z } from "zod";
import {
  realEstateSchema,
  realEstateSchemaArray,
} from "../schemas/realEstate.schema";

type TRealEstate = z.infer<typeof realEstateSchema>;
type TRealEstateArray = z.infer<typeof realEstateSchemaArray>;

export { TRealEstate, TRealEstateArray };
