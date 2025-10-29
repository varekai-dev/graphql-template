import type { z } from "zod";

const createSchemaValidator = <T extends z.ZodSchema>(schema: T) => {
  return (data: unknown): z.infer<T> => {
    return schema.parse(data);
  };
};

const createSafeValidator = <T extends z.ZodSchema>(schema: T) => {
  return (data: unknown): { success: boolean; data?: z.infer<T>; error?: z.ZodError } => {
    const result = schema.safeParse(data);
    if (result.success) {
      return { success: true, data: result.data };
    }
    return { success: false, error: result.error };
  };
};

export const validate = <T extends z.ZodSchema>(schema: T, data: unknown): z.infer<T> => {
  return createSchemaValidator(schema)(data);
};

export const safeValidate = <T extends z.ZodSchema>(
  schema: T,
  data: unknown
): { success: boolean; data?: z.infer<T>; error?: z.ZodError } => {
  return createSafeValidator(schema)(data);
};
