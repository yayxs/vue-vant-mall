import{o as n,c as s,a}from"./app.0c83b2b0.js";const p='{"title":"手写实现深浅拷贝（深浅克隆）","description":"","frontmatter":{"title":"手写实现深浅拷贝（深浅克隆）"},"headers":[{"level":2,"title":"背景","slug":"背景"},{"level":2,"title":"浅拷贝","slug":"浅拷贝"},{"level":3,"title":"具体实现","slug":"具体实现"},{"level":3,"title":"方法一","slug":"方法一"},{"level":3,"title":"方法二","slug":"方法二"},{"level":2,"title":"深拷贝","slug":"深拷贝"},{"level":3,"title":"第一个深拷贝：通过JSON的两个 API","slug":"第一个深拷贝：通过json的两个-api"},{"level":3,"title":"第二个深拷贝：递归拷贝","slug":"第二个深拷贝：递归拷贝"}],"relativePath":"guide/written/clone.md","lastUpdated":1619085760472}',t={},o=a('<h1 id="手写实现深浅拷贝（深浅克隆）"><a class="header-anchor" href="#手写实现深浅拷贝（深浅克隆）" aria-hidden="true">#</a> 手写实现深浅拷贝（深浅克隆）</h1><h2 id="背景"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><blockquote><p>深浅拷贝 是面试中的<code>明星话题</code></p></blockquote><p><strong>首先明确一点我们接下来探讨的都是引用类型，一般我们拷贝的也就是像数组对象这种较为复杂的数据类型</strong></p><p>什么是引用类型，我下边举个例子，也就是说 你和弟弟都是家里的人 一旦你弟弟 改变了你家的布局，那么你俩拿钥匙回到家看到的是一样的，都是改变后的样子 也就是说 你俩是一家人（这里就不用女朋友举例了）</p><p>如何切断数据，就是重新拷贝一份</p><ul><li><p>浅拷贝就是表面的拷贝</p></li><li><p>深拷贝就是无限层级的拷贝下去</p></li></ul><h2 id="浅拷贝"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h2><p>浅拷贝:创建一个新对象，有旧对象原始属性值（基本类型，拷贝的是基本类型；引用类型，便是内存地址）一份精确拷贝 其中一个对象地址改变，相互影响（也就是说虽然拷贝过了，但是还是会相互影响的）</p><blockquote><p>自己创建一个新的对象 来接收你要重新复制或引用的对象值 如果对象属性是基本的数据类型 复制的就是基本类型的值给新对象 如果是引用的类型 复制的就是内存地址</p><p>现在有两个对象，其中一个对象改变了内存的地址 影响另一个</p></blockquote><div class="language-js"><pre><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> obj2 <span class="token operator">=</span> obj1\nobj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 此时第一个对象的name属性就被改掉了</span>\n</code></pre></div><p>我们发现，我们通过一个简单的 <code>赋值操作来完成这一操作</code> 那我们是不是也可以通过一个简单的函数来实现，那就是</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">shallow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> prop <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>从数组来看的话</p><div class="language-js"><pre><code><span class="token keyword">let</span> targetArr <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;oldName&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>\n  <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n  <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n  <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\n<span class="token keyword">let</span> resultArr <span class="token operator">=</span> targetArr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nresultArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;newName&#39;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old&#39;</span><span class="token punctuation">,</span> targetArr<span class="token punctuation">)</span> <span class="token comment">// 此时 targetArr 的第一个元素的 name 也被修改了</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span> resultArr<span class="token punctuation">)</span>\n</code></pre></div><h3 id="具体实现"><a class="header-anchor" href="#具体实现" aria-hidden="true">#</a> 具体实现</h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">firstShallowClone</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      result<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> target<span class="token punctuation">[</span>k<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="方法一"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3><p><code>Object.assign</code> ES6 定义了 <code>Object.assign(..) </code>方法来实现浅复制 用于JS对象的合并多个用途</p><blockquote><p>参数一 目标</p><p>参数二 来源对象</p><p>参数三 来源对象</p></blockquote><div class="language-js"><pre><code><span class="token keyword">let</span> dest <span class="token operator">=</span> <span class="token punctuation">{</span>\n  user<span class="token operator">:</span> <span class="token string">&#39;yayxs&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\nObject<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;yayxs&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span>\n</code></pre></div><ul><li>它不会拷贝对象的继承属性</li><li>它不会拷贝对象的不可枚举的属性；</li><li>可以拷贝 Symbol 类型的属性。</li></ul><h3 id="方法二"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3><p>通过<code>扩展运算符</code></p><h2 id="深拷贝"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2><p>深拷贝的核心思路便是 拷贝加递归 也就是说当对象的某一个属性还是个对象的时候，我们需要对之进一步拷贝,从内存完整拷贝，在堆中重新开启区间，对象地址改变不会影响</p><blockquote><p>对于复杂的引用类型 其在堆中内存中 完全开辟了一块内存地址 将原有的对象完全复制过来存放</p></blockquote><h3 id="第一个深拷贝：通过json的两个-api"><a class="header-anchor" href="#第一个深拷贝：通过json的两个-api" aria-hidden="true">#</a> 第一个深拷贝：通过<code>JSON</code>的两个 API</h3><ul><li>JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象</li><li>JSON.stringify() 方法将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串</li></ul><p>实现 JavaScript 中的深拷贝，有一种非常取巧的方式 —— JSON.stringify,</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;yayxs&#39;</span><span class="token punctuation">,</span>\n  fav<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> <span class="token string">&#39;play&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  friend<span class="token operator">:</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;wanghuahua&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> objStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// deepClone.js:16 {&quot;name&quot;:&quot;yayxs&quot;,&quot;fav&quot;:[{&quot;type&quot;:&quot;play&quot;}],&quot;friend&quot;:{&quot;name&quot;:&quot;wanghuahua&quot;}}</span>\n<span class="token keyword">const</span> objCopy <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>objStr<span class="token punctuation">)</span>\n\nobjCopy<span class="token punctuation">.</span>fav<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;fav&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [{}]</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objCopy<span class="token punctuation">[</span><span class="token string">&#39;fav&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//[]</span>\n</code></pre></div><p>但是如果单个元素是函数的话，我们来试一下</p><div class="language-js"><pre><code><span class="token keyword">let</span> fnArr <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fnArr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [null, null]</span>\n</code></pre></div><h3 id="第二个深拷贝：递归拷贝"><a class="header-anchor" href="#第二个深拷贝：递归拷贝" aria-hidden="true">#</a> 第二个深拷贝：递归拷贝</h3><p>判断一下属性值的类型，当目前属性值的类型是个对象的时候，然后递归克隆，</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">firstDeepClone</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//  如果是 值类型 或 null，则直接return</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> target\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 结果对象</span>\n  <span class="token keyword">let</span> res <span class="token operator">=</span> target <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 首先判断当前key 所对应的属性值是否是个引用类型</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">firstDeepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',36);t.render=function(a,p,t,e,c,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
