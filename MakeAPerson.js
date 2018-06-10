var Person = function(firstAndLast)
{

    var fullName = firstAndLast;

    this.getFirstName = function()
    {
        return fullName.slice(0, fullName.indexOf(" "));
    }

    this.getLastName = function()
    {
       return fullName.slice(fullName.indexOf(" ") + 1);
    }

    this.getFullName = function()
    {
      return fullName;
    }



    this.setFirstName = function(name)
    {
        fullName = name + " " + fullName.slice(fullName.indexOf(" ")  + 1);
    }

    this.setLastName = function(name)
    {
        fullName = fullName.slice(0, fullName.indexOf(" ")) + " " + name;
    }

    this.setFullName = function(name)
    {
        fullName = name;
    }


}
