function ContactCard({ user, onDelete }) {
  return (
    <div className="contact-card">
      <h3>{user.name}</h3>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <button
        className="delete-button"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ContactCard;