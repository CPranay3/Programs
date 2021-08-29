
function reverses(str)
{
    var inputArray = str.split("");
        var result = new Array(inputArray.length);  
        newStr = inputArray.join("");
        console.log(newStr);

        let j = result.length;
        for (let i = 0; i < inputArray.length; i++) {

            if (inputArray[i] != ' ') {
                
                result[j] = inputArray[i];
                j--;
            }
        }
        console.log((result).join(""));
        
}
reverses(" string reverse  ");

