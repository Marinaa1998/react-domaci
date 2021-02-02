import React from 'react'

export default function Slovo(props) {
    return (
        <button onClick={props.onClick} disabled={props.disabled || false} className='btn btn-secondary'> {props.slovo}</button>
    )
}
