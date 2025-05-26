import React, { createContext, useContext, useState, useEffect } from 'react';

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  // Bookmarks state with localStorage persistence
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const stored = localStorage.getItem('bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Promoted users state with localStorage persistence
  const [promotedUsers, setPromotedUsers] = useState(() => {
    try {
      const stored = localStorage.getItem('promotedUsers');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('promotedUsers', JSON.stringify(promotedUsers));
  }, [promotedUsers]);

  const addBookmark = (user) => {
    setBookmarks(prev => {
      if (!prev.find(u => u.id === user.id)) {
        return [...prev, user];
      }
      return prev;
    });
  };

  const removeBookmark = (id) => {
    setBookmarks(prev => prev.filter(user => user.id !== id));
  };

  const promoteUser = (id) => {
    setPromotedUsers(prev => (prev.includes(id) ? prev : [...prev, id]));
  };

  const demoteUser = (id) => {
    setPromotedUsers(prev => prev.filter(uid => uid !== id));
  };

  return (
    <BookmarksContext.Provider value={{
      bookmarks,
      addBookmark,
      removeBookmark,
      promotedUsers,
      promoteUser,
      demoteUser,
    }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = () => useContext(BookmarksContext);
