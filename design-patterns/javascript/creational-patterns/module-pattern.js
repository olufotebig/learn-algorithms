// Module pattern ECMAScript 5
// Module vs Constructor pattern - you mostly on need one 'instance' of a module

var module = function (){
    var privateVar = 'I am private';
    return {
        get: function(){
            console.log('getting with access to '+ privateVar);
            return {
                name: 'name from db'
            }
        },
        save: function(){
            console.log('saving with access to '+ privateVar);
        }
    }
}


// Revealing module pattern

var revealModule = function (){
    var privateVar = 'I am me';

    var get = function(){
        console.log('getting with access to'+ privateVar);
        return {
            name: 'name from db'
        }
    }

    var save = function(){
        console.log('saving with access to '+ privateVar);
    }

    return {
        get: get,
        save: save
    }
}

moduleI = module();
moduleI.get()
moduleI.save()
