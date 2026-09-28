import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id));
};
  return (
    <div className="app">
      <h1>Contact Cards</h1>

      <p className="subtitle">
        Add users and create contact cards dynamically
      </p>

      <UserForm onAddUser={addUser} />

      <UserList
  users={users}
  onDelete={deleteUser}
/>
    </div>
  );
}

export default App;