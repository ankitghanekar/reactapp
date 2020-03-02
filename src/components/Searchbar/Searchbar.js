import React, { Component } from 'react';

// import s from './Searchbar.scss';

export default class Searchbar extends Component {
  constructor(props){
    super(props)
    this.state={
      search:""
    }
  }
  onChange(value){
    this.setState({search:value})
  }
  render() {
    return (
      <div>
        <input value={this.state.search} onChange={this.onChange.bind(this)} />
      </div>
    );
  }
}
