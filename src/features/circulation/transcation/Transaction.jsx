import CustomTable from "../../../components/table/Table";
import { TransactionColumns, TransactionData } from "./TrascationData";
 

function  Transaction () {
 
    return (
      <>
      <div>
         <div>Transaction History</div>
         <p id="pp566">Search transaction IDs, members, or titles across the current demo data.</p>
          <CustomTable
          data={TransactionData}
          columns={TransactionColumns}
          />
      </div>
      </>
    )
  }


export default Transaction;
