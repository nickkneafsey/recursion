// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  // your code goes here
  if (obj===null){
    return "null";
  } else if(Array.isArray(obj)){
    var newArr=[];
    _.each(obj, function(item){
      newArr.push(stringifyJSON(item));
    });
    return "[" + newArr.join(",") + "]";
  } else if(typeof(obj)==="object"){
    var objArray=[];
    _.each(obj, function(item, key){
      var value=stringifyJSON(item)
      if (value !== null && key !=="undefined"){
        objArray.push("\""+key+"\":"+value);
      }
    })
    return "{" + objArray.join(",") + "}";
  } else if (typeof(obj) === "boolean" || typeof(obj) === "number"){
    return obj.toString();
  } else if (typeof(obj) === "function"){
    return null;
  } else if(typeof(obj) === "string"){
    return "\"" + obj + "\"";
  }
};
