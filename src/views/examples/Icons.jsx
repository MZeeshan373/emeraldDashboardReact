/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
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
  CustomInput,
  Input,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Icons extends React.Component {
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
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Add Employe</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="Name">Name</Label>
                          <Input type="email" name="email" id="Name" placeholder="Name" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="age">Age</Label>
                          <Input type="number" name="age" id="age" placeholder="Age" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="Address">Address</Label>
                      <Input type="text" name="address" id="Address" placeholder="e.g 1234 Main St" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Experience</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Miner</option>
                        <option>Sorter</option>
                        <option>Cutter & Polisher</option>
                        <option>Owner</option>
                        <option>Goldsmith</option>
                        <option>Certificate</option>
                        <option>Store</option>

                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="CustomFileBrowser">Image</Label>
                      <CustomInput type="file" id="CustomFileBrowser" name="customFile" />
                    </FormGroup>
                    <Button onClick={e=>e.preventDefault}>Add Employe</Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;
