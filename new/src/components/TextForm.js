import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setext] = useState('Enter your text here');
  const handleupper = () => {
    setext(text.toUpperCase());
  }
  const handlelower = () => {
    setext(text.toLowerCase());
  }
  const handlechange = (event) => {
    setext(event.target.value);
  }
  const handle = () => {
    setext('');
  }
  const handlecopy = () => {
    navigator.clipboard.writeText(text.valueOf());
  }
  const handlespace = () => {
    setext(text.replace(/ \s+ /g, ' ').trim());
  }
  return (
    <>
      <div className="mb-3" style={{backgroundColor:props.mode==='dark'? '#270d58':'white', color:props.mode==='light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" onChange={handlechange} style={{backgroundColor:props.mode==='dark'? 'grey':'white', color:props.mode==='light'? 'black':'white'}} value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-1 " onClick={handleupper} >Convert to upper case</button>
      <button className="btn btn-primary mx-3 my-1 " onClick={handlelower} >Convert to lower case</button>
      <button className='btn btn-primary mx-3 my-1' onClick={handle} >Clear Text</button>
      <button className='btn btn-primary mx-3 my-1' onClick={handlecopy} >Copy Text</button>
      <button className='btn btn-primary mx-4 my-1' onClick={handlespace} >Clear extra spaces</button>
      <div className='container' style={{backgroundColor:props.mode==='dark'? '#270d58':'white', color:props.mode==='light'? 'black':'white'}}>
        <h2>Text properities</h2>
        <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters are present in the text</p>
        <h4>Time required to read.</h4>
        <p><b>{1 / 125 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minute(s)</p>
      </div>
    </>
  )
}
