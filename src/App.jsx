import { useState } from 'react'
import './App.css'

function App() {
  const [bo, setBo] = useState("")
  const [op, setOp] = useState("")
  const [ao, setAo] = useState("")

  const handleNum = (num) => {
    return () => {
      if (op === "") {
        setBo(bo + num)
      } else {
        setAo(ao + num)
      }
    }
  }

  const handleOp = (operator) => {
    return () => {
      setOp(operator)
    }
  }

  const handleEq = () => {
    return () => {
      if (op === "+") {
        setBo((parseFloat(bo) + parseFloat(ao)).toString())
      } 
      else if (op === "-") {
        setBo((parseFloat(bo) - parseFloat(ao)).toString())
      } 
      else if (op === "*") {
        setBo((parseFloat(bo) * parseFloat(ao)).toString())
      } 
      else if (op === "/") {
        setBo((parseFloat(bo) / parseFloat(ao)).toString())
      }
      setOp("")
      setAo("")
    }
  }

  const handleDelete = () => {
    setBo("")
    setOp("")
    setAo("")
  }

  return (
    <>
      <div className='bg-black/85 h-screen w-screen flex flex-row justify-center items-center'>
        <div className="calculator bg-gray-500 h-fit w-fit border border-black rounded-lg">
          <div className="display h-15 w-40 bg-green-300 p-2 m-3 rounded-sm border border-black">{bo}{op}{ao}</div>
          <div className="buttons m-2 p-2 border-black flex flex-col gap-1">
            <div className="r1 flex flex-row gap-2 justify-center">
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("1")}>1</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("2")}>2</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("3")}>3</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm  operator" onClick={handleOp("-")}>-</button>
            </div>
            <div className="r2 flex flex-row gap-2 justify-center">
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("4")}>4</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("5")}>5</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("6")}>6</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-smoperator" onClick={handleOp("*")}>*</button>
            </div>
            <div className="r3 flex flex-row gap-2 justify-center">
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("7")}>7</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("8")}>8</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("9")}>9</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleOp("/")}>/</button>
            </div>
            <div className="r4 flex flex-row gap-2 justify-center">
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum("0")}>0</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm " onClick={handleNum(".")}>.</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm" onClick={handleDelete}>AC</button>
              <button className="button h-10 w-8 bg-black text-white px-2 py-1 rounded-sm  "onClick={handleOp("+")}>+</button>
            </div>
            <div className='h-7 w-full px-2 py-1 rounded-sm bg-black text-white text-center my-1' onClick={handleEq()}>=</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
