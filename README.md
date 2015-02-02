# shopping_list

ShoppingListItem

ShoppingListItem is a class
ShoppingListItem has a property named name
ShoppingListItem has a property named description
ShoppingListItem has a property named is_done
ShoppingListItem has a constructor method that accepts 2 arguments, name and description
the constructor method sets the new instances name and description properties using the arguments passed in
ShoppingListItem has a method named check
calling the instance's check method will set it's is_done property to true
ShoppingListItem has a method named uncheck
calling the instance's uncheck method will set it's is_done property to false
ShoppingListItem has a method named render
calling the instance's render method will return a string formatted in html, in an
element. ex: <li class="[is_done]"><span>[name]</span> <span>[description]</span></li>
ShoppingList

ShoppingList is a class
ShoppingList has a property named items
ShoppingList has a constructor method that initializes items as an empty Array
ShoppingList has a method named addItem that accepts a single ShoppingListItem argument
invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array
invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error
ShoppingList has a method named removeItem that accepts a single ShoppingListItem argument
invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array
invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing
invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error
ShoppingList has a method named render
calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a
element, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>