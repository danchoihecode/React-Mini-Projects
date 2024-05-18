import React from 'react';
import './App.css';
import { Customers } from './Customers'
import { ExportExcel } from "./ExportExcel"
import { ExportPDF } from "./ExportPDF"
export default function App() {

  let customers = [];
  for (let i = 0; i <= 25; i++) {
    customers = [...customers, {
      firstName: `first${i}`, lastName: `last${i}`,
      email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`
    }];
  }

  return (
    <div >
      <div className="row">
        <div >
          <ExportExcel data={customers} />
        </div>
        <div >
          <ExportPDF data={customers} />
        </div>
      </div>
      <Customers customers={customers} />
    </div>
  );
}
