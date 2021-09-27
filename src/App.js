import { useState } from "react";

import pointerArrow from "./assets/arrow.gif";
import dogEmoji from "./assets/dogemoji.png";
import laughingEmoji from "./assets/laughingemoji.png";

import Header from "./components/Header";
import PointingArrows from "./components/PointingArrows";
import ErrorMsg from "./components/ErrorMsg";
import DogContainer from "./components/DogContainer";
import JokeContainer from "./components/JokeContainer";

const App = () => {
  const { getDadjoke } = require("random-jokes");

  const [dog, setDog] = useState("");
  const [joke, setJoke] = useState("");
  const [isError, setError] = useState(false);
  const [isLoadingDog, setLoadingDog] = useState(false);
  const [isLoadingJoke, setLoadingJoke] = useState(false);

  const fetchDog = async () => {
    const dogPointerArrow = document.querySelector("#dog-pointer-arrow");
    const dogImg = document.querySelector(".dog-img");
    const dogBtn = document.querySelector("#dog-btn");
    dogBtn.innerHTML = "";
    setError(false);
    setLoadingDog(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDog(data.message);
      manipulateContainer(dogPointerArrow, dogImg, dogBtn, "MORE DOGS!");
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoadingDog(false);
  };

  const fetchJoke = async () => {
    const jokePointerArrow = document.querySelector("#joke-pointer-arrow");
    const jokeText = document.querySelector(".joke-text");
    const jokeBtn = document.querySelector("#joke-btn");
    jokeBtn.innerHTML = "";
    setError(false);
    setLoadingJoke(true);
    try {
      const joke = await getDadjoke();
      setJoke(joke);
      manipulateContainer(jokePointerArrow, jokeText, jokeBtn, "MORE JOKES!");
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoadingJoke(false);
  };

  const manipulateContainer = (toHideElem, toShowElem, btnSelect, btnText) => {
    toHideElem.classList.add("hide");
    toShowElem.classList.add("show");
    btnSelect.classList.remove("button--loading");
    btnSelect.innerHTML = btnText.toUpperCase();
  };

  if (isLoadingDog) {
    document.querySelector("#dog-btn").classList.add("button--loading");
  } else if (isLoadingJoke) {
    document.querySelector("#joke-btn").classList.add("button--loading");
  }

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <Header refreshPage={refreshPage} />
      <hr />
      {isError ? <ErrorMsg /> : ""}
      <PointingArrows gifSource={pointerArrow} />
      <div className="main-container">
        <DogContainer fetchDog={fetchDog} dogEmoji={dogEmoji} dog={dog} />
        <JokeContainer
          fetchJoke={fetchJoke}
          laughingEmoji={laughingEmoji}
          isLoadingJoke={isLoadingJoke}
          isLoadingDog={isLoadingDog}
          joke={joke}
        />
      </div>
    </div>
  );
};

export default App;
