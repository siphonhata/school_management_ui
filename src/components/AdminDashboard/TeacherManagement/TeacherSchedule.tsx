import React, { useState } from 'react';
import { ClockIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface Period {
  id: string;
  startTime: string;
  endTime: string;
  subject: string;
  class: string;
}

interface DaySchedule {
  day: string;
  periods: Period[];
}

interface TeacherScheduleProps {
  teacherId: number;
  initialSchedule?: DaySchedule[];
  onSave: (schedule: DaySchedule[]) => void;
}

export const TeacherSchedule: React.FC<TeacherScheduleProps> = ({ teacherId, initialSchedule, onSave }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const [schedule, setSchedule] = useState<DaySchedule[]>(initialSchedule || 
    days.map(day => ({ day, periods: [] }))
  );

  const addPeriod = (dayIndex: number) => {
    const newSchedule = [...schedule];
    const newPeriod: Period = {
      id: Math.random().toString(36).substr(2, 9),
      startTime: '',
      endTime: '',
      subject: '',
      class: ''
    };
    newSchedule[dayIndex].periods.push(newPeriod);
    setSchedule(newSchedule);
  };

  const removePeriod = (dayIndex: number, periodIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].periods.splice(periodIndex, 1);
    setSchedule(newSchedule);
  };

  const updatePeriod = (dayIndex: number, periodIndex: number, field: keyof Period, value: string) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].periods[periodIndex][field] = value;
    setSchedule(newSchedule);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(schedule);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Class Schedule</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {schedule.map((daySchedule, dayIndex) => (
            <div key={daySchedule.day} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">{daySchedule.day}</h3>
                <button
                  type="button"
                  onClick={() => addPeriod(dayIndex)}
                  className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  <PlusIcon className="w-4 h-4 mr-1" />
                  Add Period
                </button>
              </div>

              <div className="space-y-3">
                {daySchedule.periods.map((period, periodIndex) => (
                  <div key={period.id} className="bg-white rounded-lg border p-4">
                    <div className="grid grid-cols-5 gap-4">
                      <div className="col-span-2 flex space-x-2">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Start Time
                          </label>
                          <input
                            type="time"
                            value={period.startTime}
                            onChange={(e) => updatePeriod(dayIndex, periodIndex, 'startTime', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            End Time
                          </label>
                          <input
                            type="time"
                            value={period.endTime}
                            onChange={(e) => updatePeriod(dayIndex, periodIndex, 'endTime', e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={period.subject}
                          onChange={(e) => updatePeriod(dayIndex, periodIndex, 'subject', e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Class
                        </label>
                        <input
                          type="text"
                          value={period.class}
                          onChange={(e) => updatePeriod(dayIndex, periodIndex, 'class', e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="flex items-end">
                        <button
                          type="button"
                          onClick={() => removePeriod(dayIndex, periodIndex)}
                          className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 rounded-lg hover:bg-red-50"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {daySchedule.periods.length === 0 && (
                  <div className="text-center py-6 bg-white rounded-lg border">
                    <ClockIcon className="w-12 h-12 mx-auto text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">No periods scheduled</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Save Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherSchedule;