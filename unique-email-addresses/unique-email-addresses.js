//https://leetcode.com/problems/unique-email-addresses/


var convertToOrigin = function(s) {
    let [local, domain] = s.split('@');
    local = local.replaceAll('.', '')
    const plusIndex = local.indexOf('+');
    if (plusIndex !== -1) { 
        local = local.substring(0, plusIndex)
    };
    return `${local}@${domain}`
};
var numUniqueEmails = function(emails) {
    const seen = new Set();
    for (let i = 0; i < emails.length; i++) {
        let converted = convertToOrigin(emails[i])
        if (!seen.has(converted)) {
            seen.add(converted)
        }
    };
    return seen.size
};