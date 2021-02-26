import React from "react";
import { Col, Container, Navbar, Row, Alert } from "react-bootstrap";
import useIsOnline from "./hooks/useIsOnline";

const App = () => {
  const { isOnline, isOffline, lastChecked } = useIsOnline();
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Am I Online</Navbar.Brand>
      </Navbar>
      <Container className="mt-4">
        <Row>
          <Col>
            {isOnline && (
              <Alert variant="success">
                <Alert.Heading>You are ONLINE!</Alert.Heading>
                <p>
                  You should be able to connect to the internet and use it as
                  normal... if anything changes we'll let you know!
                </p>
                <hr />
                <p className="mb-0">Last checked {lastChecked}</p>
              </Alert>
            )}
            {isOffline && (
              <Alert variant="danger">
                <Alert.Heading>You are OFFLINE!</Alert.Heading>
                <p>
                  Uh oh! It appears you cannot connect to the internet...if
                  anything changes we'll let you know!
                </p>
                <hr />
                <p className="mb-0">Last checked {lastChecked}</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
