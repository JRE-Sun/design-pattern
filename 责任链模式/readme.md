<!--
 * @Author: your name
 * @Date: 2019-10-25 16:05:16
 * @LastEditTime: 2019-10-25 16:54:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \设计模式\责任链模式\readme.md
 -->

## 箭头函数的注意事项

1. 函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象。
2. 不可以当作构造函数。也就是说，不可以使用new命令，否则会抛出一个错误。
3. 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替。
4. 不可以使用yield命令，因此箭头函数不能用作Generator函数。

``` 
rest参数, 代替arguments对象

function student (name){
    const NAME = name;

    return (...age){
        const AGE = age;
        console.log(NAME, AGE); // bob [ 20 ]
    }
}

test('bob')(20);
```

``` 
箭头函数内的 arguments 对象是定义所在的对象

function test(name) {

    return (age) => {
        console.log(arguments) // [Arguments] { '0': 'bob' }
    }
}

test('bob')('10');
```

