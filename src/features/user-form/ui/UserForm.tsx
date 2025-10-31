import { z } from "zod";
import { useFormWithZod } from "@shared/lib/use-form-with-zod";
import { Button } from "@shared/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/ui/FormField";
import { Input } from "@shared/ui/Input";
import { Textarea } from "@shared/ui/Textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@shared/ui/Card";

const userFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(18, "You must be at least 18 years old")
    .max(120, "Please enter a valid age"),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
});

type UserFormData = z.infer<typeof userFormSchema>;

export const UserForm = () => {
  const form = useFormWithZod({
    schema: userFormSchema,
    defaultValues: {
      name: "",
      email: "",
      age: undefined,
      bio: "",
    },
  });

  const handleSubmit = async (data: UserFormData) => {
    console.log("Form submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(`Form submitted successfully!\n\n${JSON.stringify(data, null, 2)}`);
    form.reset();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>User Registration Form</CardTitle>
        <CardDescription>
          This form demonstrates react-hook-form with Zod validation. All fields are validated in real-time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form form={form} onSubmit={handleSubmit}>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>Enter your full name (2-50 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormDescription>Enter your email address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="25"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value === "" ? undefined : Number(e.target.value);
                        field.onChange(value);
                      }}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormDescription>You must be at least 18 years old</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Optional: Write a short bio about yourself (max 500 characters)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <CardFooter className="px-0 pt-6">
            <Button type="submit" className="w-full" isLoading={form.formState.isSubmitting}>
              Submit
            </Button>
          </CardFooter>
        </Form>
      </CardContent>
    </Card>
  );
};

