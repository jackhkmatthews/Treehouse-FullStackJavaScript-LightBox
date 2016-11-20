//when clicking on image goes to dead end
//solution: create an overlay with the large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

//add image to overlay

$overlay.append($image);

//add caption to overlay

$overlay.append($caption);


//add an overlay

$("body").append($overlay);
  

//caputre the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  
  //update image in overlay to linked image
  $image.attr("src", imageLocation);
  
  //show the overlay
  $overlay.show();
  
  //get childs alt atribute and set caption (i.e. the image is child to the clicked link, the image has the alt attribute
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
})

//When overlay is clicked
$overlay.click(function(){
  
  //3.1 hide the overlay
  $overlay.hide();
});
