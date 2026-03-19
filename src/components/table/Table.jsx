import React from "react";
import "./table.css";

const Table = () => {
  const data = [
    {
      id: "TXN001",
      member: "Sarah Johnson",
      book: "The Great Gatsby",
      issueDate: "2026-03-01",
      dueDate: "2026-03-15",
      status: "Issued",
    },
    {
      id: "TXN002",
      member: "Michael Chen",
      book: "Clean Code",
      issueDate: "2026-02-20",
      dueDate: "2026-03-06",
      status: "Overdue",
    },
    {
      id: "TXN004",
      member: "Sarah Johnson",
      book: "Sapiens",
      issueDate: "2026-03-05",
      dueDate: "2026-03-19",
      status: "Issued",
    },
    {
      id: "TXN005",
      member: "Michael Chen",
      book: "Atomic Habits",
      issueDate: "2026-02-28",
      dueDate: "2026-03-14",
      status: "Issued",
    },
  ];

  return (
    <div className="table-container">
      <h2>Issued Books</h2>
      <p className="subtitle">
        Select an active transaction to process a return.
      </p>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Member</th>
            <th>Book</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.member}</td>
              <td>{item.book}</td>
              <td>{item.issueDate}</td>
              <td>{item.dueDate}</td>

              <td>
                <span
                  className={
                    item.status === "Overdue"
                      ? "status overdue"
                      : "status issued"
                  }
                >
                  {item.status}
                </span>
              </td>

              <td>
                <button className="return-btn">Return Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;