import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
const CreateDocumentButton = () => {

  const [open, setOpen] = useState(false);

  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="border rounded-md px-6 py-2">Upload Document</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] min-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Upload Document
          </DialogTitle>
          <DialogDescription className="text-center">
            Upload a team document for you to teach over in the future.
          </DialogDescription>
        </DialogHeader>
        <UploadDocumentForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateDocumentButton;
