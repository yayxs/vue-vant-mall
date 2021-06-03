import{o as t,c as e,b as a,d as l}from"./app.0c83b2b0.js";const r='{"title":"如何提升 JavaScript 变量的存储性能？","description":"","frontmatter":{"title":"如何提升 JavaScript 变量的存储性能？"},"headers":[{"level":2,"title":"声明变量使用let const","slug":"声明变量使用let-const"}],"relativePath":"guide/javascript/performance.md","lastUpdated":1615877423025}',n={},s=a("p",null,"如果数据不再必要，那么把它设置为null，从而释放其引用这也可以叫作解除引用",-1),c=a("h2",{id:"声明变量使用let-const"},[a("a",{class:"header-anchor",href:"#声明变量使用let-const","aria-hidden":"true"},"#"),l(" 声明变量使用let const")],-1),o=a("p",null,"ES6增加这两个关键字不仅有助于改善代码风格，而且同样有助于改进垃圾回收的过程。因为const和let都以块（而非函数）为作用域，所以相比于使用var，使用这两个新关键字可能会更早地让垃圾回收程序介入，尽早回收应该回收的内存。在块作用域比函数作用域更早终止的情况下，这就有可能发生。",-1);n.render=function(a,l,r,n,i,d){return t(),e("div",null,[s,c,o])};export default n;export{r as __pageData};