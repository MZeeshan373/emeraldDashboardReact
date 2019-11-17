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
  CustomInput,
  Input,
  UncontrolledTooltip
} from "reactstrap";
import Header from "components/Headers/Header.jsx";

class Sorting extends React.Component {
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
                  <h3 className=" mb-0">Sorting</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="weight">Weight</Label>
                      <Input type="text" name="weight" id="weight" placeholder="Weight" />
                    </FormGroup>
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="Gemology">Gemology</Label>
                          <Input type="text" name="gemology" id="Gemology" placeholder="Gemology" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="color-grade">Color Grade</Label>
                      <Input type="text" name="color_grade" id="color-grade" placeholder="Color Grade" />
                    </FormGroup>

                    <FormGroup>
                      <Label for="datetime">Date and Time</Label>
                      <Input type="datetime-local" name="datetime" id="datetime" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Address">Address Sorted By</Label>
                      <Input
                        type="text"
                        name="sorted_by"
                        id="Address"
                        placeholder="Address Sorted By"
                      />
                    </FormGroup>
                    <Button onClick={e => e.preventDefault}>Submit</Button>
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

export default Sorting;
