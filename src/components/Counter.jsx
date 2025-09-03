
export default function Counter({count,onIncrement,onDecrement,onReset}) {

  return (
    <div className='bg-yellow-50 p-5 mt-10 rounded-xl shadow-md shadow-yellow-50/20'>
        <h3 className='text-black bold text-2xl'>Counter</h3>
      <div className='my-5 text-3xl bold text-black'>{count}</div>

      <button className='mx-5 bg-green-400 shadow-lg shadow-green-400/50' onClick={onIncrement}>Increment</button>
      <button className='mx-5 bg-sky-400 shadow-lg shadow-sky-400/50' onClick={onDecrement}>Decrement</button>
      <button className='mx-5 bg-red-400 shadow-lg shadow-red-400/50' onClick={onReset}>Reset </button>
    </div>
  )
}
