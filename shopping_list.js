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
  var start = '<ul>';
  for(var i = 0; i < this.items.length; i++){
    start += this.items[i].render();
  }
  start += '</ul>';
  return start;
};



// var tasks = ['Feed Pug', 'Walk Pug', 'Hug Pug'];
// var myList = 'My List of stuff to do: ';

// console.log('this is what myList variable looks like: ', myList);


// for (var i = 0; i < tasks.length; i++) {
//     myList += tasks[i] + ', ';
// }

// myList += '. Once that is done I can play Video Games.';

// console.log("now it looks like...", myList);