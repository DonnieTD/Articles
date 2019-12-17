

    function lexicalEnv() {

        var data = 'Mozilla';
 
            function functionWithReferenceToData() {
 
               alert(data );
 
            }
 
        return functionWithReferenceToData;
 
     }
 
     var Closure = lexicalEnv();
 
     Closure(); // Alerts 'Mozilla' which demonstrates access to the data variable 
 
                // in the lexicalEnv function. 
 