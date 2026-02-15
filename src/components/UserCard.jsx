import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/users/${user.id}`)}>
      <h2 className="user-card__name">{user.name}</h2>
      <p className="user-card__field">
        <span className="user-card__label">Username:</span> {user.username}
      </p>
      <p className="user-card__field">
        <span className="user-card__label">Email:</span> {user.email}
      </p>
      <p className="user-card__field">
        <span className="user-card__label">Phone:</span> {user.phone}
      </p>
      <button className="user-card__button">Подробнее</button>
    </div>
  );
}

export default UserCard;
