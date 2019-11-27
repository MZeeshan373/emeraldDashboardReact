import React from "react";

import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Status extends React.Component {
  handleClick=(id)=>{
    this.props.history.push("statusDetails")
  }
  tableData = [
    {
      icon: "assets/img/theme/bootstrap.jpg",
      id:"1245678",
      origin:"Dummy data",
      mine:"Dummy Data"
    },
    {
      icon: "assets/img/theme/bootstrap.jpg",
      id:"1245678",
      origin:"Dummy data",
      mine:"Dummy Data"
    },
    {
      icon: "assets/img/theme/bootstrap.jpg",
      id:"1245678",
      origin:"Dummy data",
      mine:"Dummy Data"
    },
    {
      icon: "assets/img/theme/bootstrap.jpg",
      id:"1245678",
      origin:"Dummy data",
      mine:"Dummy Data"
    },
  ]
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
         
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Card tables</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">ICON</th>
                      <th scope="col">ID</th>
                      <th scope="col">Origin</th>
                      <th scope="col">Mine</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.tableData.map((row,index)=>{
                        return <tr onClick={()=>{this.handleClick(row.id)}}>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"  
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/bootstrap.jpg")}
                              />
                            </a>
                          </Media>
                        </th>
                      <td>{row.id}</td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            {row.origin}
                          </Badge>
                        </td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            {row.mine}
                          </Badge>
                        </td>
  
                      </tr>
                      })
                    }
                    {/* <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/bootstrap.jpg")}
                            />
                          </a>
                        </Media>
                      </th>
                      <td>2,500</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          pending
                        </Badge>
                      </td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          pending
                        </Badge>
                      </td>

                    </tr>
                     */}


                  </tbody>
                </Table>
                <hr style={{ margin: "0" }} />
                <CardFooter className="py-4 " style={{ backgroundColor: "transparent" }}>
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Status;
