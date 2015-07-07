$(document).ready(function($) {

    var regex = /\","\b/g;
    var arr = Cookies.get('list');
    var i = 0;
    splitarr = 0;

    if (typeof arr == 'undefined') {
      console.log("splitarr");
      // arr = "[]";
      // Cookies.set('list', arr, { expires: 365, path: '' });
    }
    else {
      var shortened = arr.substring(2, arr.length-2);
      splitarr = shortened.split(regex);

      console.log(splitarr);

      var splitlength = splitarr.length;

      if (splitlength < 4) {
        $('ul:first-child').children('li').remove()
      }
      else {
       $('ul:first-child').children('li').remove()

        while (splitarr[i]) {
          $('ul:first-child').append('<li>' + splitarr[i] + '<span><div></div><div></div></span></li>')
          i++;
        }
      }
    }



    $('ul:first-child').sortable().draggable();


  $(document).on('keydown', 'input', function() {
    $('ul:first-child').sortable().draggable();
  });

  $(document).on('click', '#save', function() {
    var arr = $('ul:first-child > li').map(function() { return $(this).text() }).get();
    console.log(arr);
    Cookies.set('list', arr, { expires: 365, path: '' });
  });

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

  $(document).on('click', 'span', function() {
    $(this).parent('li').remove();
  });

  $(document).on('mouseover', 'ul:first-child li', function() {
    $(this).children('span').css('visibility', 'visible');
  });
  $(document).on('mouseover', 'ul:first-child li span', function() {
    $(this).css('visibility', 'visible');
  });
  $(document).on('mouseout', 'ul:first-child li', function() {
    $(this).children('span').css('visibility', 'hidden');
  });

  $('input').keyup(function(event) {
    var textinput = $('input').val();
    if(event.keyCode == 13 && textinput != "") {
      $('ul:first-child').append('<li>' + textinput + '<span><div></div><div></div></span></li>');
      $('input[type=text]').val('');
    }
  });
});