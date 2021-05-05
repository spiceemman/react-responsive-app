import logo from "./images/logo.svg"
import mockup from "./images/illustration-mockups.svg"

import './App.css';

function App() {

  return (
    <>

      <header>
        <img src={logo} alt=""/>
      </header>

      <main>
        <img src={mockup} alt=""/>
        <div className="content">
          <h2>Build the community your fans will love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>
          <button>Register</button>
        </div>
        
      </main>

      <footer>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      </footer>
      
    </>
  );
}

export default App;
