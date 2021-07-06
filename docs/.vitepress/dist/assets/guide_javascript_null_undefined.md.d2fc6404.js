import{o as n,c as e,a as l}from"./app.78bcef79.js";const d='{"title":"null和undefined有什么区别","description":"","frontmatter":{"title":"null和undefined有什么区别"},"headers":[{"level":2,"title":"null","slug":"null"},{"level":2,"title":"undefined","slug":"undefined"}],"relativePath":"guide/javascript/null_undefined.md","lastUpdated":1625578115338}',a={},u=l('<h1 id="null和undefined有什么区别"><a class="header-anchor" href="#null和undefined有什么区别" aria-hidden="true">#</a> null和undefined有什么区别</h1><h2 id="null"><a class="header-anchor" href="#null" aria-hidden="true">#</a> null</h2><p>它构成了一个独立的类型，只包含 null 值，null 本身也是基本类型。不是对对象的引用 也不是null指针</p><div class="language-"><pre><code>null 有时会被当作一种对象类型，但是这其实只是语言本身的一个 bug，即对 null 执行\ntypeof null 时会返回字符串 &quot;object&quot;。\n</code></pre></div><p>但是仅仅代表 <code>无</code> <code>空 </code> <code>未知</code> 在定义将来要保存对象值的变量时，建议使用null来初始化，不要使用其他值。</p><h2 id="undefined"><a class="header-anchor" href="#undefined" aria-hidden="true">#</a> undefined</h2><p>虽然null == undefined是true（因为这两个值类似），但null === undefined是false，因为它们不是相同的数据类型。</p><p>特殊值 null 和 undefined 比较特殊。它们没有对象包装器，所以它们没有方法和属性。并且它们也没有相应的原型。</p><div class="language-"><pre><code> - undefined 未初始化变量\n - null == undefined true\n - 用途完全不一样\n</code></pre></div><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>\n\n</code></pre></div>',10);a.render=function(l,d,a,s,t,i){return n(),e("div",null,[u])};export default a;export{d as __pageData};
