import './App.css';
import React from 'react'
import About from './Components/About';
import Home from './Components/Home';
import {Route,Routes} from 'react-router-dom'
import NavLink from './Components/NavLink'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      brands: ["Acer", "Apple", "Dell", "HP"],
      categories: ["brand", "processor", "ram", "rating", "hardDisk"],
      laptops: [
        {
          id:"1",
          model: "AX4581",
          brand: "Acer",
          ram: "4GB",
          hardDisk: "500GB",
          rating: "3",
          processor: "i3",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
        },
        {
          id:"2",
          model: "HB2881",
          brand: "HP",
          ram: "4GB",
          hardDisk: "250GB",
          rating: "4",
          processor: "i3",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
        },
        {
          id:"3",
          model: "DM811",
          brand: "Dell",
          ram: "4GB",
          hardDisk: "1TB",
          rating: "3",
          processor: "i3",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
        },
        {
          id:"4",
          model: "AP629",
          brand: "Acer",
          ram: "6GB",
          hardDisk: "1TB",
          rating: "2",
          processor: "i3",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
        },
        {
          id:"5",
          model: "AT820",
          brand: "Acer",
          ram: "8GB",
          hardDisk: "1TB",
          rating: "4",
          processor: "i5",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
        },
        {
          id:"6",
          model: "HK008",
          brand: "HP",
          ram: "6GB",
          hardDisk: "250GB",
          rating: "3",
          processor: "i5",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
        },
        {
          id:"7",
          model: "MAir11",
          brand: "Apple",
          ram: "4GB",
          hardDisk: "128GB",
          rating: "4",
          processor: "i5",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
        },
        {
          id:"8",
          model: "MPro24X",
          brand: "Apple",
          ram: "8GB",
          hardDisk: "256GB",
          rating: "4",
          processor: "i7",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
        },
        {
          id:"9",
          model: "DL390",
          brand: "Dell",
          ram: "6GB",
          hardDisk: "500GB",
          rating: "3",
          processor: "i3",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
        },
        {
          id:"10",
          model: "AM954",
          brand: "Acer",
          ram: "8GB",
          hardDisk: "1TB",
          rating: "3",
          processor: "i7",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
        },
        {
          id:"11",
          model: "AB234",
          brand: "Acer",
          ram: "4GB",
          hardDisk: "250GB",
          rating: "2",
          processor: "i3",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
        },
        {
          id:"12",
          model: "HC874",
          brand: "HP",
          ram: "8GB",
          hardDisk: "1TB",
          rating: "1",
          processor: "i7",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
        },
        {
          id:"13",
          model: "AN2015M",
          brand: "Acer",
          ram: "8GB",
          hardDisk: "1TB",
          rating: "4",
          processor: "i5",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt01.jpeg",
        },
        {
          id:"14",
          model: "AB235P",
          brand: "Acer",
          ram: "4GB",
          hardDisk: "500GB",
          rating: "3",
          processor: "i5",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt02.jpeg",
        },
        {
          id:"15",
          model: "HV5612",
          brand: "HP",
          ram: "8GB",
          hardDisk: "1TB",
          rating: "5",
          processor: "i7",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt03.jpeg",
        },
        {
          id:"16",
          model: "HJ9803",
          brand: "HP",
          ram: "6GB",
          hardDisk: "500GB",
          rating: "4",
          processor: "i3",
          image:
            "https://github.com/edufectcode/resources/raw/main/images/laptops1/lt04.jpeg",
        },
      ],
    };
  }
  render(){
    const {brands,laptops}=this.state
  
    return(
      <>
      <NavLink props={brands}/>
      <Routes>
        <Route path="/home" element={<Home props={laptops}/>}/>
       <Route path="/brand/:id" element={<Home props={laptops} display="brand"/>}/>
       <Route path="/ram/:id" element={<Home props={laptops} display="ram"/>}/>
       <Route path="/hardDisk/:id" element={<Home props={laptops} display="hardDisk"/>}/>
       <Route path="/rating/:id" element={<Home props={laptops} display="rating"/>}/>
       <Route path="/processor/:id" element={<Home props={laptops} display="processor"/>}/>
       <Route path="/model/:value" element={<About props={laptops}/>}/>
       </Routes>
      </>
    )
  }
}

export default App;
