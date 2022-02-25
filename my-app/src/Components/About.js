import React from 'react'
import { useParams } from 'react-router-dom'

const About=({props})=>{
const {value}=useParams()

const detail=[props.find(item=>item.id===value)]
    return(
        <>
            {detail.map(item=>
                <div className='details'>
                    <p>Model:{item.model}</p>
                    <p>Brand:{item.brand}</p>
                    <p>Ram:{item.ram}</p>
                    <p>HardDisk:{item.hardDisk}</p>
                    <p>Rating:{item.rating}</p>
                    <p>Processor:{item.processor}</p>
                </div>)}
        </>
    )
}
export default About