var n = prompt("Введи чётное число, чтобы получить шахматную доску заданного размера","Туть..");
if (isNaN(n))
    alert("Это вообще не число");
else if (n%2 != 0)
    alert("Число не чётное!")
else
    {
        for (var i = 0; i < n/2; i++)
        {
            var a = "";
            for (var j = 0; j < n; j++)
                a = a + "# ";
            console.log(a);
            var b = " ";
            b = b + a
            console.log(b)
        }
    }
