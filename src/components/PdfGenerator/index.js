import React from "react";
import "./style.css";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const docDefinition = {
  content: [
    "Hello",
    "Another paragraph, time a little bit longer to make sure, this line will be divided into at least two lines",
  ],
};

const PdfGenerator = () => {
  const create = () => {
    pdfMake.createPdf(docDefinition).open({}, window.open("", "_blank"));
  };

  return (
    <button className="btn-pdfGenerator" type="button" onClick={create}>
      Relatório em PDF
    </button>
  );
};

export default PdfGenerator;
