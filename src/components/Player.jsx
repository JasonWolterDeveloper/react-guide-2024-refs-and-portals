import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  const clickHandler = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  let playerNameComponent = <h2>Welcome unknown entity</h2>;

  if (enteredPlayerName !== '') {
    playerNameComponent = <h2>Welcome {enteredPlayerName}</h2>;
  }

  return (
    <section id="player">
      {playerNameComponent}
      <p>
        <input 
          ref={playerName} 
          type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
};
