
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

class Cuting extends React.Component {
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
                  <h3 className=" mb-0">Cutting</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="weight">Weight</Label>
                      <Input type="text" name="weight" id="weight" placeholder="Weight" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="color-grade">Color Grade</Label>
                      <Input type="text" name="color_grade" id="color-grade" placeholder="Color Grade" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Cut">Cut</Label>
                      <Input type="text" name="cut" id="Cut" placeholder="Cut" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="datetime">Date and Time</Label>
                      <Input type="datetime-local" name="datetime" id="datetime" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Address">Address Cut By</Label>
                      <Input
                        type="text"
                        name="cut_by"
                        id="Address"
                        placeholder="Address Cut By"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="image">Image</Label>
                      <CustomInput type="file" id="image" name="image" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Video">Video</Label>
                      <CustomInput type="file" id="Video" name="video" />
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

export default Cuting;
