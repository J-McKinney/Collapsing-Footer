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
                        <h5>
                          <a href="#/action-1">The World Of React 1</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-2">The World Of React 2</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-3">The World Of React 3</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-4">The World Of React 4</a>
                        </h5>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>
                        <h5>
                          <a href="#/action-5">The World Of React 5</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-6">The World Of React 6</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-7">The World Of React 7</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-8">The World Of React 8</a>
                        </h5>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>
                        <h5>
                          <a href="#/action-9">The World Of React 9</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-10">The World Of React 10</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-11">The World Of React 11</a>
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <a href="#/action-12">The World Of React 12</a>
                        </h5>
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
