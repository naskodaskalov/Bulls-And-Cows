import React, { Component } from 'react'
import Auths from '../Utilities/Auths'
import PrimaryLink from '../Components/Common/PrimaryLink'

export default class Homepage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: Auths.isLoggedIn()
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='text-center'>
          <h3 className='section-title'>Начало</h3>
        </div>
        {this.state.isLoggedIn ? (
          <div className='d-flex flex-row row justify-content-center col-md-12 col-sm-12 mt-5'>
            <div className='col-md-6 col-sm-12 text-center'>
              <PrimaryLink
                name='Започни нова игра'
                link='/game'
              />
            </div>
            <div className='col-md-6 col-sm-12 text-center'>
              <PrimaryLink
                name='Виж класацията'
                link='/ranging'
              />
            </div>
          </div>
        ) : 'You have to login first'}
      </div>
    )
  }
}
