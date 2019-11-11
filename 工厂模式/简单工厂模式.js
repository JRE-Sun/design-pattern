function User(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
}

function Factory(name, age, career) {
    let work;
    switch (career) {
        case 'coder': {
            work = ['写代码', '写系分', '修bug']
            break;
        }
        case 'product-manager': {
            work = ['订会议室', '写PRD', '催更']
            break;
        }
        case 'boss': {
            work = ['喝茶', '看报', '见客户']
            break;
        }
    }
    return new User(name, age, career, work)
}

const wang = new Factory('wang', 50, 'boss');
const sun = new Factory('sun', 25, 'coder');
const li = new Factory('li', 30, 'product-manager');

console.log(wang)
console.log(sun)
console.log(li)

