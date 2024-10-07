const Instructions = ({ onReady }) => {
  return (
    <>
      <h1 className="text-6xl pb-8">Hebrew Keyboard Quiz</h1>
      <button className="w-80 h-20 text-3xl bg-yellow-500 text-black font-medium hover:bg-yellow-600"
      onClick={() => {
        onReady();
      }}>
        Start
      </button>
      <div className="text-xl w-96 mx-auto pt-8">
        A hebrew letter will come up and you have to type the corresponding
        letter on the keyboard.
      </div>
    </>
  );
};

export default Instructions;
