import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [toDoList, setToDoList] = useState([])

  const inputHandle = (e) => {
    setInputText(e.target.value)
  }

  const toDoHandle = () => {
    if (inputText.trim() !== '') {
      setToDoList([...toDoList, inputText])
      setInputText('')
    }
  }

  const removeItem = (index) => {
    const newList = [...toDoList]
    newList.splice(index, 1)
    setToDoList(newList)
  }

  const customStyle = {
    margin: 'auto',
    textAlign: 'center'

  }

  const buttonStyle = { 
    border: 'none',
    backgroundColor: 'blue',
    color: '#fff',
    padding: '2px 18px',
    borderRadius: '4px',
    opacity: 0.6,
    marginRight: '16px'
  }

  const listStyle = {
    listStyle: 'none',
    marginTop: '30px',
    padding: 0
  }

  const itemStyle = {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    border: '1px solid',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '76px',
  }
  
  const pStyle = {
    margin: 0,
    marginLeft: '4px'
  }

  const borderStyle = {
    borderBottom: 0
  }

  const itemBorderStyle = {...itemStyle, ...borderStyle}
  return (
    <div style={customStyle}>
      <input type="text" value={inputText} placeholder='Placeholder' onChange={inputHandle}></input>
      <button onClick={toDoHandle}  name="btn" style={buttonStyle}>ADD</button>

      <ul className='list' style={listStyle}>
        {
          toDoList.map((item, index) => (
              <li key={index} className='item' style={itemStyle}>
                <p style={pStyle}>{item}</p>
                <button name="btn1" style={buttonStyle} onClick={() => removeItem(index)}>Xóa</button>
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App