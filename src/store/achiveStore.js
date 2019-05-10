import {observable, action} from 'mobx'

class AchiveStore {
  @observable achivedStoryIDs = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action achiveStory = (id) => {
    this.achivedStoryIDs.push(id)
  }
}

export default AchiveStore
