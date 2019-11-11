/*
 * @Author: your name
 * @Date: 2019-10-25 15:53:55
 * @LastEditTime: 2019-10-25 17:18:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \设计模式\责任链模式\test.js
 */

// 严格模式
// this指向 严格模式 this -> undefined 非严格模式 this -> global
// 箭头函数内的 this 是根据外层（函数或者全局）作用域（词法作用域）来决定this
const name = 'window'

const person1 = {
    name: 'person1',

    show1: function () {
        console.log(this.name)
    },

    show2: () => console.log(this.name),

    show3: function () {
        return function () {
            console.log(this.name)
        }
    },

    show4: function () {
        return () => console.log(this.name)
    },

    show5: () => {
        return function () { console.log(this.name) }
    },

    show6: () => {
        return () => { console.log(this.name) }
    }
}

const person2 = { name: 'person2' }

person1.show1() // person1 隐式绑定
person1.show1.call(person2) // person2 显示绑定

person1.show2() // undefined  箭头函数绑定，this指向外层作用域，即全局作用域
person1.show2.call(person2) // undefined 

person1.show3()() // undefined 默认绑定，这是一个高阶函数，调用者是window
person1.show3().call(person2) // person2 显示绑定
person1.show3.call(person2)() // undefined 默认绑定，调用者是window

person1.show4()() // person1 箭头函数绑定，this指向外层作用域，即person1函数作用域
person1.show4().call(person2) // person1 箭头函数绑定 this指向外层作用域，即person1函数作用域
person1.show4.call(person2)() // person2

person1.show5()() // undefined
person1.show5().call(person2) // person2 隐式绑定
person1.show5.call(person2)() // undefined

person1.show6()() // undefined
person1.show6().call(person2) // undefined
person1.show6.call(person2)() // undefined