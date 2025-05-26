import React from 'react';
import { useBookmarks } from '../context/BookmarksContext';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  const {
    bookmarks,
    addBookmark,
    removeBookmark,
    promotedUsers,
    promoteUser,
    demoteUser,
  } = useBookmarks();

  const isBookmarked = bookmarks.some(b => b.id === user.id);
  const isPromoted = promotedUsers.includes(user.id);

  const toggleBookmark = () => {
    if (isBookmarked) removeBookmark(user.id);
    else addBookmark(user);
  };

  const togglePromote = () => {
    if (isPromoted) demoteUser(user.id);
    else promoteUser(user.id);
  };

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={user.avatar} className="card-img-top" alt="Avatar" />
      <div className="card-body">
        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
        <p className="card-text">{user.email}</p>
        <p className="card-text"><strong>Dept:</strong> {user.department}</p>
        <div className="mb-2">
          Rating: {'★'.repeat(user.rating)}{'☆'.repeat(5 - user.rating)}
        </div>
        <Link to={`/employee/${user.id}`} className="btn btn-primary me-2">View</Link>

        <button
          className={`btn me-2 ${isBookmarked ? 'btn-success' : 'btn-outline-secondary'}`}
          onClick={toggleBookmark}
        >
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>

        <button
          className={`btn ${isPromoted ? 'btn-warning' : 'btn-success'}`}
          onClick={togglePromote}
        >
          {isPromoted ? 'Promoted' : 'Promote'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
