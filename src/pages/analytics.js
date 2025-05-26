// src/pages/analytics.js
import React, { useMemo } from 'react';
import { useUsers } from '../context/UsersContext';
import { useBookmarks } from '../context/BookmarksContext';

const departments = ['Engineering', 'HR', 'Marketing', 'Sales', 'Design'];

const Analytics = () => {
  const { users } = useUsers();
  const { bookmarks } = useBookmarks();

  const averageRatings = useMemo(() => {
    const deptMap = {};
    departments.forEach(dept => {
      const deptUsers = users.filter(u => u.department === dept);
      const avg =
        deptUsers.reduce((acc, u) => acc + u.rating, 0) / (deptUsers.length || 1);
      deptMap[dept] = avg.toFixed(2);
    });
    return deptMap;
  }, [users]);

  const bookmarkTrend = useMemo(() => {
    return departments.map(dept => {
      const count = bookmarks.filter(b => b.department === dept).length;
      return { dept, count };
    });
  }, [bookmarks]);

  return (
    <div className="container mt-4">
      <h2>📊 Analytics Dashboard</h2>

      <h4 className="mt-4">Department-wise Average Ratings</h4>
      {departments.map(dept => (
        <div key={dept} className="mb-2">
          <label>{dept}</label>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${averageRatings[dept] * 20}%` }}
            >
              {averageRatings[dept]} ★
            </div>
          </div>
        </div>
      ))}

      <h4 className="mt-5">Bookmark Trends</h4>
      {bookmarkTrend.map(({ dept, count }) => (
        <div key={dept} className="mb-2">
          <label>{dept}</label>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: `${count * 10}%` }}
            >
              {count} bookmarked
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
