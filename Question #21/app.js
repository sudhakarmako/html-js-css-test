function isContainsVowel(inputString)
{
    let vowels = /[aeiou]/gi;
    let result = inputString.match(vowels);
    if( result != null )
        return true;
    else
        return false;
}
function isContainsConsonant(inputString,consonant)
{
    let result = inputString.indexOf(consonant);
    if( result != -1 )
        return true;
    else
        return false;
}
var inputString_Contains_Vowel = isContainsVowel('test');
var inputString_Contains_Consonant = isContainsConsonant('Hey','lol');
console.log(inputString_Contains_Vowel);
console.log(inputString_Contains_Consonant);