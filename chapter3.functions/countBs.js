function countBs(string)
{
  var count = 0;
  for (i = 0; i < string.length; i++)
  {
    if (string.charAt(i) == "B")
      count += 1
  };
  console.log(count)
}
