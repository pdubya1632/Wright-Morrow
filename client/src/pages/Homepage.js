import { React, Link } from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;