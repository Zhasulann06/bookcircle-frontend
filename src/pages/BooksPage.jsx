import { useMemo, useState } from "react";

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "9780132350884",
    totalChapters: 17,
    category: "Engineering",
  },
  {
    id: 2,
    title: "Clean Architecture",
    author: "Robert C. Martin",
    isbn: "9780134494166",
    totalChapters: 20,
    category: "Architecture",
  },
  {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    isbn: "9780135957059",
    totalChapters: 11,
    category: "Engineering",
  },
  {
    id: 4,
    title: "Design Patterns",
    author: "Gamma, Helm, Johnson, Vlissides",
    isbn: "9780201633610",
    totalChapters: 14,
    category: "Patterns",
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9780735211292",
    totalChapters: 20,
    category: "Habits",
  },
  {
    id: 6,
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9781455586691",
    totalChapters: 8,
    category: "Productivity",
  },
];

function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(books.map((book) => book.category))];
    return ["All categories", ...uniqueCategories];
  }, []);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All categories" ||
        book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Books Library</h1>
          <p className="page-description">
            Browse books prepared for room-based reading. This interface is ready
            to be connected to the future books endpoint.
          </p>
        </div>

        <span className="badge">Catalog Ready</span>
      </div>

      <section className="card" style={{ marginBottom: 20 }}>
        <div className="form-row">
          <label className="label">
            Search by title or author
            <input
              className="input"
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>

          <label className="label">
            Filter by category
            <select
              className="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      {filteredBooks.length > 0 ? (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <article key={book.id} className="book-card">
              <div className="book-pill">{book.category}</div>
              <h3 className="book-title">{book.title}</h3>
              <div className="book-meta">Author: {book.author}</div>
              <div className="book-meta">ISBN: {book.isbn}</div>
              <div className="book-meta">
                Total Chapters: {book.totalChapters}
              </div>

              <button className="button" style={{ marginTop: 18 }} type="button">
                View / Use in Room
              </button>
            </article>
          ))}
        </div>
      ) : (
        <section className="card">
          <h2 className="section-title">No books found</h2>
          <p className="card-text">
            Try changing the search text or selecting another category.
          </p>
        </section>
      )}
    </div>
  );
}

export default BooksPage;