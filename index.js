// Add new item to list
function addToList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputBox").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("inputBox").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Add "checked" class on clicking list item 
  
  li.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

  // Click on "X" to remove list item
  var close = document.getElementsByClassName("close");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
