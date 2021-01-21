const deepGet = (obj, prop) => {
    // TODO: 在此处完善代码
    let currentValue =obj;
    let level =0;
    let readObject=function (obj,key) {
         if(key.includes("]")){
             let index = 0;
             let reg = new RegExp(/^\w*|\d*/g)
             let keyArr = key.match(reg)
             key = keyArr[0];
             index = keyArr[2];
             if(Array.isArray(obj[key])){
                 currentValue = obj[key][index];
             }
         }else{
             if(obj[key] !="undefined"){
                 currentValue = obj[key];
             }else {
                 currentValue =undefined
             }
         }
    };
    let keys = prop.split(".");
    keys.forEach((key,index)=>{
        if(currentValue){
            readObject(currentValue,key)
        }
        if(index==keys.length-1){
            console.log(currentValue)
        }
    })



}

/** 以下为测试代码 */
deepGet({
    school: {
        student: { name: 'Tomy' },
    },
}, 'school.student.name') // => 'Tomy'

deepGet({
    school: {
        students: [
            { name: 'Tomy' },
            { name: 'Lucy' },
        ],
    }
}, 'school.students[1].name') // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined
