//Use method chaining

//bad:
class Product {
  
    constructor(name) {
      this.name = name;
    }
    
    setPrice(price) {
      this.price = price;
    }
    
    setUnits(units) {
      this.units = units;
    }
    
    save() {
      console.log(this.name, this.price, this.units);
    }
  }
  
  const product = new Product("Bag");
  
  product.setPrice(23.99);
  product.setUnits(12);
  product.save();

//good:
class Product {
  
    constructor(name) {
      this.name = name;
    }
    
    setName(name) {
      this.name = name;
      // Return this for chaining
      return this;
    }
    
    setPrice(price) {
      this.price = price;
      // Return this for chaining
      return this;
    }
    
    save() {
      console.log(this.name, this.price, this.units);
      // Return this for chaining
      return this;
    }
  }
  
  const product1 = new Product("T-Shirt")
      .setName("Jeans")
      .setAge(31.99)
      .save();