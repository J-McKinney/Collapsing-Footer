import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./CollapsingFooter.css";

class CollapsingFooter extends Component {
  state = {
    open: false,
    changeNavBar: false,
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
    if (this.state.open === false) {
      this.setState({ open: true });
    } else if (this.state.open === true) {
      this.setState({ open: false });
    } else {
      this.setState({ open: false });
    }
  };

  render() {
    return (
      <>
        <div className="footerWrapper">
          <Container className="collapsingFooterContainer">
            <Collapse in={this.state.open}>
              <div id="example-collapse-text" className="collapsingContent">
                <Row>
                  <Col>
                    <ul>
                      <li>
                        <h5>The World Of React 1</h5>
                      </li>
                      <li>
                        <h5>The World Of React 2</h5>
                      </li>
                      <li>
                        <h5>The World Of React 3</h5>
                      </li>
                      <li>
                        <h5>The World Of React 4</h5>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>
                        <h5>The World Of React 5</h5>
                      </li>
                      <li>
                        <h5>The World Of React 6</h5>
                      </li>
                      <li>
                        <h5>The World Of React 7</h5>
                      </li>
                      <li>
                        <h5>The World Of React 8</h5>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>
                        <h5>The World Of React 9</h5>
                      </li>
                      <li>
                        <h5>The World Of React 10</h5>
                      </li>
                      <li>
                        <h5>The World Of React 11</h5>
                      </li>
                      <li>
                        <h5>The World Of React 12</h5>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Collapse>
          </Container>

          <Container>
            <Row>
              <Col>
                <Button
                  className={this.state.changeNavBar ? "change" : ""}
                  id="collapsingFooterButton"
                  onClick={this.toggleCollapse}
                  aria-controls="example-collapse-text"
                  aria-expanded={this.state.open}
                >
                  <div id="menuIconContainer">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default CollapsingFooter;
