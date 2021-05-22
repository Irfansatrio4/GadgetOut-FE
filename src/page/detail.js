import React, { useState, useEffect } from 'react'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import Navbar from '../component/navbar'
import asset from '../assets/img/samsung.png'
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
    }, [])
    return (
        <div>
            <h1>detail</h1>
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
                                <div className="col-4" style={{ marginLeft: "100px" }}>
                                    <img style={{ width: "350px", height: "350px", borderRadius: "20px", boxShadow: "20px" }} class="card-img" src={asset} alt="samsudin" />
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <div className="row mt-5">
                                <div className="col-6" style={{ fontSize: "20px", }}>
                                    <strong>Brand</strong><br></br>
                                    <strong>Harga  </strong><br></br>
                                    <strong>RAM  </strong><br></br>
                                    <strong>Storage Internal</strong><br></br>
                                    <strong>Kapasitas Battery</strong><br></br>
                                    <strong>Ukuran Layar</strong><br></br>
                                </div>

                                <div className="col-6" style={{ fontSize: "20px" }}>
                                    <div>{data.brand}</div>
                                    <div>Rp.{data.harga},00</div>
                                    <div>{data.RAM}</div>
                                    <div>{data.ROM}</div>
                                    <div>{data.battery}</div>
                                    <div>{data.screen}</div>
                                </div>
                            </div>
                        </Col>
                    </div> : null
            }
        </div>
    )
}
export default Detail
