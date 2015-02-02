function ShoppingList (){
  this.items = [];
}

ShoppingList.prototype.addItem = function (shoppinglistitem) {
   if(!(shoppinglistitem instanceof ShoppingListItem)){
    throw "shit fit";
  }
   this.items.push(shoppinglistitem);
};

ShoppingList.prototype.removeItem = function (shoppinglistitem) {
  if (shoppinglistitem === undefined){
    this.items.pop();
  } else {
  if(!(shoppinglistitem instanceof ShoppingListItem)){
    throw "shit fit";
  }
  this.items.splice(this.items.indexOf(shoppinglistitem),1);
  }
};

ShoppingList.prototype.render = function () {
  console.log('<ul>' + this.items + '</ul>');
};

