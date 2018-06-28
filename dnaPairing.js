function pairElement(str)
{
    let arrStr = str.split(''),
        arrLen = arrStr.length,
        midArr,
        finalArr = [];
       
   for (let i = 0; i < arrLen; i++)
   {
       midArr = [];
       midArr.push(arrStr[i]);        
       switch (arrStr[i])
        {
            case 'A':
                midArr.push('T');
                break;
            case 'T':
                midArr.push('A');
                break;
            case 'C':
                midArr.push('G');
                break;
            case 'G':
                midArr.push('C');
                break;
        }
       finalArr.push(midArr);
   }
       
   return finalArr;
}