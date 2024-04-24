import { useState } from "react";

export default function Player() {
  const [enteredPlayer, setEnteredPlayer] = useState('');
  const [playerName, setPlayerName] = useState('')

  const enteredNameChangeHandler = (event) => {
    setEnteredPlayer(event.target.value)
  }

  const setNameHandler = () => {
    setPlayerName(enteredPlayer)
  }

  let playerNameComponent = <h2>Welcome unknown entity</h2>

  if (playerName !== '') {
    playerNameComponent = <h2>Welcome {playerName}</h2>
  }

  return (
    <section id="player">
      {playerNameComponent}
      <p>
        <input onChange={enteredNameChangeHandler} value={enteredPlayer} type="text" />
        <button onClick={setNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
