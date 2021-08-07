/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let ret = [];
    let map = {};
    cpdomains.forEach((item) => {
        let [port, domain] = item.split(' ');
        let array = domain.split('.');
        let len = array.length;
        let i = 0;
        while (i < len) {
            addParamToMap(map, array.slice(i, len).join('.'), port);
            i++;
        }
    });
    Object.keys(map).forEach((item) => {
        ret.push(`${map[item]} ${item}`);
    });
    return ret;
};

var addParamToMap = function(map, key, val) {
    if (map.hasOwnProperty(key)) {
        map[key] += +val;
    } else {
        map[key] = +val;
    }
}