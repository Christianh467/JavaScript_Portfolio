function check(array) {
    var s = new Set;                                //sets are objects with unique keys/values, can't duplicate
    
    array.forEach(v => s.delete(v) || s.add(v));    //delete the value from set if present, if not add value to set

    const myArray = Array.from(s);                  //put objects values into array if more than one value still present in iterator set
    
    return s.values().next().value;                 //values() shows values in iterator set so far {5, 7}
}                                                   //.next() selects the next object {value: 5, done: false}
                                                    //.value return this iterator objects value property
