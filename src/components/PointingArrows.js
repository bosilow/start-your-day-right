const PointingArrows = ({ gifSource }) => (
  <div className="pointing-arrows">
    <img
      src={gifSource}
      alt="arrow"
      className="pointer-arrow"
      id="dog-pointer-arrow"
    />
    <img
      src={gifSource}
      alt="arrow"
      className="pointer-arrow"
      id="joke-pointer-arrow"
    />
  </div>
);

export default PointingArrows;
