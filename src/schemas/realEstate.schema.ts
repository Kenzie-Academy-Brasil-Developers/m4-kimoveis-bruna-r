import { z } from "zod";

const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullish(),
  adrdressId: z.number(),
  categoryId: z.number(),
});

const realEstateSchemaArray = realEstateSchema.array();

export { realEstateSchema, realEstateSchemaArray };
