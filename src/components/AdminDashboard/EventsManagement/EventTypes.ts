export interface Event {
    id: string;
    title: string;
    description: string;
    type: 'academic' | 'sports' | 'cultural' | 'meeting' | 'holiday' | 'exam';
    startDate: string;
    endDate: string;
    startTime?: string;
    endTime?: string;
    location: string;
    organizer: string;
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
    attendees?: string[];
    repeatType?: 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: 'high' | 'medium' | 'low';
    notifyBefore?: number; // minutes
    attachments?: string[];
  }
  
  export interface EventCategory {
    id: string;
    name: string;
    color: string;
    description?: string;
  }
  
  export interface EventStats {
    totalEvents: number;
    upcomingEvents: number;
    ongoingEvents: number;
    thisMonthEvents: number;
  }