function orbitalPeriod(arr)
{
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var n = arr.length;
    var altRad, i, T;
    var str = "";

    for (i = 0; i < n; i++)
    {
        altRad = Math.round(earthRadius + arr[i].avgAlt);

        T = Math.round(Math.sqrt(4 * Math.pow(Math.PI, 2) * Math.pow(altRad, 3) / GM));

        str= JSON.stringify(arr[i]);
        str = str.replace("avgAlt","orbitalPeriod");
        arr[i] = JSON.parse(str);   
        arr[i].orbitalPeriod = T;
    }

    return arr;
}
    