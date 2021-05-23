import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import Navbar from '../component/navbar'
import { Link } from 'react-router-dom'
import axios from "axios"



function HomePage(props) {
    // load data dari Database
    const [data, setData] = useState([])
    const [title, setTitle] = useState([])
    const [ram, setRAM] = useState([])
    const [rom, setROM] = useState([])
    const [brand, setBrand] = useState([])
    const { search } = props.match.params
    //jalanin fungsi pas udah jalan
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/GadgetOut/?title=${search}`)
            .then((response) => {
                console.log(response.data)
                setTitle(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/GadgetOut/?brand=${search}`)
            .then((response) => {
                console.log(response.data)
                setBrand(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })


        axios
            .get(`http://localhost:5000/api/GadgetOut/?RAM=${search}`)
            .then((response) => {
                console.log(response.data)
                setRAM(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`http://localhost:5000/api/GadgetOut/?ROM=${search}`)
            .then((response) => {
                console.log(response.data)
                setROM(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })


        axios.get(`http://localhost:5000/api/GadgetOut`)
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [search])
    console.log(search)
    console.log('HomePage')

    return (
        <div>
            <Navbar />
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-12 col">
                        <div>
                            {search ? (<div>
                                {title.length || brand.length || ram.length || rom.length > 0 ? (<div> <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {brand.length > 0 ? (
                                           <div className="row w-100 mb-4 mt-4">
                                        <div> <h1> Hasil Pencarian {search} Dalam Brand </h1>
                                        <div className="row ">
                                            {brand.map((e) => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        </div>
                                        </div>
                                    ) : null}

{title.length > 0 ? (
                                         <div className="row w-100 mb-4 mt-4">
                                        <div> <h1> Hasil Pencarian {search} Dalam Produk</h1>
                                        <div className="row ">
                                            { title.map(e => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        </div>
                                        </div>
                                    ):null}


                                    {ram.length > 0 ? (
<div className="row w-100 mb-4 mt-4">
                                        <div> <h1> Hasil Pencarian {search} Dalam RAM</h1>
                                        <div className="row ">
                                            { ram.map(e => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                            </div>
                                        </div>
                                    ) : null}

                                    
                                    {rom.length > 0 ? (
                                        <div className="row w-100 mb-4 mt-4">
                                        <div> <h1> Hasil Pencarian {search} Dalam ROM</h1>
                                        <div className="row ">
                                            { rom.map(e => (

                                                <div className="grid mx-2 mt-5">
                                                    <div className="grid-item">
                                                        <Link to={`/detail/${e.id}`}>
                                                            <div className="card">
                                                                <img className="card-img" src={e.urlFoto} style={{ width: "80%" }} />
                                                                <div className="card-content">
                                                                    <h1 className="card-header" style={{ textAlign: "center" }} >{e.title}</h1>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                         </div>
                                        </div>
                                    ) : null}</div></div>) : (<h1>Data Tidak Ditemukan</h1>)}</div>

                            ) : (
                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                    {data.map(e => (

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
                                    ))}</div>

                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
