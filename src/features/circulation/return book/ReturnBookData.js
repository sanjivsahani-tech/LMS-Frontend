export const ReturnBookData = [
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

export const ReturnBookColumns = [
  { key: "id", header: "Transaction ID" },
  { key: "member", header: "Member" },
  { key: "book", header: "Book" },
  { key: "issueDate", header: "Issue Date" },
  { key: "dueDate", header: "Due Date" },
  { key: "status", header: "Status" },
  { key: "action", header: "Action" },
];
