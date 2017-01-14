(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('BoughtController', BoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getItems();

    toBuyList.itemName = "";
    toBuyList.itemQuantity = "";

    toBuyList.addItem = function () {
      ShoppingListCheckOffService.addItem(toBuyList.itemName, toBuyList.itemQuantity);
    };

    toBuyList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  BoughtController.$inject = ['ShoppingListCheckOffService'];
  function BoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getItemsBought();

    boughtList.addItemBought = function () {
      ShoppingListCheckOffService.addItemBought(boughtList.itemName, boughtList.itemQuantity);
    };

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsToBuy.push(item);
    };

    service.removeItem = function (itemIndex) {
      var item =  itemsToBuy[itemIndex]
      itemsBought.push(item);
      itemsToBuy.splice(itemIndex, 1);
    };

    service.getItems = function () {
      itemsToBuy = ToBuyShoppingList;
      return itemsToBuy;
    };

    var itemsBought = [];
    service.addItemBought = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsBought.push(item);
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    var ToBuyShoppingList = [
      {
      name: "Cookies",
      quantity: "10"
      },
      {
        name: "Donuts",
        quantity: "2"
      },
      {
        name: "Chocolate",
        quantity: "1"
      },
      {
        name: "Bananas",
        quantity: "5"
      },
      {
        name: "Apples",
        quantity: "100"
      }
    ];
  }
})();
