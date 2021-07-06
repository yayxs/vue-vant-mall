import{o as n,c as s,a}from"./app.78bcef79.js";const p='{"title":"谈谈作用域与作用域链的理解，如何理解?","description":"","frontmatter":{"title":"谈谈作用域与作用域链的理解，如何理解?"},"headers":[{"level":2,"title":"所谓的作用域","slug":"所谓的作用域"},{"level":2,"title":"JS 的编译原理","slug":"js-的编译原理"},{"level":2,"title":"变量查找","slug":"变量查找"},{"level":2,"title":"词法作用域","slug":"词法作用域"},{"level":2,"title":"作用域","slug":"作用域"},{"level":2,"title":"作用域链","slug":"作用域链"}],"relativePath":"guide/javascript/scope_chain.md","lastUpdated":1625578115361}',t={},o=a('<p>面试的时候，面试官会问<code>JS中的作用域是什么</code> 要知道<code>作用域是什么</code></p><h2 id="所谓的作用域"><a class="header-anchor" href="#所谓的作用域" aria-hidden="true">#</a> 所谓的作用域</h2><blockquote><p>提前约定好一套存储变量、访问变量的规则</p><p>这套规则就是作用域</p></blockquote><h2 id="js-的编译原理"><a class="header-anchor" href="#js-的编译原理" aria-hidden="true">#</a> JS 的编译原理</h2><p><img src="https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5.svg" alt="编译阶段"></p><p>编译原理 执行的过程一般会有三个步骤</p><ul><li>var name 编译时处理</li><li>name = yayxs 运行时处理</li></ul><p>也就是 JS 是在一边进行编译 一边进行执行（所有的代码片段在执行之前会被编译 同时编译 的过程十分短暂）</p><h2 id="变量查找"><a class="header-anchor" href="#变量查找" aria-hidden="true">#</a> 变量查找</h2><p>其次的话是<code>引擎</code> 查询变量的两种方式</p><ul><li>一个是<strong>LHS 查询</strong></li><li>一个是<strong>RHS 查询</strong></li></ul><p>也就是说当变量出现在赋值操作的左侧进行 <code>LHS</code> ；当出现在右侧时进行<code>RHS</code> 一上来就搞这些乱起八遭的英文缩写，啥意思</p><div class="language-javascript"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n</code></pre></div><p>以上的代码就是想得到 <code>a</code> 的值，那就是——RHS</p><div class="language-javascript"><pre><code>a <span class="token operator">=</span> <span class="token number">123</span>\n</code></pre></div><p>以上的代码给<code>a</code> 赋值，那就是——LHS</p><p>那么说完查询的方式，跟作用域有什么用？其中从某种方式上来理解<strong>作用域便是查找变量的一套规范化的规则</strong></p><p>那如果我查找的引用无法在当前的作用域内完成怎么办，比如说</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token comment">// b取值，想得到b的值，那就是RHS 那么引用的查找在当前的 foo无法完成</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">123</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">456</span><span class="token punctuation">)</span>\n</code></pre></div><p>如果使用了当前作用域中不存在的变量 引擎就需要按照作用域链在其他作用域中查找该变量</p><h2 id="词法作用域"><a class="header-anchor" href="#词法作用域" aria-hidden="true">#</a> 词法作用域</h2><p>下图展示的一个可视化的作用链（有点像一栋大楼） <img src="https://user-gold-cdn.xitu.io/2020/6/16/172bd9591dc641b6?w=464&amp;h=411&amp;f=png&amp;s=9736" alt="foo"> 下面是一段 JS 代码，虽然是 foo 中调用的 bar 但是 bar 函数的外部引用确实全局上下文。因为在 JS 执行过程中</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;--yayxs--&#39;</span>\n  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;--vast--&#39;</span>\n<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p>整个的一块就像是一栋大楼，然后不停的勇敢的向上走，我们如上提及的那栋大楼便是<strong>词法作用域</strong></p><p><strong>词法作用域就是指作用域由代码声明的位置决定的，所以词法作用域是静态的作用域通过它能够预测代码在执行中如何查找标识符</strong></p><ul><li>一种是词法作用域</li><li>一种是动态作用域</li></ul><p>那我们重点聊的是<code>词法</code> ，下面来看一段代码 <img src="https://user-gold-cdn.xitu.io/2020/6/16/172bda0752c43347?w=728&amp;h=369&amp;f=png&amp;s=20385" alt="foo"></p><p>我们还不得不谈 <code>函数作用域</code> 以及 <code>块作用域</code></p><ul><li><p>生命每个函数都会自身创建一个笑脸</p><p>对于内部的实现我们是可以隐藏的，比如</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token operator">...</span><span class="token punctuation">.</span>balabala\n<span class="token punctuation">}</span>\n</code></pre></div></li></ul><p>谁也不知道函数里干了啥，巴拉巴拉</p><p>当我们这样写的时候</p><div class="language-javascript"><pre><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">I LOVE MEINV</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p>我们社区给这种操作起了个骚气的名字<code>IIFE</code> 即为 <strong>立即执行表达式</strong>，在我们实际开发的时候是十分常见的</p><ul><li><p>还有就是块作用域</p><p>那么什么情况下会形成块作用域</p><ul><li>with 用 with 从对象中创建的作用域仅在 with 声明中而非外部 对 with 语句来说，会向作用域链前端添加指定的对象</li><li>try catch</li></ul><p>其中<code>catch</code> 分句会创建一个块作用域 则会创建一个新的变量对象，这个变量对象会包含要抛出的错误对象的声明。</p><div class="language-javascript"><pre><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token comment">// ReferenceError: error is not defined</span>\n</code></pre></div><ul><li><p>let</p><p>为其声明的变量隐式的劫持了所在的块作用域</p></li><li><p>const</p><p>const 同样可以创建一个块级作用域</p></li></ul></li></ul><h2 id="作用域"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>在程序中定义变量的区域 决定了 变量的声明周期</p><ul><li>变量和函数可访问的范围</li><li>作用域控制着变量和函数的可见性和声明规则</li></ul><p>在 ES6 之前只有两种</p><ul><li><p>函数作用域 ： 函数内部定义的变量或者函数 只能在函数的内部被访问 函数执行结束后 函数内部定义的变量就被销毁</p></li><li><p>全局作用域：代码在任何地方都能访问 声明周期伴随着页面的声明周期，全局变量在全局作用域、函数作用域和块作用域里都可以获取到</p></li></ul><p>ES6 出现</p><ul><li>块级作用域</li></ul><div class="language-js"><pre><code><span class="token comment">//if 块</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">//while 块</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 函数块</span>\n<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n<span class="token comment">//for 循环块</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 单独一个块</span>\n<span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><h2 id="作用域链"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h2><p>首先了解 <a href="./context.html">执行上下文</a> 上下文中的代码在执行的时候，会创建变量对象的一个作用域链（scope chain）。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。 理解作用域链是理解闭包的基础 并且闭包是无处不在的，同时 作用域和作用域链是所有编程语言的基础学透一门语言，作用域和作用域链一定是绕不开的。 这也就意味着如果在 bar 函数或者 foo 函数中使用了外部变量，那么 JavaScript 引擎会去全局执行上下文中查找。我们把这个查找的链条就称为作用域链。</p><ul><li>函数作用域</li><li>全局作用域</li></ul><p><img src="https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8E%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE-%E7%AC%AC%202%20%E9%A1%B5.svg" alt="作用域与作用域链-第 2 页"></p>',46);t.render=function(a,p,t,c,e,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
