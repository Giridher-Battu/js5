const so = {
    fullName: function() {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  const on = {
    firstName:"adhithya",
    lastName: "keshav",
  }
  so.fullName.call(on);