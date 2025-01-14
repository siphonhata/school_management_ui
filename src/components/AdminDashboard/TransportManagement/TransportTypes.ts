export interface Vehicle {
    id: string;
    registrationNumber: string;
    capacity: number;
    model: string;
    year: string;
    status: 'active' | 'maintenance' | 'inactive';
    lastMaintenance?: string;
    nextMaintenance?: string;
    assignedDriver?: Driver;
    assignedRoute?: Route;
    fuelEfficiency?: string;
  }
  
  export interface Driver {
    id: string;
    name: string;
    licenseNumber: string;
    contact: string;
    experience: number;
    status: 'available' | 'on-duty' | 'on-leave';
    joiningDate: string;
    assignedVehicle?: string;
    rating?: number;
  }
  
  export interface Route {
    id: string;
    name: string;
    startPoint: string;
    endPoint: string;
    stops: RouteStop[];
    distance: string;
    estimatedTime: string;
    assignedVehicle?: string;
    assignedDriver?: string;
    studentsCount: number;
    morningDeparture: string;
    afternoonDeparture: string;
  }
  
  export interface RouteStop {
    id: string;
    name: string;
    time: string;
    sequence: number;
    studentsCount: number;
    coordinates?: {
      lat: number;
      lng: number;
    };
  }
  
  export interface Student {
    id: string;
    name: string;
    grade: string;
    section: string;
    pickupPoint: string;
    routeId: string;
    parentContact: string;
    pickupTime: string;
    dropTime: string;
    status: 'active' | 'inactive';
  }
  
  export interface TransportStats {
    totalVehicles: number;
    activeVehicles: number;
    totalDrivers: number;
    activeRoutes: number;
    totalStudents: number;
  }