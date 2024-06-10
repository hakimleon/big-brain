import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import LoadingButton from "@/components/loading-button";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
function UploadDocumentForm({ setOpen }: { setOpen: (open: boolean) => void }) {
  const createDocument = useMutation(api.documents.createDocuments);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    new Promise((resolve) => setTimeout(resolve, 1000));
    await createDocument(values);
    setOpen(false);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Expense Report" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          LoadingText="Uploading..."
          stateLoading={form.formState.isSubmitting}
        >
          Upload
        </LoadingButton>
      </form>
    </Form>
  );
}

export default UploadDocumentForm;
