import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf'; 
import "jspdf-autotable"
export const ExportPDF = ({ data }) => {

  const columns = [
    { title: "First Name", dataKey: "firstName" },
    { title: "Last Name", dataKey: "lastName" },
    { title: "Email", dataKey: "email" },
    { title: "Address", dataKey: "address" },
    { title: "Zipcode", dataKey: "zipcode" }
  ]
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      columns: columns,
      body: data
    })
    doc.save('data.pdf');
  };


  return (
    <div>
      <Button variant="primary" onClick={handleExportPDF}>
        PDF
      </Button>
    </div>
  );
};