import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import "../Style/Home.css";
import { Row, Col, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import Time from "../../Assets/Image/TimeSheet.png"
import Teams from "../../Assets/Image/My Team.png"
import Details from "../../Assets/Image/My Details.png"
import Night from "../../Assets/Image/Night.png"
import Chat from "../../Assets/Image/Chat.png";
import { useNavigate } from "react-router-dom";
import video from "../../Assets/Video/BI.mp4"
import { Segment } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";
import "../Style/Chat.css";



const Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 350px;
width: 100%;
background-color: #fff;
color: #000000;
margin: 0 15px;

border-radius:20px;
flex-direction:column;
`;



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function Home() {

    const [Open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handle = () => {
        navigate("/night")
    }

    const Team = () => {
        setOpen(true)
    }
    return (
        <div className="con" >

            <video src={video} autoPlay loop muted className="video_bg" />

            <h1 style={{ textAlign: "center" }}>Welcome To Prowesstics Employee Login</h1>
            <div className="App1">
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <Row>
                            <Col>
                                <img src={Time} height={50} style={{ borderRadius: "" }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Time Sheet</h4>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>Manage all your work from start to end</p>

                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <p>Customize your workflows</p>

                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col>
                                <Button onClick={handle} className="TimeSheetButton">Time Sheet</Button>
                            </Col>
                        </Row>

                    </Item>
                    <Item>
                        <Row>
                            <Col>
                                <img src={Teams} height={50} style={{ borderRadius: "" }} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h4>My Team</h4>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>Explore your team chart and Discover</p>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Current team members</p>

                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <Button onClick={handle} className="TimeSheetButton">My Team</Button>
                            </Col>
                        </Row>

                    </Item>
                    <Item>
                        <Row>
                            <Col>
                                <img src={Details} height={50} style={{ borderRadius: "" }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>My Details</h4>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>Update your profile and keep the</p>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>information up-to-date</p>

                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col>
                                <Button onClick={handle} className="TimeSheetButton">My Details</Button>
                            </Col>
                        </Row>

                    </Item>
                    <Item>
                        <Row>
                            <Col>
                                <img src={Night} height={50} style={{ borderRadius: "" }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Night Shift</h4>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>Labour pertaining to employees </p>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>working on night shifts</p>

                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col>
                                <Button onClick={handle} className="TimeSheetButton">Night shift</Button>
                            </Col>
                        </Row>

                    </Item>
                    <Item>
                        <Row>
                            <Col>
                                <img src={Chat} height={50} style={{ borderRadius: "" }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Team Chat</h4>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>Labour pertaining to employees </p>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>working on night shifts</p>

                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col>
                                <Button onClick={Team} className="TimeSheetButton">Team Chats</Button>
                            </Col>
                        </Row>

                    </Item>


                </Carousel>
            </div>
            <div style={{ position: "absolute", right: "0px" }}>
                <Modal
                    isOpen={Open}
                    toggle={() => setOpen(!Open)}>
                    <ModalHeader
                        toggle={() => setOpen(!Open)}
                    >
                       
                    </ModalHeader>
                    <ModalBody>
                        <Segment floated="right" >
                            <ChatBot steps={[
                                {
                                    id: 'intro',
                                    message: 'Hello. What is your name?',
                                    trigger: 'intro-user',
                                },
                                {
                                    id: 'intro-user',
                                    user: true,
                                    end: true,
                                },
                            ]} />
                        </Segment>

                    </ModalBody>
                </Modal>

            </div>


        </div>
    );
}