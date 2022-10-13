import React from 'react'
import "./style.css";

function Button({type}) {
  return (
    <>
    <button className={`btn-${type}`}>button {`${type}`}</button>
    </>
  )
}

export default Button