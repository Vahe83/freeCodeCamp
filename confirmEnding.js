function confirmEnding(str, target)
{
  let res = str.split(" ");

  let newStr = res[res.length-1];

  var subString = newStr.substr(newStr.length - target.length);

  return newStr.substr(newStr.length - target.length) == target;
 
}
