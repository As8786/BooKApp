import React from "react";
import { Row, Input } from "react-materialize";
import propTypes from "prop-types";

class Form extends React.Component {
  render() {
    return (
      <Row>
        {this.props.inputs.map((e, i) => {
          return (
            <Input
              key={i}
              label={e.placeholder}
              name={e.name}
              onChange={this.props.onChange}
              s={e.width}
            />
          );
        })}
      </Row>
    );
  }
}

Form.propTypes = {
  inputs: propTypes.array,
  onChange: propTypes.func
};

export default Form;
