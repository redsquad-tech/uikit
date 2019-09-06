import React, { Component } from 'react'

import { UikStepper, UikModal, UikCheckbox } from 'uikit'

export default class App extends Component {
  state = { check: false }

  render () {
    const elements = [
      { title: 'elem1', filled: false },
      { title: 'elem2', filled: true },
      { title: 'elem3', filled: false },
      { title: 'elem4', filled: false },
    ];
    return (
      <div>
        <UikStepper elements={elements} on active='elem3' onLinkClick={title => console.log(title)}>Hello</UikStepper>
        {false && <UikModal close={()=> {}} show={true}>Hello</UikModal>}
        <UikCheckbox label='check' value={this.state.check} onInput={value => this.setState({check: !this.state.check})}/>
      </div>
    )
  }
}
