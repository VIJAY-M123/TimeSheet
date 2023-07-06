import React, { useState } from "react";
import { CardBody, Col, Card, CardHeader, Row, Button } from "reactstrap";
import { AiOutlineClose } from "react-icons/ai"

export default function Sheet({handleSubmit}) {
    const [Data, setData] = useState({
        Date: "",
        Reason: "",
        From: "",
        To: "",
        Duration: "",
        Manager: "",

    })

    console.log("D", Data);
    const Handle = (e) => {

        setData({ ...Data, [e.target.name]: e.target.value })

    }
    const Submit = (e) => {
        e.preventDefault();
        handleSubmit(Data);
        setData({
            Date: "",
            Reason: "",
            From: "",
            To: "",
            Duration: "",
            Manager: "",
        });

    }

    



    return (
        <div>

           
                            <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    name="Date"
                                    value={Data.Date}
                                    onChange={Handle}
                                />

                                <input type="text"
                                    placeholder="Reason for working"
                                    name="Reason"
                                    value={Data.Reason}
                                    onChange={Handle} />

                                <input type="time"
                                    placeholder="From Time"
                                    name="From"
                                    value={Data.From}
                                    onChange={Handle} />

                                <input type="time"
                                    placeholder="To Time"
                                    name="To"
                                    value={Data.To}
                                    onChange={Handle} />

                                <input type=""
                                    placeholder="Duration"
                                    name="Duration"
                                    value={Data.Duration}
                                    onChange={Handle}
                                />

                                <input type="text"
                                    placeholder="Manager Signature"
                                    name="Manager"
                                    value={Data.Manager}
                                    onChange={Handle}
                                />

                                <Button onClick={Submit}>Submit</Button>
                            </form>
                        
        </div>
    )
}