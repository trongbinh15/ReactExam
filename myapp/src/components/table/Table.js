import React from "react";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as userAction from "../../redux/actions/userAction";
import { bindActionCreators } from "redux";

class Table extends React.Component {
  state = {
    filter: "",
    data: null
  };
  componentDidMount() {
    const { users, actions } = this.props;

    if (users.length === 0) {
      actions.loadUsers().catch(error => {
        alert("Loading user failed" + error);
      });
    }
  }

  handleFilter = e => {
    console.log(e);
    this.setState({ filter: e });
  };

  if(isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  render() {
    return (
      <div className="col-md-8 m-4">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span>
              <span className="input-group-text" id="basic-addon1">
                Filter:
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e => this.handleFilter(e.target.value)}
              />
            </span>
          </div>
        </div>
        <table id="customers" className="table table-bordered table-hover">
          <thead className=" thead-light">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data
              .filter(item => {
                return item.title.includes(this.state.filter);
              })
              .map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed ? "Completed" : "Not completed"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps - state", state);
  return {
    users: state.users.length === 0 ? [] : state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(userAction.loadUsers, dispatch)
    }
  };
}

Table.propTypes = {
  users: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
