// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return "null";
  }
  else if (Array.isArray(obj)) {
    var newArr=[];
    for (var i=0; i < obj.length; i++){
        newArr.push(stringifyJSON(obj[i]));
    }
    return "[" + newArr.join(",") + "]";
  }
  else if (typeof(obj) === "object") {
    var objectArray = [];
    for (var item in obj){
      var value=stringifyJSON(obj[item]);
      if (value !== null && item!=="undefined"){
        objectArray.push("\""+item+"\":"+ value);
      }
    }
    return "{" + objectArray.join(",") + "}";
  }
  else if (typeof(obj) === "number" || typeof(obj) === "boolean") {
    return obj.toString();
  }
  else if (typeof(obj) === "function") {
    return null;
  }
  else if (typeof(obj) === "string") {
    return "\"" + obj + "\"";
  }
};
