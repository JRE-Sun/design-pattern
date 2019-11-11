
class Event {
    constructor() {
        this.obj = {};
        this.cacheList = [];
    }

    // 订阅函数
    on(eventType, fn) {
        if (!this.obj[eventType]) {
            this.obj[eventType] = [];
        }

        this.obj[eventType].push(fn);

        for (let i = 0; i < this.cacheList.length; i++) {
            this.cacheList[i]();
        }
    }

    // 发布函数
    emit() {
        const args = arguments;
        const self = this;

        // console.log(args, self)

        function cache() {
            const eventType = Array.prototype.shift.call(args);
            const arr = self.obj[eventType];

            for (let i = 0; i < arr.length; i++) {
                arr[i].apply(arr[i], args);
            }
        }

        this.cacheList.push(cache);
    }
}


const ev = new Event()

// 异步情况 先发布 后订阅

ev.emit('click', 1)

ev.on('click', function (a) {
    console.log(a)
})


// bug -> 不能进行正常的订阅/发布

// ev.on('click', function (a) {
//     console.log(a)
// })

// ev.emit('click', 1)

