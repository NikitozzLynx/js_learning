function isEven(a)
{
  while (a != 1 & a != 0)
  {
    a = Math.abs(a-2);
  }
  if (a == 0) return true;
  if (a == 1) return false;
}
