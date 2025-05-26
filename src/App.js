import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookmarksProvider } from './context/BookmarksContext';
import { UsersProvider } from './context/UsersContext';
import Dashboard from './pages/index';
import Bookmarks from './pages/bookmarks';
import Analytics from './pages/analytics';
import EmployeeDetails from './pages/employee/[id]';

function App() {
  return (
    <Router basename="/hr-dashboard">
      <UsersProvider>
        <BookmarksProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
          </Routes>
        </BookmarksProvider>
      </UsersProvider>
    </Router>
  );
}

export default App;
