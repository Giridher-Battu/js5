class Something {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    Area() {
        return this.height * this.width;
      }
    get area() {
      return this.Area();
    }
   
  }
  
  const some = new Something(10, 10);
  
  console.log(some.area);
  