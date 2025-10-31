import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormProps, type UseFormReturn } from "react-hook-form";
import type { z } from "zod";

type UseFormWithZodProps<T extends z.ZodSchema> = Omit<
  UseFormProps<z.infer<T>>,
  "resolver"
> & {
  schema: T;
};

export const useFormWithZod = <T extends z.ZodSchema>(
  props: UseFormWithZodProps<T>
): UseFormReturn<z.infer<T>> => {
  const { schema, ...formProps } = props;

  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    ...formProps,
  });
};


