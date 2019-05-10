import React from 'react'
import {inject,observer} from 'mobx-react'
import Story from './Story'
import './Stories.css'

const Stories = ({storyStore, achiveStore, columns}) => (
  <div className='stories'>
    <div className='stories-header'>
      {Object.values(columns).map((column, idx) => {
        return <span key={`${column.label}_${idx}`} style={{width: column.width}}>{column.label}</span>
      })}
    </div>
    {(storyStore.readableStory || []).map(story => {
      return <Story key={story.objectID}
                    story={story}
                    columns={columns}
                    onAchive={achiveStore.achiveStory}/>
    })}
  </div>
)

export default inject('storyStore', 'achiveStore')(observer(Stories))
