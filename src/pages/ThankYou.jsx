import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="home-container">
      
      <div className="background-overlay"></div>

      <div className="glass-card success-card">
        <div className="success-icon-wrapper">
          <div className="checkmark">✓</div>
        </div>

        <h1>Mulțumim! 🚀</h1>
        <p>
          Feedback-ul tău a ajuns cu bine la noi. <br />
          Datorită ție, viitoarele proiecte EuroStud vor fi și mai faine!
        </p>

        <div className="action-buttons">
          <Link to="/testimonials" className="btn-primary">
            Vezi alte experiențe 🌍
          </Link>
          
          <Link to="/" className="btn-secondary">
            Înapoi la Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;