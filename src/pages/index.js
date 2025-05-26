// src/pages/index.js
import React from 'react';
import { useUsers } from '../context/UsersContext';
import UserCard from '../components/UserCard';
import { useFilters } from '../hooks/useFilters';

const Dashboard = () => {
  const { users, loading } = useUsers();
  const {
    filtered,
    search,
    setSearch,
    departments,
    setDepartments,
    ratings,
    setRatings
  } = useFilters(users);

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">HR Performance Dashboard</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name, email, or department"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔽 Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <label className="form-label">Filter by Department</label>
          <select
            className="form-select"
            multiple
            value={departments}
            onChange={e =>
              setDepartments([...e.target.selectedOptions].map(o => o.value))
            }
          >
            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="col-md-6 mb-2">
          <label className="form-label">Filter by Rating</label>
          <select
            className="form-select"
            multiple
            value={ratings}
            onChange={e =>
              setRatings([...e.target.selectedOptions].map(o => parseInt(o.value)))
            }
          >
            {[1, 2, 3, 4, 5].map(r => (
              <option key={r} value={r}>{'★'.repeat(r)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 👤 Filtered User List */}
      <div className="d-flex flex-wrap">
        {filtered.length === 0 ? (
          <p>No users match your search or filters.</p>
        ) : (
          filtered.map(user => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
