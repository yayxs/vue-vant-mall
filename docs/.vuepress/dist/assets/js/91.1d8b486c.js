(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{443:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"手写实现-javascript-中的-new-操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写实现-javascript-中的-new-操作符"}},[t._v("#")]),t._v(" 手写实现 JavaScript 中的 New 操作符")]),t._v(" "),a("h2",{attrs:{id:"延伸的面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延伸的面试题"}},[t._v("#")]),t._v(" 延伸的面试题")]),t._v(" "),a("p",[t._v("根据"),a("code",[t._v("new操作符")]),t._v("相关的知识点一般会 延伸出以下的"),a("strong",[t._v("面试题")]),t._v(" ，面试官你是否有很多问号")]),t._v(" "),a("ul",[a("li",[t._v("问题一：new 之后都做了些什么？？")]),t._v(" "),a("li",[t._v("问题二：能否手写 new 操作符原理？？")]),t._v(" "),a("li",[t._v("问题三：通过 new 的方式创建对象和通过字面量创建有什么区别")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdn 关于 new 运算符关键字的描述"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("创建一个空的简单 JavaScript 对象（即"),a("code",[t._v("{}")]),t._v("）；")]),t._v(" "),a("li",[t._v("链接该对象（即设置该对象的构造函数）到另一个对象 ；")]),t._v(" "),a("li",[t._v("将步骤 1 新创建的对象作为"),a("code",[t._v("this")]),t._v("的上下文 ；")]),t._v(" "),a("li",[t._v("如果该函数没有返回对象，则返回"),a("code",[t._v("this")]),t._v("。")])])]),t._v(" "),a("p",[t._v("以上 4 条是"),a("code",[t._v("MDN")]),t._v(" 上关于 new 操作符（或者说关键字）的面试，简单的来体验下利用构造函数来"),a("code",[t._v("new")]),t._v(" 一个对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后在**构造函数添加原型方法**")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yayxs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// yayxs")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// yayxs")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象p（实例）的原型属性指向构造函数的原型，")]),t._v("\n")])])]),a("p",[t._v("既然我们通过自定义，其使用的方式大体跟"),a("code",[t._v("new")]),t._v(" 是一样的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ------ 使用new的时候")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myNew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yayxs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其返回的结果是一个对象")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ---------")]),t._v("\n")])])]),a("h2",{attrs:{id:"第一版的-mynew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一版的-mynew"}},[t._v("#")]),t._v(" 第一版的 myNew")]),t._v(" "),a("p",[t._v("大体思路是声明一个对象，取出当前的构造函数，以及参数，让新对象的原型属性指向构造函数的原型，然后调用构造函数，传入对象的参数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myNew")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"第二版的mynew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二版的mynew"}},[t._v("#")]),t._v(" 第二版的myNew")]),t._v(" "),a("p",[t._v("经过上文的简单案例我们可以得知，")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("new")]),t._v(" 一个构造函数得到一个对象，它的原型属性（也就是** proto **）与该构造函数的原型是全等")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("new")]),t._v(" 通过构造函数 "),a("code",[t._v("Persion")]),t._v(" 创建出来的实例可以访问到构造函数中的属性,就像这样")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xiaoMing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小明")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("言简意赅：new 出来的实例对象通过原型链和构造函数联系起来")])])]),t._v(" "),a("p",[a("strong",[t._v("构造函数说白了也是一个函数，那是函数就可以有返回值")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   return 1; // 返回内部新创建的对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   return "1"; // 返回内部新创建的对象')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return null; // 返回内部新创建的对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   return undefined; // 返回内部新创建的对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   return {}; // {} // 直接返回")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接返回")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [1] // 直接返回")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"李四"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("有了给构造函数返回一个值得想法，那就通过不同的"),a("code",[t._v("数据类型")]),t._v(" 进行测试得出结论")]),t._v(" "),a("ul",[a("li",[t._v("不同的数据类型返回的效果是不一样的，像数字 1 字符串”1“ ，返回的依然是内部创建的对象")]),t._v(" "),a("li",[a("strong",[t._v("那如果返回一个对象（{}）或者说数组（[]）")]),t._v(" 都会直接返回回去")])]),t._v(" "),a("h4",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[t._v("也就是说，构造函数一般不需要"),a("code",[t._v("return")])]),t._v(" "),a("ul",[a("li",[t._v("返回一般的数据类型吧，不起作用")]),t._v(" "),a("li",[t._v("返回对象吧， new 的意义又何在呢")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myNew")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"手写一个自己的-mynew-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写一个自己的-mynew-小结"}},[t._v("#")]),t._v(" 手写一个自己的 myNew 小结")]),t._v(" "),a("p",[t._v("如果自己实现一个 new 的话，首先要满足它的几点效果")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("一个构造函数会返回一个对象，那函数里就应该有对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("并将其"),a("code",[t._v("__proto__")]),t._v("属性指向构造函数的"),a("code",[t._v("prototype")]),t._v("属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("调用构造函数，绑定 this")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("返回原始值需要忽略，返回对象需要正常处理")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("res "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"箭头函数使用new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数使用new"}},[t._v("#")]),t._v(" 箭头函数使用"),a("code",[t._v("new")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError: Foo is not a constructor")]),t._v("\n")])])]),a("ul",[a("li",[t._v("不可以当作构造函数，也就是说，不可以使用"),a("code",[t._v("new")]),t._v("命令，否则会抛出一个错误")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("this")]),t._v("指向的固定化，并不是因为箭头函数内部有绑定"),a("code",[t._v("this")]),t._v("的机制，实际原因是箭头函数根本没有自己的"),a("code",[t._v("this")]),t._v("，导致内部的"),a("code",[t._v("this")]),t._v("就是外层代码块的"),a("code",[t._v("this")]),t._v("。正是因为它没有"),a("code",[t._v("this")]),t._v("，所以也就不能用作构造函数。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);