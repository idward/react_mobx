import React, {Component} from 'react'
import Stories from './Stories'
import SearchStory from './SearchStory'
import './App.css'

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Author',
    width: '30%'
  },
  comments: {
    label: 'Comments',
    width: '10%'
  },
  points: {
    label: 'Points',
    width: '10%'
  },
  archive: {
    width: '10%'
  }
}

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='interactions'>
          <SearchStory/>
        </div>
        <Stories columns={COLUMNS}/>
      </div>
    )
  }
}

export default App
