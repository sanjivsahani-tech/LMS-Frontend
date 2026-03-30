import { useMemo, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      subtitle: "",
      author: "F. Scott Fitzgerald",
      publisher: "Scribner",
      isbn: "978-0-7432-7356-5",
      category: "Fiction",
      language: "English",
      publishedYear: "1925",
      edition: "1st Edition",
      copies: 5,
      available: 2,
      status: "Available",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      subtitle: "",
      author: "Harper Lee",
      publisher: "J. B. Lippincott & Co.",
      isbn: "978-0-06-112008-4",
      category: "Fiction",
      language: "English",
      publishedYear: "1960",
      edition: "1st Edition",
      copies: 4,
      available: 1,
      status: "Low Stock",
    },
    {
      id: 3,
      title: "Clean Code",
      subtitle: "",
      author: "Robert C. Martin",
      publisher: "Prentice Hall",
      isbn: "978-0-13-235088-4",
      category: "Technology",
      language: "English",
      publishedYear: "2008",
      edition: "1st Edition",
      copies: 8,
      available: 0,
      status: "Out of Stock",
    },
    {
      id: 4,
      title: "Sapiens",
      subtitle: "A Brief History of Humankind",
      author: "Yuval Noah Harari",
      publisher: "Harvill Secker",
      isbn: "978-0-06-231609-7",
      category: "History",
      language: "English",
      publishedYear: "2011",
      edition: "1st Edition",
      copies: 6,
      available: 3,
      status: "Available",
    },
    {
      id: 5,
      title: "Atomic Habits",
      subtitle: "",
      author: "James Clear",
      publisher: "Avery",
      isbn: "978-0-7352-1129-2",
      category: "Self-Help",
      language: "English",
      publishedYear: "2018",
      edition: "1st Edition",
      copies: 10,
      available: 7,
      status: "Available",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    author: "",
    publisher: "",
    isbn: "",
    category: "Fiction",
    language: "English",
    publishedYear: "2026",
    edition: "First Edition",
    copies: 1,
    available: 1,
    shelfLocation: "",
    description: "",
  });

  const categories = [
    "All Categories",
    "Fiction",
    "Non-Fiction",
    "Technology",
    "Science",
    "History",
    "Biography",
    "Self-Help",
    "Business",
    "Philosophy",
    "psychology",
    "Art",
    "Poetry"
  ];

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [books, searchTerm, selectedCategory]);

  const getStatus = (available) => {
    if (available === 0) return "Out of Stock";
    if (available <= 1) return "Low Stock";
    return "Available";
  };

  const getStatusClasses = (status) => {
    if (status === "Available") {
      return "bg-green-100 text-green-700";
    }
    if (status === "Low Stock") {
      return "bg-yellow-100 text-yellow-700";
    }
    return "bg-red-100 text-red-700";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "copies" || name === "available"
          ? Number(value)
          : value,
    }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const finalStatus = getStatus(Number(formData.available));

    const newBook = {
      id: books.length + 1,
      title: formData.title,
      subtitle: formData.subtitle,
      author: formData.author,
      publisher: formData.publisher,
      isbn: formData.isbn,
      category: formData.category,
      language: formData.language,
      publishedYear: formData.publishedYear,
      edition: formData.edition,
      copies: Number(formData.copies),
      available: Number(formData.available),
      status: finalStatus,
      shelfLocation: formData.shelfLocation,
      description: formData.description,
    };

    setBooks((prev) => [newBook, ...prev]);

    setFormData({
      title: "",
      subtitle: "",
      author: "",
      publisher: "",
      isbn: "",
      category: "Fiction",
      language: "English",
      publishedYear: "2026",
      edition: "First Edition",
      copies: 1,
      available: 1,
      shelfLocation: "",
      description: "",
    });

    setIsModalOpen(false);
  };

  return (
  <div className="p-5">
    <div className="mx-auto max-w-6xl">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Books</h1>
          <p className="text-1sm text-gray-500">
            Manage catalog metadata and book availability.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-5 py-2 rounded-md text-sm"
        >
          + Add Book
        </button>
      </div>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg bg-gray-100 px-3 py-2 text-sm w-full"
        />

      <div ref={dropdownRef} className="relative w-48">
 <button
  onClick={() => setIsOpen(!isOpen)}
      className="w-full border rounded-lg px-3 py-2 pr-4 font-semibold text-sm bg-gray-100 flex justify-between items-center gap-2"
>
  {selectedCategory}

  <ChevronDown
  className={`w-4 h-4 transition-transform ${
    isOpen ? "rotate-180" : ""
  }`}
/>

</button>

  {isOpen && (
    <div className="absolute mt-1 w-full bg-white border rounded-md shadow-md z-10 max-h-60 overflow-y-auto">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => {
            setSelectedCategory(category);
            setIsOpen(false);
          }}
          className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-200"
        >
          {category}
        </div>
      ))}
    </div>
  )}
</div>
      </div>

      <div className="border border-gray-200 rounded-3xl bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Author</th>
                <th className="p-3">Category</th>
                <th className="p-3">ISBN</th>
                <th className="p-3">Copies</th>
                <th className="p-3">Available</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book.id} className="border-t">
                    <td className="p-3">
                      <div className="font-medium">{book.title}</div>
                      {book.subtitle && (
                        <div className="text-xs text-gray-500">
                          {book.subtitle}
                        </div>
                      )}
                    </td>

                    <td className="p-3">{book.author}</td>

                    <td className="p-3">
                      <span className="px-2 py-1 border rounded text-xs">
                        {book.category}
                      </span>
                    </td>

                    <td className="p-3 text-gray-500">{book.isbn}</td>
                    <td className="p-3">{book.copies}</td>
                   <td
                      className={`p-3 font-medium ${
                       book.available === 0
                     ? "text-red-600"
                      : book.available <= 1
                     ? "text-yellow-600"
                     : "text-green-600"
                    }`}
                    >
                     {book.available}
                   </td>

                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-xs ${getStatusClasses(
                          book.status
                        )}`}
                      >
                        {book.status}
                      </span>
                    </td>

                    <td className="p-3">⋮</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-6 text-center text-gray-500">
                    No books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40">
        <div className="bg-white rounded-lg w-full max-w-2xl p-5">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Add New Book</h2>
            <button onClick={() => setIsModalOpen(false)}>X</button>
          </div>

          <form onSubmit={handleAddBook} className="space-y-4">
            <input
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />

            <input
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />

            <input
              name="isbn"
              placeholder="ISBN"
              value={formData.isbn}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            />

            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
);
}