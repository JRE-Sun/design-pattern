/*
 * @Author: your name
 * @Date: 2019-10-25 12:29:30
 * @LastEditTime: 2019-10-25 21:36:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \设计模式\责任链模式\demo.js
 */

// 业务代码
const order500 = (orderType, pay, stock) => {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购, 得到 100 元优惠券')
    } else {
        return 'nextSuccess'
    }
}

const order200 = (orderType, pay, stock) => {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购, 得到 50 元优惠券')
    } else {
        return 'nextSuccess'
    }
}

const orderCommon = (orderType, pay, stock) => {
    if (orderType === 3 && stock > 0) {
        console.log('普通购买, 无优惠券')
    } else {
        console.log('库存不够, 无法购买')
    }
}

// 链路代码
Function.prototype.after = function (fn) {
    const self = this
    
    return function () {
        const result = self.apply(self, arguments)
        
        if (result === 'nextSuccess') {
            return fn.apply(self, arguments)
        }
    }
}

const order = order500.after(order200).after(orderCommon)

// order(1, true, 500) // 500 元定金预购, 得到 100 元优惠券
// order(2, true, 500) // 200 元定金预购, 得到 50 元优惠券
order(3, true, 500) // 普通购买, 无优惠券



console.log(order500.__proto__) // { [Function] after: [Function] }

// order500 的 __proto__ 指向 Function prototype 
// Function prototype 上挂载了 after