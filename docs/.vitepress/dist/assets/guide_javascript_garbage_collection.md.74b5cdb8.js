import{o as a,c as i,a as l}from"./app.0c83b2b0.js";const e='{"title":"谈谈JS中的垃圾回收机制 JavaScript 的数据是如何回收的","description":"","frontmatter":{"title":"谈谈JS中的垃圾回收机制 JavaScript 的数据是如何回收的"},"headers":[{"level":2,"title":"语言的垃圾回收策略","slug":"语言的垃圾回收策略"},{"level":2,"title":"标记清理","slug":"标记清理"},{"level":2,"title":"引用计数","slug":"引用计数"}],"relativePath":"guide/javascript/garbage_collection.md","lastUpdated":1619060787529}',r={},t=l('<h2 id="语言的垃圾回收策略"><a class="header-anchor" href="#语言的垃圾回收策略" aria-hidden="true">#</a> 语言的垃圾回收策略</h2><ul><li><p>C/C++ 就是使用手动回收策略，何时分配内存、何时销毁内存都是由代码控制的</p></li><li><p>JS 不同于 C 和 C++ 自动管理内存分配和闲置资源 的回收：确定哪个变量没有再被使用，然后释放占用的内存</p></li><li><p>周期性 每隔一定的时间自动运行 周而复始 从一而终</p></li><li><p>算法 简单的靠算法 不能够准备正确的定位某块内存是否正在使用，存在一定的不可预判性</p></li></ul><p>函数中的局部变量在使用之后就不再需要了，一般来说可以正常的释放掉，但是不是唯一的，需要内部去跟踪标记，大致有两种方式</p><h2 id="标记清理"><a class="header-anchor" href="#标记清理" aria-hidden="true">#</a> 标记清理</h2><p>当变量进入上下文标记一下 理论上可能会被用到 ，离开的时候再标记一下，在任何的上下文中都找不到他们了就开始清理</p><h2 id="引用计数"><a class="header-anchor" href="#引用计数" aria-hidden="true">#</a> 引用计数</h2><p>记录一个变量被引用的次数，引用数+1 当当前的引用数是 0 的时候，就是访问不到这个变量了，存在循环引用的问题</p><ul><li>离开作用域的值会被自动标记为可回收，然后在垃圾回收期间被删除。</li><li>主流的垃圾回收算法是标记清理，即先给当前不使用的值加上标记，再回来回收它们的内存。</li><li>引用计数是另一种垃圾回收策略，需要记录值被引用了多少次。JavaScript 引擎不再使用这种算法，但某些旧版本的 IE-仍然会受这种算法的影响，原因是 JavaScript 会访问非原生 JavaScript 对象（如 DOM 元素）。</li><li>引用计数在代码中存在循环引用时会出现问题。</li><li>解除变量的引用不仅可以消除循环引用，而且对垃圾回收也有帮助。为促进内存回收，全局对象、全局对象的属性和循环引用都应该在不需要时解除引用。</li></ul>',8);r.render=function(l,e,r,p,d,h){return a(),i("div",null,[t])};export default r;export{e as __pageData};
