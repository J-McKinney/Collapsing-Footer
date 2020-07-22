import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./CollapsingFooter.css";

class CollapsingFooter extends Component {
  state = {
    open: false,
    changeNavBar: false,
  };

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
  };

  toggleCollapse = (e) => {
    e.preventDefault();
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
        <Collapse in={this.state.open}>
          <div id="example-collapse-text" className="collapsingContent">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. Anim
            pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. Anim
            pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. Anim
            pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
        <Button
          id="collapsingFooterButton"
          onClick={this.toggleCollapse}
          aria-controls="example-collapse-text"
          aria-expanded={this.state.open}
        >
          <div
            id="menuIconContainer"
            className={this.state.changeNavBar ? "change" : ""}
            onClick={this.toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </Button>
      </>
    );
  }
}

export default CollapsingFooter;
