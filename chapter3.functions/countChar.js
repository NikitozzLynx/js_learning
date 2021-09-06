function countChar(string, char)
{
  var count = 0;
  for (i = 0; i < string.length; i++)
  {
    if (string.charAt(i) == char)
      count += 1
  };
  console.log(count)
}
