import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
// import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

import styles from "../MasterEquipment/MasterEquipment.module.css";

import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//import { ProductService } from './service/ProductService';



import { Dropdown } from 'primereact/dropdown';
               

import { Form, Row, Col, Modal, Container, Button } from "react-bootstrap";


function MasterEquipment() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
    handleClose();
  };

  const addEquipment = () => {
      console.log("Add master Equipment");
      
      // Swal.fire({
      //            title: 'Add Master Equipment',
      //            text: 'Exam',
      //            icon: 'info',
      //            confirmButtonText: 'Add',
      //          })

  }

   const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

  return (
    <>
      <Navbar />
      <Sidebar />
      {/* Content */}
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col">
                <h1 className="m-0">Master Equipment</h1>
              </div>
              {/* /.col */}
            </div>

            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <section className="content">
          <div className="container-fluid"></div>
          <div className={styles.add_masterEquipt_button}>
            {/* <Button variant="primary" onClick={addEquipment}>ADD Equipment</Button> */}
            <Button variant="primary" onClick={handleShow}>ADD Equipment</Button>
          </div>

          <div className="card"></div>

          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      {/* End Content */}


      {/* Modal */}
       <Modal show={show} onHide={handleClose} size="xl">
         <Modal.Header closeButton>
          <Modal.Title>Input Details Equipment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Code</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Code" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Control No</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Control No" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Jig Name</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Jig Name" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Application Model</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Application Model" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Jig Number</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Jig Number" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Entry Date</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Entry Date" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Marker</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Marker" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Issue Date</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="date" placeholder="Enter Issue Date" />
              </Col>
            </Row>
             <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Suffix No</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Suffix No" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Calibration Date</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="date" placeholder="Enter Calibration Date" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Serial No</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Serial No" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Next Calibration Date</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="date" placeholder="Enter Calibration Date" />
                
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Asset No</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Asset No" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Shelf</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Shelf" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Type</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Type" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Floor</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Floor" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Photo</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="file" placeholder="Enter Photo" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Location</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Location" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Respond</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 2: Input for Code */}
                <Form.Control type="text" placeholder="Enter Respond" />
              </Col>
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Calibration Control</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Calibration Control" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6} lg={2}> {/* Column 1: Label "Code" */}
                <Form.Label className="col-form-label text-md-end text-start">Section</Form.Label>
              </Col>
               <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Section" />
              </Col>
             
              <Col xs={12} md={6} lg={2}> {/* Column 3: Label "Control No" */}
                <Form.Label className="col-form-label text-md-end text-start">Remark</Form.Label>
              </Col>
              <Col xs={12} md={6} lg={4}> {/* Column 4: Input for Control No */}
                <Form.Control type="text" placeholder="Enter Remark" />
              </Col>
            </Row>

            
            {/* You can add more form rows here if needed */}


            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Close Modal */}


      <Footer />
    </>
  );
}

export default MasterEquipment;
