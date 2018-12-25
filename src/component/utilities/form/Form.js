import React from "react";
import propTypes from "prop-types";

import "./form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="row form-container">
        <form className="col s12 inputs-container">
          {this.props.inputs.map((e, i) => {
            return (
              <div key={i} className="input-field col s12">
                <input
                  name={e.name}
                  onChange={this.props.onChange}
                  id={e.placeholder}
                  type="text"
                  class="validate"
                />
                <label for={e.placeholder}>{e.placeholder}</label>
              </div>
            );
          })}
        </form>
        <a class="waves-effect waves-light btn" onClick={this.props.onSubmit}>
          Submit
        </a>
      </div>
    );
  }
}

Form.propTypes = {
  inputs: propTypes.array,
  onChange: propTypes.func,
  onSubmit: propTypes.func
};

export default Form;
