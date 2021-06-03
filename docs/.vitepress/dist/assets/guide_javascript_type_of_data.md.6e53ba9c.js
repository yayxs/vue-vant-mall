import{o as t,c as e,a as r}from"./app.0c83b2b0.js";const l='{"title":"JavaScript的数据类型有哪些,存储有什么区别？","description":"","frontmatter":{"title":"JavaScript的数据类型有哪些,存储有什么区别？"},"headers":[{"level":2,"title":"数据类型的种类","slug":"数据类型的种类"},{"level":2,"title":"存储区别","slug":"存储区别"}],"relativePath":"guide/javascript/type_of_data.md","lastUpdated":1619439262872}',n={},a=r('<h1 id="javascript-的数据类型有哪些-存储有什么区别？"><a class="header-anchor" href="#javascript-的数据类型有哪些-存储有什么区别？" aria-hidden="true">#</a> JavaScript 的数据类型有哪些,存储有什么区别？</h1><p>在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）</p><h2 id="数据类型的种类"><a class="header-anchor" href="#数据类型的种类" aria-hidden="true">#</a> 数据类型的种类</h2><p>js 中的数据类型大体分为两大类：一是基本的数据类型（简单数据类型、原始类型）二是复杂数据类型</p><table><thead><tr><th style="text-align:center;">种类</th><th style="text-align:center;">类型</th><th style="text-align:center;">简述</th></tr></thead><tbody><tr><td style="text-align:center;">原始类型</td><td style="text-align:center;">Boolean(逻辑类型)</td><td style="text-align:center;">只有 true false</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Null</td><td style="text-align:center;">只有 null</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Undefined</td><td style="text-align:center;">变量提升默认 undefined</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Number</td><td style="text-align:center;">基于 754 标准 双精度 64 位 二进制</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">BigInt</td><td style="text-align:center;">2020 年初 Chrome Firefox Edge Node 都实现了</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">String</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Symbol</td><td style="text-align:center;">通常用作对象的 key</td></tr><tr><td style="text-align:center;">复杂类型</td><td style="text-align:center;">Object</td><td style="text-align:center;">一组属性的集合</td></tr></tbody></table><h2 id="存储区别"><a class="header-anchor" href="#存储区别" aria-hidden="true">#</a> 存储区别</h2><ul><li><p>6 种原始值：Undefined、Null、Boolean、Number、String 和 Symbol。保存原始值的变量是按值（by value）访问的，因为我们操作的就是<strong>存储在变量中的实际值</strong>。</p></li><li><p>引用值是保存在内存中的对象 JavaScript 不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。在操作对象时，实际上操作的是对该对象的引用（reference）而非实际的对象本身 保存引用值的变量是按引用（by reference）访问的</p></li></ul><p>所以<strong>通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据</strong>。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，<strong>堆空间很大，能存放很多大的数据</strong>，不过缺点是分配内存和回收内存都会占用一定的时间。</p>',8);n.render=function(r,l,n,d,i,s){return t(),e("div",null,[a])};export default n;export{l as __pageData};
