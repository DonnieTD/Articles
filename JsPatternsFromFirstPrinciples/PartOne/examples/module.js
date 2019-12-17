
var myModule = (function() {
    var _publicVar = 'can touch this';
    var _privateMethod = 'can't touch this';
  
    var publicFunc = function() {
        console.log('Worked Two');
    }
  
    var privateFunc = function() {
        console.log('!');
    }
  
    return {
     _publicVar,
      publicFunc
    };
  
  }());
  
  var myModuleTwo = (function() {
    var _publicVar = 'can touch this';
    var _privateMethod = 'can't touch this';
  
    var publicFunc = function() {
        console.log('Worked Two');
    }
  
    var privateFunc = function() {
        console.log('!');
    }
  
    return {
     _publicVar,
      publicFunc
    };
  
  }());
       
  myModule.publicFunc(); // Worked One
  myModuleTwo .publicFunc(); // Worked Two
  