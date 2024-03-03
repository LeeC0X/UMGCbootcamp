//1. When the Dom is ready,console.log the message "let's get ready to party with jQuery!"

$(document).ready(function () {
  console.log("let's get ready to party with jQuery!");

  //2. Give all images indide of article tag the class of image-center(this class is defined indie of the style tag in the head)
  $("article img").addClass("image-center");

  //3. Remove the last paragraph in the article
  $("artucle p:last-child").remove();

  //4. Set the font size of the tille to be random pixel size from 0 to 100.
  $("#title").css("font-size", Math.random() * 100);

  //5. Add an item to the list; it can say whatever you want
  $("ol").append("<li>I'm hungry </li>");

  //6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
  $("aside")
    .empty()
    .append($("<p>", { text: "Sorry about that silly list  :( " }));

  //7. when you change the numbers in the three inputs on the bottom, the background color of the body should chnage to match whatever the three values in the inputs are.

  $("input").on("keyup change blur", function () {
    let red = $("input").eq(0).val();
    let blue = $("input").eq(1).val();
    let green = $("input").eq(2).val();
    $("body").css(
      "background-color",
      "rgb(" + red + "," + green + "," + blue + ")"
    );
  });

  //8. Add an event listener so that when you click on the image, it is removed from the DOM
  /*
$('img').on('click',function(){
    $(this).remove();
})
*/
  $("img").on("click", function (e) {
    $(e.target).remove();
  });
});
