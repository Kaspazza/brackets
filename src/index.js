module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for(const letter of str){
        const currentConfig = bracketsConfig.find(conf => conf.includes(letter));
        const stackLen = stack.length;
        if(currentConfig === undefined){
            return false;
        } else if(currentConfig[0] === currentConfig[1]){
            if(stackLen === 0){
                stack.push(letter);
            } else if(stack[stackLen-1] === currentConfig[0]){
                stack.pop();
            } else {
                stack.push(letter);
            }
        } else if(currentConfig[0] === letter) {
            stack.push(letter);
        } else {
            if(stackLen === 0) {
                return false;
            } else if(stack[stackLen-1] === currentConfig[0]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
