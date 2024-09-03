import React from 'react'

export default function Child3(props) {
  return (
    <div>
      <ol>
        {props.names.map((name, index)=> {
            <li key={index}>name</li>
        })}
      </ol>
    </div>
  )
}
