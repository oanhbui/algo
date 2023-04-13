var simplifyPath = function(path) {
    const pathSplit = path.split('/');
    const result = [];
    for (let i = 0; i < pathSplit.length; i++) {
        if (pathSplit[i] === '..' && result.length > 0) {
            result.pop()
        } else if (pathSplit[i] !== '' && pathSplit[i] !== '.' && pathSplit[i] !== '..') {
            result.push(pathSplit[i])
        }
    };
    console.log(result);
    return `/${result.join('/')}`
};