import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000)

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted && !timerExpired ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted && !timerExpired? "active" : undefined}>
                {timerStarted && !timerExpired ? 'Time is running...' : 'Timer Inactive'}
            </p>
        </section>
    </>
    )
}