import {configure} from 'mobx'
import StoryStore from './storyStore'
import AchiveStore from './achiveStore'

configure({enforceActions: 'observed'})

class RootStore {
  constructor() {
    this.storyStore = new StoryStore(this)
    this.achiveStore = new AchiveStore(this)
  }
}

const rootStore = new RootStore()

export default rootStore
