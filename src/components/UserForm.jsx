import { useState } from "react";

function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      phone: phone,
    };

    onAddUser(newUser);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="tel"
        placeholder="Enter Phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default UserForm;