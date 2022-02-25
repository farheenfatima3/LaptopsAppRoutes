import React from 'react'
import { Link } from 'react-router-dom'

const NavLink =({props})=>{

    return(
        <>
        <ul>
            <li><Link to="/home">Home</Link></li>
           {props.map(item=>
           <li><Link to={`/brand/${item}`}>{item}</Link></li>
           )}
        </ul>
        </>
    )
}
export default NavLink