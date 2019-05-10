import React from 'react'
import './Story.css'

const Story = ({story: {objectID, title, url, author, num_comments, points}, columns, onAchive}) => (
  <div className='story'>
    <span style={{width: columns.title.width}}><a href={url}>{title}</a></span>
    <span style={{width: columns.author.width}}>{author}</span>
    <span style={{width: columns.comments.width}}>{num_comments}</span>
    <span style={{width: columns.points.width}}>{points}</span>
    <button className='button-inline' onClick={() => onAchive(objectID)}>
      Achive
    </button>
  </div>
)

export default Story
