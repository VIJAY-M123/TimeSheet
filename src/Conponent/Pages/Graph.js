import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { Row, Col, Card, } from "reactstrap"
import { SiMicrosoftexcel } from "react-icons/si"
import { BiExport } from "react-icons/bi";
import "../Style/Graph.css";
//import Excel from "../../Assets/Image/Excel.png";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
//import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
//import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { Button } from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap"
import profile from "../../Assets/Image/new.png"

const options = [{
  "id": 1,
  "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
  "label": "Blue"
}, {
  "id": 2,
  "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
  "label": "Goldenrod"
}, {
  "id": 3,
  "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
  "label": "Teal"
}, {
  "id": 4,
  "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
  "label": "Puce"
}, {
  "id": 5,
  "value": "0fceaec7-fb46-4aef-994b-863a97130168",
  "label": "Khaki"
}, {
  "id": 6,
  "value": "b68c6b76-bbe0-49a6-8a90-209b8d88d353",
  "label": "Green"
}, {
  "id": 7,
  "value": "e2829c11-0960-490c-b19b-5c5bb26a18ce",
  "label": "Crimson"
}, {
  "id": 9,
  "value": "841e6f9f-1e19-4501-8b75-cd153282ed21",
  "label": "Orange"
}, {
  "id": 10,
  "value": "9346ba4b-8b3e-4c06-b930-cb3d98c58890",
  "label": "Turquoise"
}, {
  "id": 11,
  "value": "7294d507-d6c5-47bf-8ef3-c291c273b647",
  "label": "Violet"
}, {
  "id": 12,
  "value": "451d4254-a882-4d53-a4ca-c7cb4707d1a5",
  "label": "Red"
}, {
  "id": 15,
  "value": "2378fade-f686-4f0d-bf00-4e5213032c9b",
  "label": "Aquamarine"
}, {
  "id": 20,
  "value": "77ec7a0b-329d-4643-bbc7-0fa12c788ded",
  "label": "Mauv"
}]


// const series = [{
//   name: 'Net Profit',
//   data: [12, 10, 8, 9, 8, 10, 11, 8, 9]
// }]
// const options = {
//   chart: {
//     type: 'bar',
//     height: 350,
//     toolbar: {
//       show: !1
//     }
//   },
//   title: {
//     text: "Monthly Night shift",
//     style: {

//     }
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: '55%',
//       endingShape: 'rounded'
//     },
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ['transparent']
//   },
//   xaxis: {
//     categories: ['01-03-2023', '01-03-2023', '01-03-2023', '01-03-2023', '01-03-2023',
//       '01-03-2023', '01-03-2023', '01-03-2023', '01-03-2023'],
//   },
//   yaxis: {
//     title: {
//       text: 'Logged Hours'
//     }
//   },
//   fill: {
//     opacity: 1
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return "$ " + val + " thousands"
//       }
//     }
//   }
// }


const series11 = [{
  name: "Hours",
  data: [12, 10, 8, 9, 8, 10, 11, 8, 9]
}]
const options11 = {
  chart: {
    height: 350,
    toolbar: {
      show: !1
    },
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Monthly Night shift',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['01-03-2023', '02-03-2023', '03-03-2023', '04-03-2023', '05-03-2023',
      '06-03-2023', '07-03-2023', '08-03-2023', '09-03-2023'],
  },
  yaxis: {
    title: {
      text: 'Logged Hours'
    }
  },
}

// const ExcelData = [
//   {
//     "firstname": "vijay",
//     "lastname": "M",
//     "emp_id": "90",
//     "date": "19-08-1999"
//   }
// ]

const Demo = [
  {
    firstname: "vijay",
    lastname: "M",
    emp_id: 90,
    date: "2023-03-20",
  },
  {
    firstname: "Radha",
    lastname: "M",
    emp_id: 89,
    date: "2023-03-21",
  },
  {
    firstname: "raj",
    lastname: "M",
    emp_id: 88,
    date: "2023-03-22",
  },
  {
    firstname: "Dhinesh",
    lastname: "R",
    emp_id: 87,
    date: "2023-03-23",
  },
  {
    firstname: "sutha",
    lastname: "R",
    emp_id: 86,
    date: "2023-03-24",
  },
  {
    firstname: "saravanan",
    lastname: "M",
    emp_id: 80,
    date: "2023-03-25",
  },
]



const options22 = [
  { label: 'Thing 1', value: 1 },
  { label: 'Thing 2', value: 2 },
];

export default function Graph() {



  const [input, setInput] = useState(Demo)
  console.log("f", input);


  const [ExcelData, setExclData] = useState([])
  console.log("Excel", ExcelData);

  const [DateInput, setDate] = useState({
    DateFrom: " ",
    DateTo: ""

  })
  console.log("Dates", typeof (DateInput.DateFrom));

  function submit(e) {
    e.preventDefault();
    for (let i = 0; i < Demo.length; i++) {
      if (new Date(Demo[i].date) >= new Date(DateInput.DateFrom) &&
        new Date(Demo[i].date) <= new Date(DateInput.DateTo)) {
        console.log('Date', Demo[i]);
        //b.push(Demo[i])
        //setExclData(Demo[i]);
        setExclData(previousoutput => [...previousoutput, Demo[i]])
      }
    }
    // const filteredDates = Demo.filter(
    //   (item) =>

    //     Date.parse(item) >= Date.parse(DateInput.DateFrom) &&
    //     Date.parse(item) <= Date.parse(DateInput.DateTo)
    // );
    //console.log("Output", filteredDates); // or set the filtered dates to state

  }

  function handle(e) {
    const newdata = { ...DateInput }
    newdata[e.target.name] = e.target.value
    setDate(newdata);
    console.log("Date", newdata);
  }


  const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtention = '.xlsx';
  const filename = "Export Excel";

  const ExportToExcel = async () => {



    for (let i = 0; i < Demo.length; i++) {
      if (new Date(Demo[i].date) >= new Date(DateInput.DateFrom) &&
        new Date(Demo[i].date) <= new Date(DateInput.DateTo)) {
        console.log('Date', Demo[i]);
        //b.push(Demo[i])
        //setExclData(Demo[i]);
        setExclData(previousoutput => [...previousoutput, Demo[i]])
      }
    }

    const ws = XLSX.utils.json_to_sheet(ExcelData);

    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

    const ExcelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const data = new Blob([ExcelBuffer], { type: filetype });

    FileSaver.saveAs(data, filename + fileExtention);
  }

  





  return (
    <div>

      <Row className="mt-3">
        <Col>
          <Card className="p-2" style={{ backgroundColor: "#47bcd1" }}>
            <Row>

              <Col lg={6} className="d-flex align-items-center">
                <h5> Night Shift Dashboard</h5>
              </Col>

              <Col lg={6} className="d-flex justify-content-end align-items-center">
                <button className="btnExcel" onClick={(e) => ExportToExcel(filename)}>
                  {/* <img src={Excel} height={30}/> */}
                  <span className="span"><BiExport size="1.5rem" /></span>
                  Export
                </button>

              </Col>

            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Card className="p-3 " style={{ backgroundColor: "#e0e0e0" }}>
            <Row>
              <Col lg={2} style={{ marginLeft: "" }}>
                <Row>
                  <Col><h6>Emplyee Id</h6></Col>

                </Row>
                <Row>
                  <Col>
                    

                    <DropdownMultiselect
                      options={["PTE10060", "PTE10061", "PTE10062", "PTE10063", "PTE10064", "PTE10065"]}
                      placeholder="Select Id"
                      name="countries"
                      className="custom-dropdown"
                    />




                  </Col>
                </Row>
                {/* <ReactMultiSelectCheckboxes options={options22} /> */}

              </Col>
              <Col lg={2} style={{ marginLeft: "" }}>
                <Row>
                  <Col><h6>Employee Name </h6></Col>

                </Row>
                <Row>
                  <Col>
                    {/* <select name="select" multiple className="multiselect" style={{ height: "40px" }}>

                      <option>Vijay</option>
                      <option>Dhinesh</option>
                      <option>Saravanan</option>
                      <option>Ajai</option>
                      <option>Jacob</option>
                      <option>Raj</option>
                    </select> */}

                    <DropdownMultiselect
                      options={["Radha", "Vijay", "Sutha", "Dhinesh", "saravanan", "Raj"]}
                      placeholder="Select Name"
                      name="countries"
                      className="custom-dropdown"
                    />




                  </Col>
                </Row>
                {/* <ReactMultiSelectCheckboxes options={options22} /> */}

              </Col>
              <Col lg={2} style={{ marginLeft: "" }}>
                <Row>
                  <Col><h6>Designation</h6></Col>

                </Row>
                <Row>
                  <Col>
                    {/* <select name="select" multiple className="multiselect" style={{ height: "40px" }}>

                      <option>Vijay</option>
                      <option>Dhinesh</option>
                      <option>Saravanan</option>
                      <option>Ajai</option>
                      <option>Jacob</option>
                      <option>Raj</option>
                    </select> */}

                    <DropdownMultiselect
                      options={["Asso Soft Engg", "Software Dev", "Power BI Dev", "Software Engg", "UI Dev", "Python Dev"]}
                      placeholder=" Select Designation"
                      name="countries"
                      className="custom-dropdown"
                    />




                  </Col>
                </Row>
                {/* <ReactMultiSelectCheckboxes options={options22} /> */}

              </Col>
              <Col lg={2} style={{ marginRight: "" }}>
                <Row>
                  <Col>
                    <h6>From</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input className="inputdate" type="date" name="DateFrom" value={DateInput.DateFrom} onChange={handle} />
                  </Col>
                </Row>

              </Col>
              <Col lg={2} style={{ marginLeft: "" }} >
                <Row>
                  <Col>
                    <h6>To</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input className="inputdate" type="date" name="DateTo" value={DateInput.DateTo} onChange={handle} />
                  </Col>
                </Row>

              </Col>





              <Col lg={2} style={{ marginLeft: "" }}
                className="d-flex align-items-center justify-content-end">
                <button className="btnSubmit" onClick={submit}>Filter</button>
              </Col>


            </Row>
          </Card>
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <input type="file" accept="" />
          <div
            style={{
              height: "60px",
              width: "60px",
              border: "1px solid black"
            }}
          >
            <img

              style={{
                width: "100%",
                height: "100%",
                position: "absolute"
              }}
            />
          </div>
        </Col>
      </Row> */}

      <Row className="" style={{ marginTop: "60px" }}>
        <Col lg={3}>
          <Row>
            <Col>
              <Card className="p-3" style={{backgroundColor:"#f8bb5e"}}>
                <Row>
                  <Col className="d-flex justify-content-center align-items-center">
                    <Card className="cardprofile " >
                      <img src={profile} height={98} style={{ borderRadius: "50px" }} />
                    </Card>
                  </Col>


                </Row>
                <Row>
                  <Col>
                    <h6 className="d-flex justify-content-center">Vijayaraj M</h6>
                  </Col>
                </Row>
                <Row className="mt-3" >
                  <Col>
                    <Card className="p-2" style={{ backgroundColor: "#fff" }}>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h6>Total Night Shift Days</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h4>20</h4>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Card className="p-2" style={{ backgroundColor: "#fff" }}>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h6>Total Night Shift Hours</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h4>100</h4>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Card className="p-2" style={{ backgroundColor: "#fff" }}>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h6>Average Days</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h4>30%</h4>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col>
                    <Card className="p-2" style={{ backgroundColor: "#fff" }}>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <h6>Average Hours</h6>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="d-flex justify-content-center" >
                          <h4>50%</h4>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>

              </Card>
            </Col>
          </Row>

        </Col>
        <Col lg={9}>
          <Card className="p-3" style={{ backgroundColor: "#ffffff" }}>
            <ReactApexChart options={options11} series={series11} type="line" height={400} />
          </Card>
        </Col>
      </Row>






    </div>
  );
}