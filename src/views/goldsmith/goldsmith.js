
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

class Goldsmith extends React.Component {
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
                  <h3 className=" mb-0">Goldsmith</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="GoldCarat">Gold Carat</Label>
                      <Input type="text" name="gold_carat" id="GoldCarat" placeholder="Gold Carat" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="GoldGram">Gold Gram</Label>
                      <Input type="text" name="gold_gram" id="GoldGram" placeholder="Gold Gram" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Style">Style</Label>
                      <Input type="text" name="style" id="Style" placeholder="Style" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="Diamonds">Diamonds</Label>
                      <Input type="text" name="diamonds" id="Diamonds" placeholder="Diamonds" />
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

export default Goldsmith;
