import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("pkr")
  const [convertedAmount , setconvertedAmount ] = useState(0)

const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo)

const

  return (
    <>
     <h1 className='text-3xl bg-orange-500'> currency app </h1>
    </>
  )
}

export default App
