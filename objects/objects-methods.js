let restaurant = {
  name: 'livingston',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize){
   let seatLeft = this.guestCapacity - this.guestCount
   return partySize <= seatLeft
 },
  seatParty: function(partySize){
    this.guestCount = this.guestCount + partySize
  },
  removePary: function(partySize){
    this.guestCount = this.guestCount - partySize
  }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removePary(5)
console.log(restaurant.checkAvailability(4))
