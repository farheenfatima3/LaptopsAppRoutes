import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../index.css'

const Home=({props,display})=>{
const {id}=useParams()

const laptops=display?props.filter(item=>item[display]===id):props
    return(
        <div className="row">
            {laptops.map(item=>
                <div className="col">
                    <p>Model:<Link to={`/model/${item.id}`}>{item.model}</Link></p>
                    <p>Brand:<Link to={`/brand/${item.brand}`}>{item.brand}</Link></p>
                    <p>Ram:<Link to={`/ram/${item.ram}`}>{item.ram}</Link></p>
                    <p>HardDisk:<Link to={`/hardDisk/${item.hardDisk}`}>{item.hardDisk}</Link></p>
                    <p>Rating:<Link to={`/rating/${item.rating}`}>{item.rating}</Link></p>
                    <p>Processor:<Link to={`/processor/${item.processor}`}>{item.processor}</Link></p>
                </div>)}
        </div>
    )
}
export default Home