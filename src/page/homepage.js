import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import Navbar from '../component/navbar'
import asset from '../assets/img/samsung.png'
import {Link} from 'react-router-dom'
import axios from "axios"
// import Sidebar from '../component/sidebar'
// import '../assets/css/sidebar.css'


function HomePage() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/GadgetOut`)
        .then(response=>{
            setData(response.data.data)
            console.log(response.data.data)   
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <Navbar></Navbar>
            {/* <Sidebar></Sidebar> */}
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                            {data.map(e=>(

                                    <div className="grid mx-2 mt-5">
                                        <div className="grid-item">
                                            <Link to={`/detail/${e.id}`}>
                                            <div className="card">
                                                <img className="card-img" src={asset}/>
                                                <div className="card-content">
                                                    <h1 className="card-header" style={{textAlign:"center"}} >{e.title}</h1>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
    
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
