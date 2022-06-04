import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/freelances">Freelance</Link>
      <Link to="/results">Results</Link>
      <Link to="/survey/42">Questionnaire</Link>
    </nav>
  );
}

export default Header;
