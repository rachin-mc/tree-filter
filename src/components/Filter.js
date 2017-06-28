import React from 'react';
import {connect} from 'react-redux';

import {filter} from '../actions/index';
import Element from './Element';

class Assignment extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  componentDidMount () {
    this.props.filter('')
  }

  render () {
    return (
      <div>
        <input type='text' name='searchBox' placeholder='search' onChange={this.handleSearchChange}/>
        <button onClick={(e) => this.props.filter(this.state.searchTerm)}>Search</button>
        <hr />
        <ul>
          {this.props.filteredTree.length > 0 && (
            this.props.filteredTree.map((ele, idx) => <Element key={idx} element={ele} />)
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    filteredTree: state.filtering.tree.filter(ele => ele.node.description.match(state.filtering.filterText) || state.filtering.filterText.match(ele.node.description))
  }
}

export default connect(mapStateToProps, {
  filter
})(Assignment);
