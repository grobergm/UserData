export let puppy = {
  hungerLevel: 5,
  energyLevel: 5,
  setEnergy: function() {
    const energyInterval = setInterval(() => {
      this.energyLevel--;
      if (this.isItTired() ==true) {
        clearInterval(energyInterval);
        return "I'm tired!";
      }
    }, 1000);
  },

  isItTired: function() {
    if (this.hungerLevel > 0) {
      return false;
    } else {
      return true;
    }
  },

  lowerEnergy: function() {
    const energyInterval = setInterval(() => {
      this.energyLevel--;
      if (this.energyLevel === 0) {
        clearInterval(energyInterval);
        return this.energyLevel;
      }
    }, 1000);
  }
};
