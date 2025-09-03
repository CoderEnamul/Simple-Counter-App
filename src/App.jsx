import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Stats from './components/Stats'
import initialCounters from './data/initialCounters'

function App() {
  const [counters, setCounters] = useState(initialCounters);

    const handlerIncrement = (counterId) => {
        const updatedCounter = counters.map((c)=>{
          if(c.id === counterId){
            return{
              ...c,
              value: c.value +1
            };
          };
          return c;
        })
        setCounters(updatedCounter);
    };

    const handlerDecrement = (counterId) => {
      const updatedCounter = counters.map((c)=>{
          if(c.id === counterId){
            return{
              ...c,
              value: c.value - 1
            };
          };
          return c;
        })
        setCounters(updatedCounter)
    }

    const handlerReset = (counterId) => {
      const updatedCounter =  counters.map((c)=>{
          if(c.id === counterId){
            return{
              ...c,
              value: c.value = 0
            };
          };
          return c;
        })
        setCounters(updatedCounter)
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
     
    </div>
  )
}

export default App
