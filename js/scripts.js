var wordOrder = function(input) {

    var input_array = input.split(" ");
    //alert(input_array);
    var count_object = {};




    for(var i=0;i<input_array.length;i++){
        //var key = input_array.shift();
        var count = 1;
        var key = input_array[i];
        //alert(key);

        count_object[key]= count;
        alert(key);

        for(var j=1;j<input_array.length;j++){
            if(input_array[i] === input_array[j]){
                count++;
                count_object[key]= count;
                var index2 = input_array.indexOf(input_array[j]);
                var index1 = input_array.indexOf(input_array[i]);
                //alert(input_array[j]);

                //alert(input_array);
            }
            else{
                var other = [];
                other.push(input_array[j]);
                //alert(other);
                input_array = other;


            }
            // input_array.splice(index2,1);
            // input_array.splice(index1,1);
        }
    }

    return count_object;
};
