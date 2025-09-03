
export default function Buttons(onIncrement, onDecrement, onReset) {
  return (
    <div>
      <button className='mx-5 bg-green-400 shadow-lg shadow-green-400/50' onClick={onIncrement}>Increment</button>
      <button className='mx-5 bg-sky-400 shadow-lg shadow-sky-400/50' onClick={onDecrement}>Decrement</button>
      <button className='mx-5 bg-red-400 shadow-lg shadow-red-400/50' onClick={onReset}>Reset </button>
    </div>
  )
}
