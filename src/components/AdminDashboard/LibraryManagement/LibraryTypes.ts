export interface Book {
    id: string;
    title: string;
    author: string;
    isbn: string;
    category: string;
    status: 'available' | 'borrowed' | 'reserved' | 'lost';
    publishedYear: string;
    publisher: string;
    copies: number;
    availableCopies: number;
    shelf: string;
    description?: string;
    imageUrl?: string;
  }
  
  export interface BorrowRecord {
    id: string;
    bookId: string;
    studentName: string;
    studentId: string;
    borrowDate: string;
    dueDate: string;
    returnDate?: string;
    status: 'active' | 'returned' | 'overdue';
    fine?: number;
  }
  
  export interface Student {
    id: string;
    name: string;
    grade: string;
    section: string;
    borrowingHistory: BorrowRecord[];
    activeLoans: number;
  }
  
  export interface LibraryStats {
    totalBooks: number;
    borrowedBooks: number;
    dueThisWeek: number;
    activeMembers: number;
  }