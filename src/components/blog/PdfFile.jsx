import React from 'react';
import ReactPDF from '@react-pdf/renderer';



import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import Blog from './Blog';



const PdfFile = () => (
  <PDFViewer style={{width: "100%", height:"600px"}}>
    <MyDocument></MyDocument>
    
  </PDFViewer>
  
);

ReactDOM.render(<PdfFile></PdfFile>, document.getElementById('root'));
// ReactPDF.render(<MyDocument />, `${__pdf}/example.pdf`);

export default PdfFile;