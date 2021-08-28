import React from 'react'
import './Sidebar.css';
import { Card, CardText, CardBody, CardLink, CardTitle, CardFooter } from 'reactstrap';

function Sidebar() {
    return (
        <div>
            <Card style={{ textAlign: "center" }}>
                <CardBody >
                    <CardTitle className="cardTitle">About Us</CardTitle>
                    <img className="cardImg" src="assets/images/img4.jpg" alt="Image" />
                    <CardText className="cardText">sdjkfbdkjkd ksd vkcvdbvkdv vbjsdbfd v cjbd djvbs vdskvbjksbnuovsd v</CardText>
                </CardBody>
                <CardFooter className="cardFooter">
                    <CardLink className="cardLink" href="#">Link1</CardLink>
                    <CardLink className="cardLink" href="#">Link2</CardLink>
                    <CardLink className="cardLink" href="#">Link3</CardLink>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Sidebar
