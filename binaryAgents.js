function binaryAgent(str)
{
  let strLen = str.length;
  let s, j, i = 0;
  let finalStr = "";
   
  while (i < strLen)
  {
       s = 0; 
       for (j = 8; j >= 1; j--)
        {
            if (str.charAt(i).search("1") == 0)
                s += Math.pow(2, j - 1);
            i++;
        }

        finalStr = finalStr.concat(String.fromCharCode(s));
        i++;

  }
   return finalStr;
}