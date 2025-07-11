// YOUR CODE BELOW


function billerBuilder(stateName){
    if(stateName === 'NY'){
        function calculates(num){
            return num * 1.03 * 1.04;
        }

        return calculates;
    }else if (stateName === 'NJ'){
        function calculates(num){
            return num * 1.05 * 1.06625;
        }

        return calculates;
    }
}   

let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100));