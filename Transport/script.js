
// Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. 
// Вам нужно:
// создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
// создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
// создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла. Объект, с которым вам предстоит работать:
const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
  ];
  class Transport {
    constructor(type, price, model) {
      
      this.type = type;
      this.price = price;
      this.model = model;
    }
  
    getInfo() {
      return this.model;
    }
  
    getPrice() {
      return this.price.toLocaleString('ru-RU') + ' ₽';
    }
  }
  
  class Car extends Transport {
    constructor(model, doorsCount, price) {
      super('car', price, model);
      this.doorsCount = doorsCount;
    }
  
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getDoorsCount = this.getDoorsCount.bind(this);
    
    getDoorsCount() {
      return `Кол-во дверей: ${this.doorsCount}`;
    }
  }
  
  class Bike extends Transport {
    constructor(vendor, model, maxSpeed, price) {
      super('bike', price, vendor, model);
      this.maxSpeed = maxSpeed;
    }
  
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getMaxSpeed = this.getMaxSpeed.bind(this);
  
   
    getMaxSpeed() {
      return `Макс. скорость: ${this.maxSpeed} км/ч`;
    }
  }
