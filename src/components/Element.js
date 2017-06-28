import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filter} from '../actions/index';

//comment

class Element extends React.Component {
  render () {
    return (
      <li>
        {this.props.element.node.description}
        {
         this.props.element.node.children.length > 0 &&
         this.props.element.node.children.filter(child => child.node.description.match(this.props.filterText) || this.props.filterText.match(child.node.description)).length > 0 && (
          <ul>
            {
              this.props.element.node.children.filter(child => child.node.description.match(this.props.filterText) || this.props.filterText.match(child.node.description))
                .map((child, idx) => <Element key={idx} element={child} />)
            }
          </ul>
        )}
      </li>
    );
  }
}

Element.propTypes = {
  element: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    filterText: state.filtering.filterText
  }
}

export default connect(mapStateToProps, {filter})(Element);
