angular.module('listApp',[])
  .controller('ListController', function(){
    var list = this;
    list.items = [];
    list.addItem = function(){
      list.items.push(list.itemText)
      list.itemText = ''
    };
  });
