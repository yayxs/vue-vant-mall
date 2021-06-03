import{o as n,c as s,a}from"./app.0c83b2b0.js";const t='{"title":"手写实现节流函数（throttle）","description":"","frontmatter":{"title":"手写实现节流函数（throttle）"},"headers":[{"level":2,"title":"认识节流","slug":"认识节流"}],"relativePath":"guide/written/throttle.md","lastUpdated":1615877423032}',p={},o=a('<h1 id="手写实现节流函数（throttle）"><a class="header-anchor" href="#手写实现节流函数（throttle）" aria-hidden="true">#</a> 手写实现节流函数（throttle）</h1><h2 id="认识节流"><a class="header-anchor" href="#认识节流" aria-hidden="true">#</a> 认识节流</h2><p><strong>节流</strong>是每隔一段时间，只执行一次事件，<strong>防抖</strong>是一件事情触发了，1s内不再触发此事件</p><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> timerId <span class="token operator">=</span> <span class="token keyword">null</span>\n      <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token number">0</span>\n      <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n       <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span>  args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>timerId<span class="token punctuation">)</span><span class="token punctuation">{</span>\n          timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n            timerId <span class="token operator">=</span> <span class="token keyword">null</span>\n            <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>wait<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre></div>',4);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};