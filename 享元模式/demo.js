/*
 * @Author: your name
 * @Date: 2019-10-26 13:21:26
 * @LastEditTime: 2019-10-26 13:55:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \设计模式\享元模式\demo.js
 */

// 题目：某商家有 50 种男款内衣和 50 种款女款内衣, 要展示它们！

class Model {
    constructor(gender) {
        this.gender = gender
        // this.underwear = ''
    }
    
    /* 方法一 */
    // takePhoto() {
    //     console.log(`${this.gender}穿着${this.underwear}`)
    // }
    
   /* 方法二 */
    takePhoto(i) {
        console.log(`${this.gender}穿着${i}款衣服`)
    }


}

const maleModel = new Model('male')
const femaleModel = new Model('female')

for (let i = 1; i < 51; i++) {
    // maleModel.underwear = `第${i}款衣服`
    // maleModel.takePhoto()

    maleModel.takePhoto(i)
}

for (let i = 1; i < 51; i++) {
    // femaleModel.underwear = `第${i}款衣服`
    // femaleModel.takePhoto()

    maleModel.takePhoto(i)
}
