import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Dacă nu dă eroare, înseamnă că e logat
      navigate("/admin");
    } catch (err) {
      console.error("Eroare Firebase:", err.code, err.message);
      setError("Email sau parolă greșită!");
    }
  };

  return (
    <div className="page" style={{ maxWidth: "400px", margin: "4rem auto", textAlign: "center" }}>
      <h2 style={{color: '#004aad'}}>Autentificare Admin 🛡️</h2>
      <p style={{color: '#666', marginBottom: '20px'}}>Acces doar pentru organizatorii EuroStud</p>
      
      {error && <p style={{ color: "red", background: "#ffe6e6", padding: "10px", borderRadius: "5px" }}>{error}</p>}

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="email"
          placeholder="Email Admin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button 
          type="submit" 
          style={{ padding: "12px", background: "#004aad", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
        >
          Intră în cont
        </button>
      </form>
    </div>
  );
};

export default Login;