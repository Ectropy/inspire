import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBand } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-bootstrap'

class BandList extends Component {
  renderList () {
    return this.props.bands.map(bands => {
      return (
        <li
          key={bands.name}
          onClick={() => {
            this.props.selectBand(bands)
            this.renderDetails(bands)
          }}
          className='list-group-item'
        >
          {bands.name}
        </li>
      )
    })
  }

  renderDetails (bands) {
    document.getElementById('bandImage').src = bands.image
  }

  render () {
    return (
      <Row>
        <Col xs={6}>
          <ul className='list-group'>{this.renderList()}</ul>
        </Col>
        <Col xs={6}>
          <img id='bandImage' width='100%' />
        </Col>
      </Row>
    )
  }
}

// takes app state as arg
// whatever gets returned will show up as props inside of band list

function mapStateToProps (state) {
  return {
    bands: state.bands
  }
}

// All things returned from this function will end up as props on the BandList container.
// We need this so we can call the selectBand function above through this.props.selectBand
// That will start the action >> reducer >> state change process
function mapDispatchToProps (dispatch) {
  // Whenever selectBand is called, this will pass the result to ALL of our reducers
  return bindActionCreators({ selectBand: selectBand }, dispatch)
}

// export
// Attach matching of the state to props to reducer &
// attach actions to reducer
export default connect(mapStateToProps, mapDispatchToProps)(BandList)
