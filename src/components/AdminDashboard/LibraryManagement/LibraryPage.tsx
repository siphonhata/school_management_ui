import React, { useState } from 'react';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  QrCodeIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { BookGrid } from './BookGrid';
import { BorrowRecords } from './BorrowRecords';
import { LibraryStatsCards } from './LibraryStats';
import { LibraryStats, Book, BorrowRecord } from './LibraryTypes';

export const LibraryManagement: React.FC = () => {
  const [activeView, setActiveView] = useState<'books' | 'borrowed' | 'students'>('books');
  const [showAddBook, setShowAddBook] = useState(false);
  const [showIssueBook, setShowIssueBook] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data - replace with actual data from your backend
  const stats: LibraryStats = {
    totalBooks: 248,
    borrowedBooks: 42,
    dueThisWeek: 12,
    activeMembers: 156
  };

  const [books] = useState<Book[]>([
    {
      id: 'B001',
      title: 'Physics for High School',
      author: 'John Smith',
      isbn: '978-3-16-148410-0',
      category: 'Science',
      status: 'available',
      publishedYear: '2023',
      publisher: 'Education Press',
      copies: 5,
      availableCopies: 3,
      shelf: 'A-1'
    },
    // Add more sample books...
  ]);

  const [borrowRecords] = useState<BorrowRecord[]>([
    {
      id: 'BR001',
      bookId: 'B002',
      studentName: 'Mike Wilson',
      studentId: 'ST001',
      borrowDate: '2024-01-01',
      dueDate: '2024-01-15',
      status: 'active'
    },
    // Add more sample records...
  ]);

  const handleIssueBook = (bookId: string) => {
    setShowIssueBook(true);
    // Add logic to handle book issuance
  };

  const handleReturnBook = (recordId: string) => {
    // Add logic to handle book return
    console.log('Returning book:', recordId);
  };

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <LibraryStatsCards stats={stats} />

      {/* Main Content Header */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveView('books')}
            className={`px-4 py-2 rounded-lg ${
              activeView === 'books' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            Books Inventory
          </button>
          <button
            onClick={() => setActiveView('borrowed')}
            className={`px-4 py-2 rounded-lg ${
              activeView === 'borrowed' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            Borrowed Books
          </button>
          <button
            onClick={() => setActiveView('students')}
            className={`px-4 py-2 rounded-lg ${
              activeView === 'students' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            Student Records
          </button>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowIssueBook(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center space-x-2 hover:bg-green-700"
          >
            <ArrowRightIcon className="h-5 w-5" />
            <span>Issue Book</span>
          </button>
          <button
            onClick={() => setShowAddBook(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Book</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-white p-4 rounded-lg">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search books, authors, or ISBN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
          />
        </div>
        <div className="flex space-x-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            <option value="all">All Categories</option>
            <option value="science">Science</option>
            <option value="mathematics">Mathematics</option>
            <option value="literature">Literature</option>
          </select>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <QrCodeIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      {activeView === 'books' && (
        <BookGrid 
          books={books} 
          onIssueBook={handleIssueBook} 
        />
      )}

      {activeView === 'borrowed' && (
        <BorrowRecords 
          records={borrowRecords}
          books={books}
          onReturnBook={handleReturnBook}
        />
      )}

      {activeView === 'students' && (
        <div>Student Records Component - To be implemented</div>
      )}

      {/* Add Book Modal - To be implemented */}
      {/* Issue Book Modal - To be implemented */}
    </div>
  );
};

export default LibraryManagement;