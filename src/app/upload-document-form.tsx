'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Id } from "../../convex/_generated/dataModel";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  file: z.instanceof(File),
});
function UploadDocumentForm({ setOpen }: { setOpen: (open: boolean) => void }) {
  const createDocument = useMutation(api.documents.createDocuments);
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = await generateUploadUrl();

    console.log('url', url)

    const result = await fetch(url, {
      method:"POST",
      headers: {"Content-Type": values.file.type},
      body: values.file
    })
    const {storageId} = await result.json()
    await createDocument({
      title: values.title,
      fileId: storageId as Id<'_storage'>,
    });
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
        <FormField
          control={form.control}
          name="file"
          render={({ field:{value, onChange, ...fieldsProps} }) => (
            <FormItem>
              <FormLabel>File</FormLabel>
              <FormControl>
                <Input accept=".txt, .pdf, .doc" type="file" onChange={(event)=>{
                  const file = event.target.files?.[0];
                  onChange(file)
                }} />
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
