import Table from "../../components/table/Table";

function  ReturnBook () {
 
    return (<>
      <div>
         <div>Issued Books</div>
         <p id="pp566">Select an active transaction to process a return.</p>
         <Table/>
      </div>
      </>
    )
  }


export default ReturnBook;
