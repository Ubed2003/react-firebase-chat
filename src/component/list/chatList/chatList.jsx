import { useState } from 'react'
import './chatList.css'



const chatList = () => {
  const [addMode, setAddMode]  = useState(false)
  const handleImage = ()=>{
    setAddMode((prev) => !prev)
  }
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
 <img src="/search.png" alt="" />
 <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png" } alt=""className='add' 
    onClick={handleImage}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ubed Khan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ubed Khan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ubed Khan</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ubed Khan</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default chatList