class Navigator {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

  go(location) {
    this.currentIndex++;
    this.history.splice(this.currentIndex);
    this.history.push(location);
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    } else {
      return null;
    }
  }

  forward() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    } else {
      return null;
    }
  }
}

module.exports = Navigator;
