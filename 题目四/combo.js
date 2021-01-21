const combo = (...handler) => {

    // TODO: 请在此处完善代码

    let result= function (arg) {
        let currentValue = null;
        (function  (handler) {
             for(let i=handler.length-1;i>-1;i--){
                 if(i == handler.length-1){
                     currentValue = handler[i](arg);
                 }else{
                     currentValue =  handler[i](currentValue);
                 }
             }
             console.log(currentValue)
        })(handler)
    }
    return result;
}

/* 以下为测试代码 */
const addOne = (a) => a + 1
const multiTwo = (a) => a * 2
const divThree = (a) => a / 3
const toString = (a) => a + ''
const split = (a) => a.split('')

split(toString(addOne(multiTwo(divThree(666)))))
// => ["4", "4", "5"]
const testForCombo = combo(split, toString, addOne, multiTwo, divThree)
 testForCombo(666)
// => ["4", "4", "5"]
