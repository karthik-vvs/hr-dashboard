// src/context/UsersContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=20')
      .then(res => res.json())
      .then(data => {
        const enhancedUsers = data.users.map(user => ({
          ...user,
          department: randomDepartment(),
          rating: getRandomRating(),
          avatar: `https://randomuser.me/api/portraits/${
            user.gender === 'male' ? 'men' : 'women'
          }/${user.id}.jpg`
        }));
        setUsers(enhancedUsers);
        setLoading(false);
      });
  }, []);

  const getUserById = id => users.find(u => u.id === parseInt(id));

  return (
    <UsersContext.Provider value={{ users, getUserById, loading }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);

const departments = ['Engineering', 'HR', 'Design', 'Marketing', 'Sales'];
const randomDepartment = () => departments[Math.floor(Math.random() * departments.length)];
const getRandomRating = () => Math.ceil(Math.random() * 5);
