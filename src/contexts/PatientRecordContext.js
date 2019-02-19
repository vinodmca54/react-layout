import React from "react";

export const PatientRecordContext = React.createContext();

class PatientRecordProvider extends React.Component {
  constructor(props) {
    super(props);
    const reducer = (state, action) => {
        switch (action.type) {
          case "GetPatientRecord":
            return {
              record: action.data
            };
            return state;
        }
      };

    this.state = {
      dispatch: action => {
        this.setState(state => reducer(state, action));
      }
    };
  }

  render() {
    return (
      <PatientRecordContext.Provider value={this.state}>
        {this.props.children}
      </PatientRecordContext.Provider>
    );
  }
}

export default PatientRecordProvider;
