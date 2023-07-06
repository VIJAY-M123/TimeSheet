import React, { useState } from "react";
import { Row, Col, Card, CardHeader, Table, Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import Sheet from "./TimeSheet";
import "../Style/TimeSheet.css";
import Edit from "./EditSheet";
import { useNavigate } from "react-router-dom";

const table = [{
  name: "12-10-2022",
  date: "Pending",
  from: "09-00-PM",
  to: "06-00-AM",
  status: "11",
  direction: "Radha",

},
{
  name: "12-10-2022",
  date: "Pending",
  from: "09-00-PM",
  to: "06-00-AM",
  status: "11",
  direction: "Radha",
},
{
  name: "12-10-2022",
  date: "Pending",
  from: "09-00-PM",
  to: "06-00-AM",
  status: "11",
  direction: "Radha",
},
{
  name: "12-10-2022",
  date: "Pending",
  from: "09-00-PM",
  to: "06-00-AM",
  status: "11",
  direction: "Radha",
},
{
  name: "12-10-2022",
  date: "Pending",
  from: "09-00-PM",
  to: "06-00-AM",
  status: "11",
  direction: "Radha",
},
{
  name: "12-10-2022",
  date: "Pending",
  from: "09-00-PM",
  to: "06-00-AM",
  status: "11",
  direction: "Radha",
},

]

export default function Dashboard() {

  const [Open, setOpen] = useState(false);
  const [EditOpen, setEditOpen] = useState(false);

  const navigate = useNavigate();

  const Click = () => {
    setOpen(true);

  }

  const EditClick = () => {
    setEditOpen(true);
  }

  const onClick = () => {
    navigate("/dash")
  }
  const handleSubmit = () => {
    // Perform your submit logic here
    
    // Close the modal
    setOpen(false);
  };

  return (
    <div>


      <Modal
        isOpen={Open}
        toggle={() => setOpen(!Open)}>
        <ModalHeader
          toggle={() => setOpen(!Open)}
        >
          Add NightShift
        </ModalHeader>
        <ModalBody>
          <Sheet  handleSubmit={handleSubmit}/>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={EditOpen}
        toggle={() => setEditOpen(!EditOpen)}>

        <ModalHeader toggle={() => setEditOpen(!EditOpen)}>
          Edit NightShift
        </ModalHeader>

        <ModalBody>
          <Edit />
        </ModalBody>
      </Modal>

      <Row className="mt-2">
        <Col>
          <Card className="" style={{
            boxShadow: "", backgroundColor: "var(--background)", height: "240px",
            border: "0px"

          }}>
            <CardHeader className="border-0"
              style={{
                backgroundColor: "#e0e0e0",

                border: "0px"
              }}>
              <Row className="align-items-center">

                <Col lg={9}>
                  <h5>NightShift</h5>
                </Col>
                {/* <Col lg={4}>
                  <Button onClick={onClick}>Dashboard</Button>
                </Col> */}
                <Col lg={3} className="d-flex align-items-end">
                  <Button className="btnAdd" onClick={Click}>Add Form</Button>
                </Col>

              </Row>


            </CardHeader>
            <Table className="align-items-center  table-flush" responsive >
              <thead className="">
                <tr className="" style={{ color: "#7dbf57", backgroundColor: "#344d7f" }}>
                  <th scope="col">Date</th>
                  <th scope="col">Reason for working</th>
                  <th scope="col">From Time</th>
                  <th scope="col">To Time</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Manager Signature</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              {table.map((item, index) => (
                <tbody  >
                  <tr key={index} className="" style={{ color: "var(--text-primary)", 
                  backgroundColor: "#e0e0e0" }}>
                    <td>{item.name}</td>
                    <td scope="row">{item.date}</td>
                    <td scope="row">{item.from}</td>
                    <td>{item.to}</td>
                    <td>{item.status}</td>
                    <td>{item.direction}</td>
                    <td><Button className="b" onClick={EditClick}>Edit</Button></td>

                  </tr>
                </tbody>
              ))}
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
}