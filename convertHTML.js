function convertHTML(str)
{
   let i = 0;
   let regexp = /[&<>"']/g;
   let result= str.match(regexp);

   if (result)
   { 
       while (result[i])
       {
           switch (result[i])
           {
               case '&':
                   str = str.replace(result[i], "&amp;");
                   break;
               case '<':
                   str = str.replace(result[i], "&lt;");
                   break;   
               case '>':
                   str = str.replace(result[i], "&gt;");
                   break;
               case '"':
                   str = str.replace(result[i], "&quot;");
                   break;
               case "'":
                   str = str.replace(result[i], "&apos;"); 

           }
           i++;
       }
   }
       
  return str;
}
