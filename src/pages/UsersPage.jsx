import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import './UsersPage.css';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="users-page__loading">Загрузка...</p>;
  }

  return (
    <div className="users-page">
      <h1 className="users-page__title">Пользователи</h1>
      <div className="users-page__list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
