import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  function salom(e) {
    e.preventDefault();
    window.location.href += 'test';
    localStorage.setItem('user', JSON.stringify([lastName, firstName]))
  }

  return (
    <div className="login__back">
      <div className="login">
        <h1>Kompyuter savodxonligi testi</h1>
        <form onSubmit={salom}>
          <h2>Kirish</h2>
          <input
            type="text"
            placeholder="Ism"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Familiya"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button>Boshlash</button>
        </form>
      </div>
    </div>
  );
}

export default Login;