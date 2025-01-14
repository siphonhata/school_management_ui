import React from 'react';
import { Book } from '.';


interface BookGridProps {
  books: Book[];
  onIssueBook: (bookId: string) => void;
}

export const BookGrid: React.FC<BookGridProps> = ({ books, onIssueBook }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg text-gray-900">{book.title}</h3>
                <p className="text-sm text-gray-500">by {book.author}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                book.status === 'available' 
                  ? 'bg-green-100 text-green-800'
                  : book.status === 'borrowed'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>ISBN: {book.isbn}</p>
              <p>Publisher: {book.publisher} ({book.publishedYear})</p>
              <p>Category: {book.category}</p>
              <p>Shelf: {book.shelf}</p>
              <div className="flex justify-between items-center pt-2 border-t">
                <span>Copies: {book.availableCopies}/{book.copies}</span>
                {book.status === 'available' && (
                  <button 
                    onClick={() => onIssueBook(book.id)}
                    className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-md"
                  >
                    Issue Book
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};