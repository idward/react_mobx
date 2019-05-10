import React, {Component} from 'react'
import {observable, action} from 'mobx'
import {observer,inject} from 'mobx-react'

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query='

const fetchStories = (query) => {
 return fetch(HN_BASE_URL + query)
    .then(response => response.json())
}

@inject('storyStore') @observer
class SearchStory extends Component {
  @observable query = ''

  @action
  onChange = (event) => {
    const {value} = event.target
    this.query = value
  }

  @action
  onSubmit = (event) => {
    event.preventDefault()
    if(this.query){
      fetchStories(this.query)
        .then(result => this.props.storyStore.setStories(result.hits))
      this.query = ''
    }
  }


  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.query}/>
        <button type='submit'>search</button>
      </form>
    )
  }
}

export default SearchStory
