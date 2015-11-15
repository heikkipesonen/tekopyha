import React from 'react';

class Barchart extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
      let value = this.props.value;
      let total = this.props.total;

      let percentage = (value / total) * 100;
      let barStyle = {
        width: percentage > 100 ? 100 + '%' : percentage + '%'
      };

      return (
        <div className="bar-chart">
          <div className="bar-chart-track"></div>
          <div className="bar-chart-bar" style={barStyle}></div>
          <span className="bar-chart-label">{this.props.label}</span>
        </div>
      );
  }
}

export default Barchart;
