function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let conclusion;

  if (percentage === 100) conclusion = "Perfection. 🥇";
  if (percentage >= 80 && percentage < 100) conclusion = "Great. 🥈";
  if (percentage >= 60 && percentage < 80) conclusion = "Not bad. 🥉";
  if (percentage >= 50 && percentage < 60) conclusion = "Do more practice. 🔥";
  if (percentage > 0 && percentage < 50)
    conclusion = "First study, then test. 📕";
  if (percentage === 0)
    conclusion = "It didn't take much to compute it, thanks. 🥱";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
        <br />
        <strong>{conclusion}</strong>
      </p>
      <p className="highscore">Highscore: {highscore ? highscore : 0} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reset
      </button>
    </>
  );
}

export default FinishScreen;
