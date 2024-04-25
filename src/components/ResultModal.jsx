import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({timeRemaining, targetTime, onReset}, ref) {
    const dialogRef = useRef()

    useImperativeHandle(ref, () => {
        return {
            open () {
                dialogRef.current.showModal();
            }
        };
    });

    const formattedSecondsRemaining = (timeRemaining/1000.0).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100 )

    
    let resultComponent = <h2>You Lost!</h2>

    if (timeRemaining > 0) {
        resultComponent = <h2>{`Your Score: ${score}`}</h2>
    }

    return (
        <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
            {resultComponent}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedSecondsRemaining} Seconds Left</strong></p>
            <form method="dialog">
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;