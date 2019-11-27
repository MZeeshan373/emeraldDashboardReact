
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Jumbotron,
  CustomInput,
  Input,
  UncontrolledTooltip
} from "reactstrap";
import Header from "components/Headers/Header.jsx";
import './statusDetails.css'
class StatusDetails extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className="shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Status</h3>
                </CardHeader>
                <CardBody>
                  <Jumbotron >
                    <h1 className="display-6">Mining Status</h1>
                    <hr className="my-2" />
                    <dl className="row">

                      <dt className="col-sm-4 col-lg-3">ID</dt>
                      <dd className="col-sm-8 col-lg-9">032320309</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Origin</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Mine</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>

                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>
                      <dt className="col-sm-4 col-lg-3">Color Grade</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>

                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>
                      <dt className="col-sm-4 col-lg-3">Weight</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>

                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>
                      <dt className="col-sm-4 col-lg-3">Date and Time</dt>
                      <dd className="col-sm-8 col-lg-9">12/12/1019--12:05-AM</dd>

                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>
                      <dt className="col-sm-4 col-lg-3">Image</dt>
                      <dd className="col-sm-8 col-lg-9 details-img"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>

                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>
                      <dt className="col-sm-4 col-lg-3 video-label">Video</dt>
                      <dd className="col-sm-8 col-lg-9 details-vid"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>

                    </dl>
                  </Jumbotron>



                  <Jumbotron >
                    <h1 className="display-6">Sorting Status</h1>
                    <hr className="my-2" />
                    <dl className="row">

                      <dt className="col-sm-4 col-lg-3">ID</dt>
                      <dd className="col-sm-8 col-lg-9">032320309</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Weight</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Color Grade</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Gemology</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Date and Time</dt>
                      <dd className="col-sm-8 col-lg-9">12/12/1019--12:05-AM</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Sorted By</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                    </dl>
                  </Jumbotron>

                  <Jumbotron >
                    <h1 className="display-6">Cuting Status</h1>
                    <hr className="my-2" />
                    <dl className="row">

                      <dt className="col-sm-4 col-lg-3">ID</dt>
                      <dd className="col-sm-8 col-lg-9">032320309</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Weight</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Cut</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Color Grade</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Cut By</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Date and Time</dt>
                      <dd className="col-sm-8 col-lg-9">12/12/1019--12:05-AM</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Image</dt>
                      <dd className="col-sm-8 col-lg-9 details-img"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3 video-label">Video</dt>
                      <dd className="col-sm-8 col-lg-9 details-vid"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>

                    </dl>
                  </Jumbotron>

                  <Jumbotron >
                    <h1 className="display-6">Polishing Status</h1>
                    <hr className="my-2" />
                    <dl className="row">

                      <dt className="col-sm-4 col-lg-3">ID</dt>
                      <dd className="col-sm-8 col-lg-9">032320309</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Weight</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Color Grade</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Cut</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Clarity</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Polished by</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Date and Time</dt>
                      <dd className="col-sm-8 col-lg-9">12/12/1019--12:05-AM</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Image</dt>
                      <dd className="col-sm-8 col-lg-9 details-img"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3 video-label">Video</dt>
                      <dd className="col-sm-8 col-lg-9 details-vid"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>

                    </dl>
                  </Jumbotron>

                  <Jumbotron >
                    <h1 className="display-6">Certicate Status</h1>
                    <hr className="my-2" />
                    <dl className="row">

                      <dt className="col-sm-4 col-lg-3">ID</dt>
                      <dd className="col-sm-8 col-lg-9">032320309</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Certificate No</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Gemology</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Image</dt>
                      <dd className="col-sm-8 col-lg-9 details-img"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>

                    </dl>
                  </Jumbotron>
                  <Jumbotron >
                    <h1 className="display-6">Store Details</h1>
                    <hr className="my-2" />
                    <dl className="row">

                      <dt className="col-sm-4 col-lg-3">Name</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>


                      <dt className="col-sm-4 col-lg-3">Stones</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Image</dt>
                      <dd className="col-sm-8 col-lg-9 details-img"><img alt="mining image" src="https://dummyimage.com/600x400/000000/0011ff.jpg&text=Image" /></dd>

                    </dl>
                  </Jumbotron>
                  <Jumbotron >
                    <h1 className="display-6">Goldsmith Status</h1>
                    <hr className="my-2" />
                    <dl className="row">

                      <dt className="col-sm-4 col-lg-3">ID</dt>
                      <dd className="col-sm-8 col-lg-9">Gold Carat</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Gold Gram</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">style</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                      <dt className="col-sm-4 col-lg-3">Diamonds</dt>
                      <dd className="col-sm-8 col-lg-9">Dummy Data</dd>
                      <dt className="col-sm-12 devider"><hr className="my-0" /></dt>

                    </dl>
                  </Jumbotron>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default StatusDetails;
