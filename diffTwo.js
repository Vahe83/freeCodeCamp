function diffArray(arr1, arr2)
{
    let result;
    for (let i = 0; i < arr2.length; i++)
    {   
        result = arr1.filter(function(value)
        {
            if (value == arr2[i])
            {
                result = arr2.splice(i, 1);
                result = arr1.splice(arr1.indexOf(value), 1); 
                i--;
            }


        });
    
    }
  
  
  return arr1.concat(arr2);
}