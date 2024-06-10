"use client";
import React from "react";
import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Doc, Id } from "../../../../convex/_generated/dataModel";

const DocumentPage = ({
  params: { documentId },
}: {
  params: { documentId: Id<"documents"> };
}) => {
  const document = useQuery(api.documents.getDocumentId, { documentId });

  if (!document)
    return (
      <div>
        Document not found, or you do not have access to view this document
      </div>
    );
  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl font-bold">{document.title}</h1>

      <div className="flex gap-12">
        <div className="bg-gray-900 p-4 rounded-md flex-1 h-[700px]">
          <iframe
            className="bg-gray-900 rounded-md p-4   w-full h-full text-md"
            src={document?.documentUrl || ""}
          ></iframe>
        </div>
        <div className="w-2/5 bg-gray-900"></div>
      </div>
    </div>
  );
};

export default DocumentPage;
