
     console.log(a) // a == undefined

     function parentScope(){

        var a = 0;

        function firstScope(){

            console.log(a) // a == 0 

            a = 1;

            console.log(a) // a == 1

        }

        function secondScope(){

            console.log(a) // a == 0 

        }

     }

     console.log(a) // a == undefined