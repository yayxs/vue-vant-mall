import{o as n,c as s,a}from"./app.0c83b2b0.js";const t='{"title":"ES6中的类","description":"","frontmatter":{"title":"ES6中的类"},"relativePath":"guide/javascript/class.md","lastUpdated":1615877423023}',p={},o=a('<blockquote><p>基本的用法</p></blockquote><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;vast&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nu<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n</code></pre></div><p><code>类</code> 实际上是一种函数<code>console.log(User)</code></p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> User<span class="token punctuation">)</span> <span class="token comment">// function</span>\n</code></pre></div>',4);p.render=function(a,t,p,c,e,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
