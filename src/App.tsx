import React from 'react';
import logo from './logo.svg';
import './App.css';
import cartoons from './mockdata/cartoon.json'
import Cartoon from './components/Cartoon'

// XSS攻击演示, 第一种react进行了防范, 把html内容转为了字符串, 但第二种不能react防范不了
const html = "<img onerror='alert(\"Hacked!\")' src='invalid-image' />"
const jsHacked = "javascript: alert('Hacked!')";

function App() {
  return (
    <>
    <div>{html}</div> 
    <a href={jsHacked} >点击</a>
      <ul>
        {cartoons.map(c => <Cartoon id={c.id} name={c.name} email={c.email} />)}
      </ul>
    </>
  )
}

export default App;
