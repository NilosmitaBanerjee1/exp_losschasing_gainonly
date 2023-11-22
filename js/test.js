// function to return the mouse position
function get_mouse_pos(e) {

  var tracking_ids = ["info-box-top-left", "info-box-top-right",
                      "info-box-bottom-left", "info-box-bottom-right",
                      "choice-button-top", "choice-button-bottom",
                      "choice-button-left", "choice-button-right"];

  // get mouse position
  e = e || window.event;

  var pageX = e.pageX;
  var pageY = e.pageY;

  // IE 8
  if (pageX === undefined) {
    pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  console.log(pageX, pageY);

  // get the elements the mouse currently hovers on
  var elems = document.elementsFromPoint(pageX, pageY);

  // get the ids of all elements, and remove empty ids
  var ids = elems.map(x => x.id).filter(id => id.length > 0);

  // only include the ids for the four information boxes
  ids = ids.filter(id => tracking_ids.includes(id));

  console.log(ids);

}

document.addEventListener("mousemove", get_mouse_pos);


// function to get mouse click
function get_mouse_click(e) {

  var tracking_ids = ["choice-button-top", "choice-button-bottom",
                      "choice-button-left", "choice-button-right"];

  // get mouse position
  e = e || window.event;

  var pageX = e.pageX;
  var pageY = e.pageY;

  // IE 8
  if (pageX === undefined) {
    pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  console.log(pageX, pageY);

  // get the elements the mouse currently hovers on
  var elems = document.elementsFromPoint(pageX, pageY);

  // get the ids of all elements, and remove empty ids
  var ids = elems.map(x => x.id).filter(id => id.length > 0);

  // only include the ids for the four information boxes
  ids = ids.filter(id => tracking_ids.includes(id));

  console.log(ids);

}


document.addEventListener("click", get_mouse_click);
