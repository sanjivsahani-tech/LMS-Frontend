export const TransactionData = [
  {
    id: "TXN001",
    member: "Sarah Johnson",
    book: "The Great Gatsby",
    issueDate: "2026-03-01",
    dueDate: "2026-03-15",
    returnDate: "-",
    status: "issued",
    fine: "-",
  },
  {
    id: "TXN002",
    member: "Michael Chen",
    book: "Clean Code",
    issueDate: "2026-02-20",
    dueDate: "2026-03-06",
    returnDate: "-",
    status: "overdue",
    fine: "$8.00",
  },
  {
    id: "TXN003",
    member: "Emily Davis",
    book: "To Kill a Mockingbird",
    issueDate: "2026-02-25",
    dueDate: "2026-03-11",
    returnDate: "2026-03-10",
    status: "returned",
    fine: "-",
  },
  {
    id: "TXN004",
    member: "Sarah Johnson",
    book: "Sapiens",
    issueDate: "2026-03-05",
    dueDate: "2026-03-19",
    returnDate: "-",
    status: "issued",
    fine: "-",
  },
  {
    id: "TXN005",
    member: "Michael Chen",
    book: "Atomic Habits",
    issueDate: "2026-02-28",
    dueDate: "2026-03-14",
    returnDate: "-",
    status: "issued",
    fine: "-",
  },
];
export const TransactionColumns = [
  {
    key: "id",
    header: "Transaction ID",
  },
  {
    key: "member",
    header: "Member",
  },
  {
    key: "book",
    header: "Book",
  },
  {
    key: "issueDate",
    header: "Issue Date",
  },
  {
    key: "dueDate",
    header: "Due Date",
  },
  {
    key: "returnDate",
    header: "Return Date",
  },
  {
    key: "status",
    header: "Status",
  },
  {
    key: "fine",
    header: "Fine",
  },
];
