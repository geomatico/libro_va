import React, { Component } from 'react';

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {
      action:this.props.action
    };
  }

  render() {
    return (
        <div onClick={this.props.onClick} className="shadow d-flex flex-column mybook mb-3">
            <img src={this.props.src} alt={this.props.title} className="mybookimage m-2"/>
            <div className="d-flex flex-row justify-content-between title-icon mx-2 mb-2">
              <p className="uppercase dosis mini">{this.props.title}</p>
              <i class={this.props.classIcon}></i>
            </div>
        </div>
    );
  }
}

export default Book;