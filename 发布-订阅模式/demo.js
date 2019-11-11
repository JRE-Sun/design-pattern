
class Event {
    constructor() {
        this.obj = {};
    }

    // 订阅函数
    on(eventType, fn) {
        if (!this.obj[eventType]) {
            this.obj[eventType] = [];
        }

        this.obj[eventType].push(fn);
    }

    // 发布函数
    emit() {

        const eventType = Array.prototype.shift.call(arguments);
        const arr = this.obj[eventType];

       // console.log(arguments) // 此时的 arguments 被切去了第一个参数
       // console.log(arr[0]) // Function

        for (let i = 0; i < arr.length; i++) {
            arr[i].apply(arr[i], arguments);
        }
    }
}

const ev = new Event()

// 订阅
ev.on('click', function (a) {
    console.log(a)
})

ev.on('touch', function (a) {
    console.log(a + 1)
})


// 发布
ev.emit('click', 1)
ev.emit('touch', 1)
