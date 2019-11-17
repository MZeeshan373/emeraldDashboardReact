
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

class Certify extends React.Component {
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
                  <h3 className=" mb-0">Certify</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="certificate-no">Certificate No</Label>
                      <Input type="text" name="certificate_no" id="certificate-no" placeholder="Certificate No" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Gemology">Gemology</Label>
                      <Input type="text" name="gemology" id="Gemology" placeholder="Gemology" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="image">Image</Label>
                      <CustomInput type="file" id="image" name="image" />
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

export default Certify;
