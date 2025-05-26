// src/pages/bookmarks.js
import React from 'react';
import { useBookmarks } from '../context/BookmarksContext';
import UserCard from '../components/UserCard';

const Bookmarks = () => {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <div className="container mt-4">
      <h2>📌 Bookmarked Employees</h2>
      {bookmarks.length === 0 ? (
        <p className="mt-3">No bookmarks yet.</p>
      ) : (
        <div className="d-flex flex-wrap gap-3">
          {bookmarks.map(user => (
            <div key={user.id} className="card p-3" style={{ width: '300px' }}>
              <h5>{user.firstName} {user.lastName}</h5>
              <p className="text-muted">{user.department}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeBookmark(user.id)}
                >
                  Remove
                </button>
                <button className="btn btn-outline-success btn-sm">Promote</button>
                <button className="btn btn-outline-primary btn-sm">Assign to Project</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
