import React, { useState } from "react";
import "./circulation.css";
import IssueBook from "./IssueBook";
import ReturnBook from "./return book/ReturnBook";
import Transaction from "./transcation/Transaction";


export function CirculationPage() {
  const [activeTab, setActiveTab] = useState("issue");
  return (
    <>
      <div>
        <h1>Circulation</h1>
        <p id="cirp1">
          Issue books, process returns, and inspect transaction history
        </p>

        <div className="stats-container">
          <div className="card">
            <p>Currently Issued</p>
            <h2>4</h2>
          </div>

          <div className="card">
            <p>Returned</p>
            <h2>1</h2>
          </div>

          <div className="card">
            <p>Overdue</p>
            <h2 className="danger">1</h2>
          </div>

          <div className="card">
            <p>Transactions</p>
            <h2>5</h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="tab-container">
          <button
            className={activeTab === "issue" ? "tab active" : "tab"}
            onClick={() => setActiveTab("issue")}
          >
            Issue Book
          </button>

          <button
            className={activeTab === "return" ? "tab active" : "tab"}
            onClick={() => setActiveTab("return")}
          >
            Return Book
          </button>

          <button
            className={activeTab === "transactions" ? "tab active" : "tab"}
            onClick={() => setActiveTab("transactions")}
          >
            All Transactions
          </button>
        </div>

        {/* Content */}
        <div className="tab-content">
          {activeTab === "issue" && <IssueBook />}
          {activeTab === "return" && <ReturnBook />}
          {activeTab === "transactions" && <Transaction />}
        </div>
       
      </div>
    </>
  );
}
