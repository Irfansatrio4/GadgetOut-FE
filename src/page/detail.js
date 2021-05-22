import React, { useState, useEffect } from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import Navbar from '../component/navbar'
import { Col } from 'reactstrap'
import axios from "axios"


function Detail(props) {
    const [data, setData] = useState(false)
    const { id } = props.match.params
    useEffect(() => {
        axios.get(`http://localhost:5000/api/GadgetOut/${id}`)
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])
    return (
        <div>
            <Navbar />
            {
                data ?
                    <div className="container pt-5">
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h1 style={{ textAlign: "center" }}>
                                <b>{data.title}</b>
                            </h1><br></br>
                        </Col>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <div className="row">
                            <div className="col d-flex justify-content-center" >
                                {/* <div className="col" style={{ marginLeft: "100px" }}> */}
                                    <img style={{ width: "350px", height: "350px", borderRadius: "20px", boxShadow: "20px" }} class="card-img img-fluid" src={data.urlFoto} alt="samsudin" />
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <div className="row mt-5" >
                            <table class="table table-borderless">
  
  <tbody style={{ fontSize: "20px", }}>
    <tr>
      <th scope="row">Brand</th>
      <td>{data.brand}</td>
   
     
    </tr>
    <tr>
      <th scope="row">Harga</th>
      <td>Rp. {data.harga},00</td>
      
     
    </tr>
    <tr>
      <th scope="row">RAM</th>
      <td > {data.RAM}</td>
     
    </tr>
    <tr>
      <th scope="row">Storage Internal</th>
      <td >{data.ROM}</td>
    
    </tr>
    <tr>
      <th scope="row">Kapasitas Baterai</th>
      <td >{data.battery}</td>
     
    </tr>
    <tr>
      <th scope="row">Ukuran Layar</th>
      <td >{data.screen}</td>
     
    </tr>
  </tbody>
</table>
                                
                                
                            </div>
                        </Col>
                    </div> : null
            }
        </div>
    )
}
export default Detail
