import{o as n,c as a,a as s}from"./app.78bcef79.js";const p='{"title":"for..of, for..in和 forEach,map 的区别","description":"","frontmatter":{"title":"for..of, for..in和 forEach,map 的区别"},"headers":[{"level":2,"title":"for 循环","slug":"for-循环"},{"level":2,"title":"for in","slug":"for-in"},{"level":2,"title":"for-of","slug":"for-of"},{"level":2,"title":"forEach","slug":"foreach"},{"level":2,"title":"map","slug":"map"}],"relativePath":"guide/javascript/cycle.md","lastUpdated":1625578113324}',t={},o=s('<h1 id="for-of-for-in-和-foreach-map-的区别"><a class="header-anchor" href="#for-of-for-in-和-foreach-map-的区别" aria-hidden="true">#</a> for..of, for..in 和 forEach,map 的区别</h1><h2 id="for-循环"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h2><p>这个是最最基础的操作。我们可以通过循环数组的下标，来依次访问每个值：</p><div class="language-js"><pre><code><span class="token comment">// 获取数组的长度</span>\n<span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 输出数组的元素值，输出当前索引</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="for-in"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for in</h2><p><code>for-in</code>语句是一种严格的迭代语句，用于枚举对象中的非符号键属性,<strong>如果 for-in 循环要迭代的变量是 null 或 undefined，则不执行循环体。</strong>,循环会遍历 所有属性，不仅仅是这些数字属性</p><div class="language-js"><pre><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-------</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">var</span> anotherObject <span class="token operator">=</span> <span class="token punctuation">{</span>\n  a<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建一个关联到 anotherObject 的对象</span>\n<span class="token keyword">var</span> myObject <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>anotherObject<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> k <span class="token keyword">in</span> myObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;found: &#39;</span> <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// found: a</span>\n<span class="token string">&#39;a&#39;</span> <span class="token keyword">in</span> myObject<span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><h2 id="for-of"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for-of</h2><p>for-of 语句是一种严格的迭代语句，用于遍历可迭代对象的元素，不能获取当前元素的索引，只是获取元素值，但大多数情况是够用的。而且这样写更短,通常情况下用于处理数组,也可以迭代集合（提供了所需要的 Symbol.iterator 属性）</p><div class="language-js"><pre><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> val <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ele是元素</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="foreach"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h2><p>通过取<code>forEach</code>方法中传入函数的第一个入参和第二个入参，我们也可以取到数组每个元素的值及其对应索引,会遍历数组中的所有值并忽略回调函数的返回值</p><div class="language-js"><pre><code>arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 输出数组的元素值，输出当前索引</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="map"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h2><p>map 方法在调用形式上与 forEach 无异，区别在于 map 方法会根据你传入的函数逻辑对数组中每个元素进行处理、进而返回一个全新的数组。 所以其实 map 做的事情不仅仅是遍历，而是在遍历的基础上“再加工”。当我们需要对数组内容做批量修改、同时修改的逻辑又高度一致时，就可以调用 map 来达到我们的目的：</p><div class="language-js"><pre><code><span class="token keyword">const</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 输出数组的元素值，输出当前索引</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 在当前元素值的基础上加1</span>\n  <span class="token keyword">return</span> item <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><blockquote><p>个人推荐如果没有特殊的需要，那么统一使用 for 循环来实现遍历。因为从性能上看，for 循环遍历起来是最快的。</p></blockquote>',18);t.render=function(s,p,t,e,c,l){return n(),a("div",null,[o])};export default t;export{p as __pageData};
