(function () {
  'use strict';
  angular.module('myApp', [])
      .controller('yogurtController', YogurtController)
      .service('yogurtService', YogurtService);
  YogurtController.$inject = ['yogurtService'];
  function YogurtController(service) {
    const controller = this;
    controller.yogurts = service.getYogurts();
    controller.remove = yogurtIndex => service.remove(yogurtIndex);
    controller.hide = yogurtIndex => service.hide(yogurtIndex);
  }
  function YogurtService() {
    const yogurts = [
      new yogurt('Йогурт 1', 30),
      new yogurt('Йогурт 2', 15),
      new yogurt('Йогурт 3', 22),
      new yogurt('Йогурт 4', 40),
      new yogurt('Йогурт 5', 100)
    ];
    this.getYogurts = () => yogurts
    this.remove = yogurtIndex => yogurts.splice(yogurtIndex, 1)
    this.hide = yogurtIndex => yogurts[yogurtIndex].isHide = true
  }
  class yogurt {
    constructor(mark, quantity = 0) {
      this.mark = mark;
      this.quantity = quantity;
      this.isHide = false;
    };
  }
})();
