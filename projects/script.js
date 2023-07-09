document.addEventListener("DOMContentLoaded", function() {
    var indexList = document.getElementById("index-list");
  
    // Add A to Z links
    for (var i = 65; i <= 90; i++) {
      var letter = String.fromCharCode(i);
      var listItem = document.createElement("li");
      var anchor = document.createElement("a");
      anchor.href = "#" + letter;
      anchor.textContent = letter;
      listItem.appendChild(anchor);
      indexList.appendChild(listItem);
    }
  
    // Define your list of items
    var items = [
      "Apple",
      "Banana",
      "Carrot",
      "Dog",
      "Elephant",
      "Fish"
    ];
  
    // Loop through the items array
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var firstLetter = item.charAt(0).toUpperCase();
  
      // Create a new list item and anchor tag for each item
      var listItem = document.createElement("li");
      var anchor = document.createElement("a");
      anchor.href = "#" + firstLetter;
      anchor.textContent = item;
  
        // Create a div wrapper for the item and append the anchor to it
        var itemWrapper = document.createElement("div");
        itemWrapper.appendChild(anchor);

        // Append the item wrapper to the list item and the list item to the index list
        listItem.appendChild(itemWrapper);
        indexList.appendChild(listItem);
    }
  });
  