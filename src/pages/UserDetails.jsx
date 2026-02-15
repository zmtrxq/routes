import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserDetails.css';

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="user-details__loading">Загрузка...</p>;
  }

  return (
    <div className="user-details">
      <button className="user-details__back" onClick={() => navigate('/users')}>
        ← Назад
      </button>
      <h1 className="user-details__name">{user.name}</h1>
      <div className="user-details__info">
        <p className="user-details__field">
          <span className="user-details__label">ID:</span> {user.id}
        </p>
        <p className="user-details__field">
          <span className="user-details__label">Username:</span> {user.username}
        </p>
        <p className="user-details__field">
          <span className="user-details__label">Email:</span> {user.email}
        </p>
        <p className="user-details__field">
          <span className="user-details__label">Phone:</span> {user.phone}
        </p>
        <p className="user-details__field">
          <span className="user-details__label">Website:</span> {user.website}
        </p>
        <p className="user-details__field">
          <span className="user-details__label">Company:</span> {user.company.name}
        </p>
        <p className="user-details__field">
          <span className="user-details__label">City:</span> {user.address.city}
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
