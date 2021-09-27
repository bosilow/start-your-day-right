const Header = ({ refreshPage }) => (
  <header className="header">
    <h1 className="header-title" onClick={refreshPage}>
      START YOUR DAY RIGHT
    </h1>
    <p>
      Are you feeling rough that you had to wake up early to work/go to school
      and perhaps you need some emotional boost?
    </p>
    <p>You came to the right place!</p>
  </header>
);

export default Header;
