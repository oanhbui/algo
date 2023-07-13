//leetcode - Subdomain visit count - Medium

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

var domainToSubdomains = function(domain) {
    const result = [domain];
    let subdomain;
    for (let i = 1; i < domain.length; i++) {
        if (domain[i] === ".") {
            subdomain = domain.slice(i + 1);
            result.push(subdomain)
        }
    }
    return result
} 
var subdomainVisits = function(cpdomains) {
    const lookup = new Map();
    for (const pair of cpdomains) {
        const [count, domain] = pair.split(" ");
        for (const subdomain of domainToSubdomains(domain)) {
            if (lookup.has(subdomain)) {
                lookup.set(subdomain, lookup.get(subdomain) + Number(count))
            } else {
                lookup.set(subdomain, Number(count))
            }
        }
    }
    //const result = []
    //for (const [key, value] of lookup.entries()) {
    //    result.push(`${value} ${key}`)
    //}
    return [...lookup.entries()].map(([key, value]) => `${value} ${key}`)
    //return result;
};