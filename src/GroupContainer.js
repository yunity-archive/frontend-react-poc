import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as groupActions from './actions/group-actions';
import GroupList from './GroupList';

class GroupContainer extends Component {
  componentDidMount() {
    this.props.actions.load();
  }
  render() {
    if (this.props.groups.isFetching)
      return <LinearProgress />
    return <GroupList groups={this.props.groups.items} />;
  }
}

function mapStateToProps(state, props) {
  // subscription to redux store
  // will be called on store update
  return {
    groups: state.groups
  };
}

function mapDispatchToProps(dispatch) {
  // binds groupActions to actions, to be used in GroupContainer
  // calls dispatch on actions
  return {
    actions: bindActionCreators(groupActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);