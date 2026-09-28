import ContactCard from "./ContactCard";

function UserList({ users, onDelete }) {
  return (
    <div className="user-list">
      <h2>My Contacts</h2>

      {users.length === 0 ? (
        <p className="empty-message">
          No contacts added yet.
        </p>
      ) : (
        <div className="cards-container">
          {users.map((user) => (
            <ContactCard
              key={user.id}
              user={user}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;