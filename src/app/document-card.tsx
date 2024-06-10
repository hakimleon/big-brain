import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Doc } from "../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

const DocumentCard = ({ doc }: { doc: Doc<"documents"> }) => {
    

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>{doc.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} asChild>
          <Link href={`/documents/${doc._id}`}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
