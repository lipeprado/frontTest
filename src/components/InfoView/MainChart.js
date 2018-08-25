import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

// Actions
import * as chartActions from "../../actions/chart/actions";

// Styled
import { WrapperChart, ButtonLoadChart } from "./styled";

class MainChart extends Component {
  state = {
    viewChart: false
  };
  _handleViewChart = () => {
    this.setState({
      viewChart: true
    });
    const { actions, symbol } = this.props;
    actions.getChartData(symbol);
  };
  render() {
    const { viewChart } = this.state;
    const { data, isFetchingChart } = this.props;

    const chartData = data.map(d => {
      return {
        name: d.label,
        uv: d.open,
        pv: d.close,
        low: d.low,
        high: d.high,
        change: d.change
      };
    });

    return (
      <WrapperChart>
        {!viewChart && (
          <ButtonLoadChart onClick={this._handleViewChart}>
            View Chart
          </ButtonLoadChart>
        )}
        {viewChart && (
          <LineChart
            width={730}
            height={400}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" domain={["dataMin", "dataMax"]} />
            <YAxis />
            <Line type="monotone" dataKey="pv" stroke="#ff1300" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            <Line type="monotone" dataKey="amt" stroke="#fdd692" />
            <Line type="monotone" dataKey="high" stroke="#ac7357" />
            <Line type="monotone" dataKey="change" stroke="#4c00c0" />
          </LineChart>
        )}
      </WrapperChart>
    );
  }
}

MainChart.propTypes = {
  actions: PropTypes.object.isRequired,
  symbol: PropTypes.string
};

const mapStateToProps = state => {
  return {
    data: state.chart.data,
    isFetchingChart: state.chart.isFetchingChart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(chartActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainChart);
