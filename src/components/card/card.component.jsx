import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return(
        <div className='card-container'>
            <img alt="monster portrait" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            {/**the key still is part of the CardList component, because each Card now has its own KEY */}
            <h2> {props.monster.name} </h2>
            <p> {props.monster.email} </p>
        </div>
    )

}