const Header = ({ refreshPage }) => (
  <header className="header">
    <div className="header-title" onClick={refreshPage}>
      START YOUR DAY RIGHT
    </div>
    <div className="sub-title">
      <p>
        Are you feeling rough that you had to wake up early to work/go to school
        and perhaps you need some emotional boost?
      </p>
      <p>You came to the right place!</p>
    </div>
  </header>
);

export default Header;
