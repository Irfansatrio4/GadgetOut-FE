import React, { useState, useEffect } from 'react'
import '../assets/css/style.css'
import '../assets/css/navbar.css'
import Navbar from '../component/navbar'
import { Col } from 'reactstrap'
import axios from "axios"
import { Link } from 'react-router-dom'


function Detail(props) {
  const [data, setData] = useState(false)
  const [brand, setBrand] = useState([])
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
    axios.get(`http://localhost:5000/api/rekomendasi/?namaBrand=${data.Brand}`)
      .then(response => {
        setBrand(response.data.data)
        console.log(response.data.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [id, data.Brand])


  return (
    <div>
      <Navbar />
      {data ?
        <div className="container pt-5">
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1 style={{ textAlign: "center" }}>
              <b>{data.title}</b>
            </h1><br></br>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="row">
              <div className="col d-flex justify-content-center" >
                <img style={{ width: "350px", height: "350px", borderRadius: "20px", boxShadow: "20px" }} class="card-img img-fluid" src={data.urlFoto} alt="gadget" />
              </div>
            </div>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="row mt-5" >
              <table class="table table-borderless">

                <tbody style={{ fontSize: "20px", }}>
                  <tr>
                    <th scope="row">Brand</th>
                    <td>{data.Brand}</td>


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
          <h2 style={{ marginTop: "100px" }}>Smartphone dengan Brand Serupa </h2>
          <div className="row">
            <div className="col-12">
              <div className="result-card flex-wrap d-flex justify-content-center w-100" style={{ marginTop: "100px", marginBottom:"50px" }}>
                {
                  brand.map(e => (
                    e.id !== data.id ?
                    <div className="grid mx-2 mt-5">
                    <div className="grid-item">
                        <Link to={`/detail/${e.id}`}>
                            <div className="card">
                                <img className="card-img" src={e.urlFoto} style={{ width: "80%", }} />
                                <div className="card-content">
                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                      : null
                  ))
                }
              </div>
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}
export default Detail
