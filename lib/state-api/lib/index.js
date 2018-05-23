class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date(),
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookUpAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  getState = () => {
    return this.data;
  }

  subscribe = (cb) => {
    this.lastSubscriptionId += 1;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  }

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  }

  addChangeToState = (intendedChange) => {
    this.data = {
      ...this.data,
      ...intendedChange
    };
    this.notifySubscribers();
  }

  setSearchTerm = (searchTerm) => {
    this.addChangeToState({
      searchTerm,
    });
  }

  startClock = () => {
    setInterval(() => {
      this.addChangeToState({
        timestamp: new Date(),
      });
    }, 1000);
  }
}

export default StateApi;
