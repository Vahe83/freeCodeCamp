function addTogether()
{
   let k = arguments[0];
   
   if (arguments.length == 2)
   {
     if (typeof(arguments[1]) == "number" && typeof(k) == "number")
         return k + arguments[1];
     else
         return undefined;
   }
   else
   {
     if (typeof(k) == "number" ) 
     {
       function func()
       {
         if (typeof(arguments[0]) == "number")
           return arguments[0] + k;
         else
           return undefined;  
       }
       return func; 
     }
     else
        return undefined;
        
    }
   
}
