import Navbar from './../components/Navbar';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Navbar />

      <h1>Home</h1>

      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default HomePage;
