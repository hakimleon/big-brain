"use client";
import {
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";
import DocumentCard from "./document-card";
import CreateDocumentButton from "./create-document-button";

export default function Home() {

  const documents = useQuery(api.documents.getDocuments);


  return (
    <main className="p-4  ">
      <div className="flex justify-between py-2">
        <h1 className="text-3xl font-semibold">Documents</h1>
       <CreateDocumentButton />
      </div>
      <div className="grid-container">
        {documents?.map((doc) => <DocumentCard key={doc._id} doc={doc} />)}
      </div>
    </main>
  );
}
