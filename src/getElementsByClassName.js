// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList
//document.body --Returns the <body> or <frameset> node of the current document, or null if no such element exists.
//element.childNodes --The childNodes property returns an array of child nodes inside of a specified parent element.
//element.classList --The Element.classList read-only property returns a live DOMTokenList of the class attributes of the element.



var getElementsByClassName = function(className){
  // your code here
  var elementArray=[];
  var classSearch=function(element){
  	var classes=element.classList;
  	if (classes!==undefined){
  		for (var i=0; i<classes.length; i++){
  			if (classes[i]===className){
  				elementArray.push(element);
  			}
  		}
  	}
  	var children = element.childNodes;
  	if(children!==undefined){
  		for (var j=0; j<children.length; j++){
  			classSearch(children[j]);
  		}
  	}
  }
  classSearch(document.body);
  return elementArray;
};
