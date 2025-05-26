// src/hooks/useFilters.js
import { useState, useMemo } from 'react';

export const useFilters = (users) => {
  const [search, setSearch] = useState('');
  const [departments, setDepartments] = useState([]);
  const [ratings, setRatings] = useState([]);

  const filtered = useMemo(() => {
    return users.filter(user => {
      const matchSearch =
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.department.toLowerCase().includes(search.toLowerCase());

      const matchDept = departments.length === 0 || departments.includes(user.department);
      const matchRating = ratings.length === 0 || ratings.includes(user.rating);

      return matchSearch && matchDept && matchRating;
    });
  }, [users, search, departments, ratings]);

  return { filtered, search, setSearch, departments, setDepartments, ratings, setRatings };
};
