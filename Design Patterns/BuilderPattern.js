class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class ProductBuilder {
  constructor(name) {
    this.product = new Product();
    this.product.name = name;
  }

  withPrice = (price) => {
    this.product.price = price;
    return this;
  };

  isCategory = (category) => {
    this.product.category = category;
    return this;
  };

  build = () => {
    return this;
  };
}

const product = new ProductBuilder("Widget")
  .withPrice(19.99)
  .isCategory("Gadgets")
  .build();

console.log(product.product);
