<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>

        //callin returning a whole function, then setting that to a var, then using that var to callthe function
        function counter(){
    var count = 0;

    function childScope(){
        var childContent = 'child';
        console.log('counting');
        return ++count;         // ++ before the var does operation before it gets returned.
    }

    return childScope;
    }

    x = counter();
    console.log(x());
    console.log(x());
    console.log(x());
    console.log(x());
    console.log(x());
    console.log(x());
    console.log(x());
    console.log(x());
    console.log(x());
    </script>
</body>
</html>


