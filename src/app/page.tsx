"use client";
import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Unauthenticated,
  Authenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const createDocument = useMutation(api.documents.createDocuments);

  const documents = useQuery(api.documents.getDocuments);

  const [docs, setDocs] = useState([]);

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
                <ModeToggle />
        <Button
          className="border rounded-md px-6 py-2"
          onClick={() => createDocument({ title: "Hello Mohand"})}
        >
          Covex Function
        </Button>

        {documents?.map((doc) => (
          <div key={doc._id}>{doc.title} - {doc.tokenIdentifier}</div>
        ))}
      </Authenticated>
    </main>
  );
}
