import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
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

    return (
      <WrapperChart>
        {!viewChart && (
          <ButtonLoadChart onClick={this._handleViewChart}>
            View Chart
          </ButtonLoadChart>
        )}
        {viewChart && (
          <Fragment>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            />
          </Fragment>
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
