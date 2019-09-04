import React, { Component } from 'react'

import { UikStepper, UikModal } from 'uikit'

export default class App extends Component {

  render () {
    const elements = [
      { title: 'elem1', filled: false },
      { title: 'elem2', filled: true },
      { title: 'elem3', filled: false },
    ];
    return (
      <div>
        <UikStepper elements={elements} active='elem3'>Hello</UikStepper>
        <UikModal close={()=> {}} show={true}>Hello</UikModal>
      </div>
    )
  }
}
