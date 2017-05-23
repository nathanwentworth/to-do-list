
var list;
var listElem;
var addField;

window.onload = function () {
  init();
}

function init() {
  listElem = document.getElementById('list');
  addField = document.getElementById('add');
  addField.addEventListener('keyup', addToDoItem);

  load();
  displayList();
}

// load localstorage data
function load() {
  list = localStorage.getItem('list');
  if (list == null) {
    list = [];
  } else {
    list = JSON.parse(list);
  }
  console.log(list);
}

// debug function, deletes all stored data
function deleteAll() {
  localStorage.removeItem('list');
}

// save localstorage data
function save() {
  localStorage.setItem('list', JSON.stringify(list));
}

// write list
function displayList() {
  // first remove all child nodes
  while (listElem.hasChildNodes()) {
    listElem.removeChild(listElem.lastChild);
  }

  // then create new child nodes from the list
  for (var i = 0; i < list.length; i++) {
    // create the initial list node, top level parent
    var listNode = document.createElement('li');
    var listText = document.createTextNode(list[i]);
    listNode.appendChild(listText);
    listNode.addEventListener('mouseenter', displayCloseButton);
    listNode.addEventListener('mouseleave', displayCloseButton);

    // then create the node that will act as the x button
    var closeNode = document.createElement('span');
    closeNode.appendChild(document.createElement('div'));
    closeNode.appendChild(document.createElement('div'));

    // add the close event listener to the x node
    closeNode.addEventListener('click', removeToDoItem);

    listNode.appendChild(closeNode);

    // inserts the new todo item at the top of the list
    listElem.insertBefore(listNode, listElem.firstChild);
  }
}

// add element to the list
function addToDoItem(event) {
  var text = add.value;

  if (event.keyCode == 13 && text != "") {
    list.push(text);
    displayList();
    add.value = "";
  }

  save();
}

console.log("13 % 13 " + 13 % 13);
console.log("0 % 13 " + 0 % 13);
console.log("1 % 13 " + 1 % 13);
console.log("12 % 13 " + 12 % 13);

// remove elements from the list
function removeToDoItem(event) {
  var value = event.target.innerText;
  var index = list.indexOf(value);

  if (index > -1) {
    array.splice(index, 1);
  }

  save();
  load();
  displayList();
}

// displays the close 'x' on hover
function displayCloseButton(event) {
  var closeBtn = event.target.getElementsByTagName('span')[0];
  closeBtn.classList.toggle('visible');
}





// $(document).ready(function($) {

//   var regex = /\","\b/g;
//   var arr = Cookies.get('list');
//   var i = 0;
//   splitarr = 0;

//   if (typeof arr == 'undefined') {
//     console.log("splitarr");
//     // arr = "[]";
//     // Cookies.set('list', arr, { expires: 365, path: '' });
//   } else {
//     var shortened = arr.substring(2, arr.length-2);
//     splitarr = shortened.split(regex);

//     console.log(splitarr);

//     var splitlength = splitarr.length;

//     if (splitlength < 4) {
//       $('ul:first-child').children('li').remove()
//     }
//     else {
//      $('ul:first-child').children('li').remove()

//       while (splitarr[i]) {
//         $('ul:first-child').append('<li>' + splitarr[i] + '<span><div></div><div></div></span></li>')
//         i++;
//       }
//     }
//   }



//   $('ul:first-child').sortable().draggable();


//   $(document).on('keydown', 'input', function() {
//     $('ul:first-child').sortable().draggable();
//   });

//   $(document).on('click', '#save', function() {
//     var arr = $('ul:first-child > li').map(function() { return $(this).text() }).get();
//     console.log(arr);
//     Cookies.set('list', arr, { expires: 365, path: '' });
//   });

  // $(document).on('click', '#load', function() {
  //   // var regex = /([',[\]"])\W/g;
  //   var regex = /\","\b/g;
  //   var arr = Cookies.get('list');
  //   var i = 0;

  //   var shortened = arr.substring(2, arr.length-2);
  //   var splitarr = shortened.split(regex);

  //   console.log(splitarr);

  //   $('ul:first-child').children('li').remove()

  //   while (splitarr[i]) {
  //     $('ul:first-child').append('<li>' + splitarr[i] + '<span><div></div><div></div></span></li>')
  //     i++;
  //   }
  //   $('ul:first-child').sortable().draggable();
  // });

//   $(document).on('click', 'span', function() {
//     $(this).parent('li').remove();
//   });

//   $(document).on('mouseover', 'ul:first-child li', function() {
//     $(this).children('span').css('visibility', 'visible');
//   });
//   $(document).on('mouseover', 'ul:first-child li span', function() {
//     $(this).css('visibility', 'visible');
//   });
//   $(document).on('mouseout', 'ul:first-child li', function() {
//     $(this).children('span').css('visibility', 'hidden');
//   });

//   $('input').keyup(function(event) {
//     var textinput = $('input').val();
//     if(event.keyCode == 13 && textinput != "") {
//       $('ul:first-child').append('<li>' + textinput + '<span><div></div><div></div></span></li>');
//       $('input[type=text]').val('');
//     }
//   });
// });