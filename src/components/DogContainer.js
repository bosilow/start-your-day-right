const DogContainer = ({ fetchDog, dogEmoji, dog }) => (
  <div className="dog-container">
    <button type="button" className="fetch-btn" id="dog-btn" onClick={fetchDog}>
      <span className="button__text">
        GIVE ME A DOG!
        <img src={dogEmoji} alt="dog emoji" className="btn-emoji" />
      </span>
    </button>
    <img src={dog} alt="dog" className="dog-img" onClick={fetchDog} />
  </div>
);

export default DogContainer;
