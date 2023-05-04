//Don't add unnecessary context

//bad:
const product = {
    productId: 1,
    productName: "T-Shirt",
    productPrice: 8.99,
    productUnits: 12
  };
  
  //...
  
  product.productName;
  
  //good:
  const product1 = {
    id: 1,
    name: "T-Shirt",
    price: 8.99,
    units: 12
  };
  
  //...
  
  product.name;


  //Avoid a long number of arguments

//bad:
function getProducts(fields, fromDate, toDate) {
    // implementation
  }
  
  //good:
  function getProducts({ fields, fromDate, toDate }) {
    // implementation
  }
  
  getProducts({
    //fields: ['id', 'name', 'price', 'units],
    fromDate: '2020-07-01',
    toDate: '2020-07-22'
  });