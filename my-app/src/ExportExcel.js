import Button from 'react-bootstrap/Button';
import * as XLSX from 'xlsx';

export const ExportExcel = ({ data }) => {
  const handleExportExcel = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, 'MySheet');
    XLSX.writeFile(wb, 'data.xlsx');
  };
  
  return (
    <div>
      <Button variant="warning" onClick={handleExportExcel}>
        excel
      </Button>
    </div>
  );
};
