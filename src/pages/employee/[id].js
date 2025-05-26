// src/pages/employee/[id].js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../../context/UsersContext';

const mockFeedback = [
  "Great team player.",
  "Consistently meets deadlines.",
  "Needs improvement on communication.",
];

const EmployeeDetails = () => {
  const { id } = useParams();
  const { users } = useUsers();
  const [tab, setTab] = useState('overview');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const found = users.find(u => u.id === parseInt(id));
    setUser(found);
  }, [id, users]);

  if (!user) return <div className="container mt-4">Loading employee...</div>;

  return (
    <div className="container mt-4">
      <h2>{user.firstName} {user.lastName}</h2>
      <p className="text-muted">{user.email} • {user.department}</p>

      {/* Tabs */}
      <ul className="nav nav-tabs my-4">
        {['overview', 'projects', 'feedback'].map(t => (
          <li className="nav-item" key={t}>
            <button
              className={`nav-link ${tab === t ? 'active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Dynamic Tab Content */}
      <div className="p-3 border rounded bg-light">
        {tab === 'overview' && (
          <>
            <p><strong>Address:</strong> {user.address?.address}, {user.address?.city}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Bio:</strong> Passionate about building scalable systems and mentoring juniors.</p>
          </>
        )}

        {tab === 'projects' && (
          <>
            <ul>
              <li>Project Atlas – Internal HR Tool (2024)</li>
              <li>Employee Onboarding Automation (2023)</li>
              <li>Performance Review Engine (2022)</li>
            </ul>
          </>
        )}

        {tab === 'feedback' && (
          <>
            <ul>
              {mockFeedback.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <form className="mt-3">
              <label>Add Feedback:</label>
              <textarea className="form-control mb-2" rows="3" />
              <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
