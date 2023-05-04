//Avoid conditionales whenever possible

//bad:
class Dog {
    // ...
    getBreed() {
      switch (this.type) {
        case "GermanShepherd":
          return this.getStandardSize("GermanShepherd");
        case "JackRussellTerrier":
          return this.getStandardSize("JackRussellTerrier");
        case "ShibaInu":
          return this.getStandardSize("ShibaInu");
      }
    }
  }
  
  //good:
  class Dog {
    // ...
  }
  
  class GermanShepherd extends Dog {
    // ...
    getStandardSize() {
      return this.standardSize;
    }
  }
  
  class JackRussellTerrier extends Dog {
    // ...
    getSize() {
      return this.standardSize;
    }
  }
  
  class ShibaInu extends Dog {
    // ...
    getSize() {
      return this.standardSize;
    }
}      