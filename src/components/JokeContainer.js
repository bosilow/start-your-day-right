const JokeContainer = ({ fetchJoke, laughingEmoji, joke }) => (
  <div className="joke-container">
    <button
      type="button"
      className="fetch-btn"
      id="joke-btn"
      onClick={fetchJoke}
    >
      GIVE ME A JOKE!
      <img src={laughingEmoji} alt="laughing emoji" className="btn-emoji" />
    </button>
    <span className="joke-text" onClick={fetchJoke}>
      {joke}
    </span>
  </div>
);

export default JokeContainer;
