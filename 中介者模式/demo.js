/*
 * @Author: your name
 * @Date: 2019-10-25 10:47:51
 * @LastEditTime: 2019-10-25 11:07:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \设计模式\中介者模式\demo.js
 */

class Player {
    constructor(name) {
        this.name = name;

        this.playerMiddle = new PlayerMiddle();
        this.playerMiddle.add(name);
    }

    win() {
        this.playerMiddle.win(this.name);
    }

    lose() {
        this.playerMiddle.lose(this.name);
    }
}

// 中介者
class PlayerMiddle {
    constructor() {
        this.players = [];
        this.winArr = [];
        this.loseArr = [];
    }

    add(name) {
        this.players.push(name)
    }

    win(name) {
        this.winArr.push(name)
        if (this.winArr.length + this.loseArr.length === this.players.length) {
            this.show()
        }
    }

    lose(name) {
        this.loseArr.push(name)
        if (this.winArr.length + this.loseArr.length === this.players.length) {
            this.show()
        }
    }

    show() {
        for (let winner of this.winArr) {
            console.log(winner + '挑战成功;')
        }

        for (let loser of this.loseArr) {
            console.log(loser + '挑战失败;')
        }
    }
}

const a = new Player('A 选手')
const b = new Player('B 选手')
const c = new Player('C 选手')

a.win()
b.win()
c.lose()
