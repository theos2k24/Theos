import React, { Component } from 'react'
import "./card.scss"
export class card extends Component {
  render() {
    return (
      <div>
<div class="parent">
  <div class="card">
      <div class="content-box">
          <span class="card-title">3D Card</span>
          <p class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <span class="see-more">See More</span>
      </div>
      <div class="date-box">
          <span class="month">JUNE</span>
          <span class="date">29</span>
      </div>
  </div>
</div>
      </div>
    )
  }
}

export default card
