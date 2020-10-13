module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    indent: [2, 2], // 两个空格的缩进
    quotes: [2, 'single'], // js必须使用单引号
    'no-unused-vars': [1], // 声明了变量但是没有使用检测
    'no-var': 2, // 禁用var，用let和const代替
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
    eqeqeq: 1, // 是否使用全等于
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ], // 禁止更改传入参数的值
    'no-return-assign': 1, // return 语句中不能有赋值表达式
    'no-underscore-dangle': 1, // 标识符不能以_开头或结尾
    semi: ['error', 'never'], // JS语句结尾禁止使用分号
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ], // 定义函数括号前需保留空格
    'spaced-comment': [1, 'always', { exceptions: ['-', '*', '+'] }], // 注释风格保留空格
    'space-unary-ops': [1, { words: true, nonwords: false }], // 一元运算符的前/后要不要加空格
    'no-lonely-if': 2, // 禁止else语句内只有if语句
    'no-else-return': 2, //如果if语句里面有return,后面不能跟else语句
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'object-shorthand': [1, 'always'], // 强制对象字面量缩写语法
    'arrow-spacing': 2, // 箭头函数前/后括号
    'no-extra-parens': 2, //禁止非必要的括号
    'no-implicit-coercion': 1, //禁止隐式转换
    'no-nested-ternary': 0, //禁止使用嵌套的三目运算
    'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;简单的判断用三元表达式代替
    'no-redeclare': 2, //禁止重复声明变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0 // 开发期间允许调试器
  }
}
