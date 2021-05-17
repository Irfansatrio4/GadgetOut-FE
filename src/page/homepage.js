import React, { useState } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import Navbar from '../component/navbar'
import asset from '../assets/img/samsung.png'

function HomePage() {
    const [data, setData] = useState([{}, {}, {}, {}])
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid pt-5" style={{ marginLeft: "100px" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="result-card flex-wrap d-flex justify-content-center w-100">
                            {
                                data.map(e => (
                                    <div class="grid mx-2 mt-5">
                                        <div class="grid-item">
                                            <div class="card">
                                                <img class="card-img" src={asset}/>
                                                <div class="card-content">
                                                    <h1 class="card-header">Samsudin S21 Ultra</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
