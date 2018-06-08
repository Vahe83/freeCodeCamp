function almostIncreasingSequence(seq)
{
  let count = 0;
    
  for (let i=1; i < seq.length; i++)
      if(seq[i] <= seq[i-1])
      {
        count++;
        if (count > 1)
            return false;

        if (seq[i] <= seq[i-2] && seq[i+1] <= seq[i-1])
            return false;
      }
  
  return true;
}   
     
    