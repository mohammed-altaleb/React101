import React from 'react'

export default function Child(props) {
    
    const cnames = props.names.map((named,index) => {
        return (
            <li key={index}>{named}</li>
        );
    })
  return (
    <div>
        <h1> The Name: {props.personalInfo.name}</h1>
        <h2> The Age: {props.personalInfo.age}</h2>
        <ol>{cnames}</ol>
    </div>
  )
}
