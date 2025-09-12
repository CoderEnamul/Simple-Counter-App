import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import Posts from './components/Posts'
import Stats from './components/Stats'
import { decrement, increment, reset } from './features/counters/countersSlice'

function App() {
  const counters = useSelector((state) => state.counters)
  const dispatch = useDispatch();
    const handlerIncrement = (counterId) => {
       dispatch(increment(counterId)) // Action Creator Function যেন আমরা কোন Data পাঠাতে পারি 
    };

    const handlerDecrement = (counterId) => {
      dispatch(decrement(counterId))
    }

    const handlerReset = (counterId) => {
      dispatch(reset(counterId))
    }

    // derived state
    const totalCount = counters.reduce((sum, cur)=> sum + cur.value ,0)


  return (
    <div>
     <h1 className='bold'>Welcome to My Counter App</h1>

     {counters.map( counter => <Counter key={counter.id} count={counter.value} onIncrement={() => {
      handlerIncrement(counter.id)}} onDecrement={() => {
      handlerDecrement(counter.id)}} onReset={()=>{handlerReset(counter.id)}}/>)}
     <div>
      
      <Stats totalCount={totalCount}/>
     </div>
     <div>
      <Posts/>
     </div>
     
    </div>
  )
}

export default App
