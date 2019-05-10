import {observable, computed, action} from 'mobx'

const stories = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

class StoryStore {
  @observable stories = stories

  constructor(rootStore){
    this.rootStore = rootStore
  }

  @action setStories = (stories) => {
    this.stories = stories
  }

  @computed get readableStory(){
    const {achivedStoryIDs} = this.rootStore.achiveStore

    return stories.filter(story => {
      return !achivedStoryIDs.includes(story.objectID)
    })
  }
}

export default StoryStore
