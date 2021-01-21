class People {
    name="";
    eventList=[];
    constructor(name) {
        this.name = name
    }

    // TODO: 请在此处完善代码
    on(eventName,callback){
        this.eventList.push({eventName,callback})
    }
    emit(eventName,arg){
        this.eventList.forEach(item=>{
            if(item.eventName==eventName){
                item.callback.call(this,arg)
            }
        })
    }
    off(eventName,callback){
        this.eventList.forEach((item,index)=>{
            if(item.eventName==eventName && item.callback.name == callback.name ){
                this.eventList.splice(index, 1);
            }
        })
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`)
    }
}


/* 以下为测试代码 */
const say1 = (greeting) => {
    console.log(`${greeting}, nice meeting you.`)
}

const say2 = (greeting) => {
    console.log(`${greeting}, nice meeting you, too.`)
}

const jerry = new People('Jerry')
jerry.sayHi()
// => 输出：'Hi, I am Jerry'

jerry.on('greeting', say1)
jerry.on('greeting', say2)

jerry.emit('greeting', 'Hi')
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off('greeting', say1)
jerry.emit('greeting', 'Hi')
// => 只输出：'Hi, nice meeting you, too'
