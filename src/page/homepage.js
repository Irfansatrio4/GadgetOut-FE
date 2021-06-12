import React, { useState, useEffect } from 'react'
import '../assets/css/navbar.css'
import '../assets/css/style.css'
import '../assets/css/paginate.css'
import Navbar from '../component/navbar'
import { Link } from 'react-router-dom'
import axios from "axios"
import queryString from 'query-string'
import ReactPaginate from 'react-paginate';


function HomePage(props) {
    // load data dari Database
    const { search } = props.match.params
    const [data, setData] = useState([])
    const [find, setFind] = useState([])
    const [page, setPage] = useState(0);
    let path = props.location.search;
    let params = queryString.parse(path);

    const usersPerPage = 10;
    const pagesVisited = page * usersPerPage;

    const pageCount = Math.ceil(data.length / usersPerPage);
    const pageCount2 = Math.ceil(find.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPage(selected);
    };

    //jalanin fungsi pas udah jalan
    useEffect(() => {
        if (params.query != null) {
            axios
                .get(`http://localhost:5000/api/pencarian?search=${params.query}`)
                .then((response) => {
                    setFind(response.data.data)
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios
                .get(`http://localhost:5000/api/GadgetOut/?title=${params.title}&namaBrand=${params.namaBrand}&ukuranRAM=${params.ukuranRAM}&ukuranROM=${params.ukuranROM}&harga=${params.harga}`)
                .then((response) => {
                    setData(response.data.data)
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [search])

    return (
        <div>
            <Navbar />
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-12 col">
                        <div>
                        <h1> Hasil Pencarian : </h1>
                            { params.query ?
                                <div>
                                    {find.length !== 0 ?
                                        (
                                            <div>
                                                <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                                <div className="row w-100 mb-4 mt-4">
                                                    {find
                                                        .slice(pagesVisited, pagesVisited + usersPerPage)
                                                        .map(e => (
                                                                <div> 
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
                                                                    </div>
                                                            
                                                        ))
                                                    }
                                                    </div>
                                                    <ReactPaginate
                                                        previousLabel={"Previous"}
                                                        nextLabel={"Next"}
                                                        pageCount={pageCount2}
                                                        onPageChange={changePage}
                                                        containerClassName={"paginationBttns"}
                                                        previousLinkClassName={"previousBttn"}
                                                        nextLinkClassName={"nextBttn"}
                                                        disabledClassName={"paginationDisabled"}
                                                        activeClassName={"paginationActive"}
                                                    />
                                                </div>
                                            </div>

                                        ) : (<h1>Data Tidak Ditemukan</h1>)}</div>

                                : (
                                    <div className="result-card flex-wrap d-flex justify-content-center w-100">
                                        {
                                            data
                                                .slice(pagesVisited, pagesVisited + usersPerPage)
                                                .map(e => (

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
                                                ))}
                                        <ReactPaginate
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            pageCount={pageCount}
                                            onPageChange={changePage}
                                            containerClassName={"paginationBttns"}
                                            previousLinkClassName={"previousBttn"}
                                            nextLinkClassName={"nextBttn"}
                                            disabledClassName={"paginationDisabled"}
                                            activeClassName={"paginationActive"}
                                        />

                                    </div>
                                )}
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}
export default HomePage
