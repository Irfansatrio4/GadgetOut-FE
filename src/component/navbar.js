import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
import logo from '../assets/img/GadgetOut.png'
import { FaSearch } from 'react-icons/fa'
import { CustomInput, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { BsDash } from 'react-icons/bs'
import { Label } from 'reactstrap';






function Navbar(props) {

    const [search, setSearch] = useState(null)
    const [snamaBrand, setSnamaBrand] = useState("");
    const [sukuranRAM, setSRAM] = useState("");
    const [sukuranROM, setSROM] = useState("");
    const [stitle, setSTitle] = useState("");
    const [sharga, setSHarga] = useState("");
    const {
        // buttonLabel,
        className
    } = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const drop = () => setDropdownOpen(prevState => !prevState);


    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    const searchHandler = (e) => {
        e.preventDefault()
        window.location.href = "/homepage?query=" + search
    }

    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const DropdownToggle = () => { setDropdownOpen(prevState => !prevState) };


    const [modal, setModal] = useState(false);
    const toggle = () => { setModal(!modal) };

    const [title, setTitle] = useState(true);
    const checkboxTitle = () => { setTitle(!title) };

    const [namaBrand, setBrand] = useState(true);
    const checkboxBrand = () => { setBrand(!namaBrand) };

    const [ukuranRAM, setRAM] = useState(true);
    const checkboxRAM = () => { setRAM(!ukuranRAM) };

    const [ukuranROM, setROM] = useState(true);
    const checkboxROM = () => { setROM(!ukuranROM) };

    const [harga, setHarga] = useState(true);
    const checkboxHarga = () => { setHarga(!harga) };

    const onSubmitHandler = () => {
        window.location.href = "/homepage?title=" + stitle + "&namaBrand=" + snamaBrand + "&ukuranRAM=" + sukuranRAM + "&ukuranROM=" + sukuranROM + "&harga=" + sharga
    }

    return (
        <div >
            <nav
                className="navbar navbar-desktop navbar-expand"
                style={{ zIndex: "2" }}
            >
                <div className="d-flex collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className=" navbar-nav  d-flex align-items-start">
                        <li className="nav-item ">
                            <Link className="navbar-brand ml-5 mt-3" to="/">
                                <img src={logo} className="" alt="gadget" />
                            </Link>
                        </li>
                        <li className="nav-item search-custom w-100" style={{ marginLeft: "15%", marginRight: "20%" }}>

                            <form className="form-inline w-100 my-lg-0">
                                <div className="form-group w-100 input-group h  as-search">

                                    <input
                                        type="text"
                                        className="form-control "
                                        placeholder="Cari Gadget"
                                        value={search}
                                        onChange={inputHandler}
                                        style={{ borderRadius: "5px", fontSize: "15px", padding: "20px", paddingLeft: "1%" }}
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                    {/* <Link to={`/${search}`}> */}


                                    <button type="submit" className="btn-search ml-4" onClick={searchHandler} style={{ backgroundColor: "white", padding: "7px", borderRadius: "5px" }}>
                                        <div><FaSearch /></div>
                                    </button>



                                    {/* </Link> */}

                                    <Button className="btn-more" onClick={toggle} style={{ backgroundColor: "black",  borderRadius: "5px" , marginLeft:"15px"}}>
                                        <i class="fas fa-bars" style={{fontSize:"33px"}}></i>
                                    </Button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Pencarian Detail</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxTitle} id="exampleCustomCheckbox1" label="Title">
                                <Input type="text" name="Title" id="searchtitle" onChange={(e) => setSTitle(e.target.value)} value={stitle} placeholder="Nama Smartphone" disabled={title} />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxBrand} id="exampleCustomCheckbox2" label="Brand">
                                <Input type="text" name="Brand" id="searchbrand" onChange={(e) => setSnamaBrand(e.target.value)} value={snamaBrand} placeholder="Merk Smartphone" disabled={namaBrand} />
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxRAM} id="exampleCustomCheckbox3" label="RAM">
                                <Label for="exampleSelect"></Label>
                                <Input onChange={(e) => setSRAM(e.target.value)} value={sukuranRAM} name="RAM" id="searchRAM"  placeholder="RAM" disabled={ukuranRAM} type="select" name="select" id="exampleSelect">
                                    <option>...</option>
                                    <option>1GB</option>
                                    <option>2GB</option>
                                    <option>3GB</option>
                                    <option>4GB</option>
                                    <option>6GB</option>
                                    <option>8GB</option>
                                    <option>12GB</option>
                                </Input>
                            </CustomInput>
                        </FormGroup>
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxROM} id="exampleCustomCheckbox5" label="ROM">
                                <Label for="exampleSelect"></Label>
                                <Input name="ROM" id="searchROM" onChange={(e) => setSROM(e.target.value)} value={sukuranROM} placeholder="ROM" disabled={ukuranROM} type="select" name="select" id="exampleSelect">
                                    <option>...</option>
                                    <option>8GB</option>
                                    <option>16GB</option>
                                    <option>32GB</option>
                                    <option>64GB</option>
                                    <option>128GB</option>
                                    <option>256GB</option>
                                    <option>512GB</option>
                                </Input>
                            </CustomInput>
                        </FormGroup>
                       
                        <FormGroup>
                            <CustomInput type="checkbox" onClick={checkboxHarga} id="exampleCustomCheckbox4" label="Harga">
                                <div className="d-flex" >
                                <Input type="text" name="Harga" id="searchHarga" onChange={(e) => setSHarga(e.target.value)} value={sharga} placeholder="Range Harga" disabled={harga} />
                                <div><BsDash /></div>
                                <Input type="text" name="Harga" id="searchHarga" onChange={(e) => setSHarga(e.target.value)} value={sharga} placeholder="Range Harga" disabled={harga} />
                                </div>
                            </CustomInput>
                        </FormGroup>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onSubmitHandler}>SEARCH</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar