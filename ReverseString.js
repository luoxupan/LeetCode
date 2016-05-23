/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    
    // console.log(s.split('').reverse().join(''));//这样也可以反转
    var str = '';
    for(var i=s.length-1; i>=0; --i) {

		// console.log(s[i]);
		str += s[i];
	}
// 	console.log(str);
    return str;
};