import CustomTable from "../../../components/table/Table";
import Table from "../../../components/table/Table";
import { ReturnBookColumns, ReturnBookData } from "./ReturnBookData";

function ReturnBook() {
  return (
    <>
      <div>
        <div>Issued Books</div>
        <p id="pp566">Select an active transaction to process a return.</p>
        <CustomTable
          data={ReturnBookData}
          columns={ReturnBookColumns}
        />
      </div>
    </>
  );
}

export default ReturnBook;
