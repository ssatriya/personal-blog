"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Button } from "./ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = "/build/pdf.worker.min.mjs";

const PDFViewer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onDocumentLoadSuccess = () => {
    setIsLoading(false);
  };

  const downloadPDF = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center gap-6">
      <Button onClick={downloadPDF}>Download</Button>
      <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} scale={1.1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
