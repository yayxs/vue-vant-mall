import{o as n,c as s,a}from"./app.78bcef79.js";const t='{"title":"手写实现输出由*号组成的三角形","description":"","frontmatter":{"title":"手写实现输出由*号组成的三角形"},"relativePath":"guide/written/triangle.md","lastUpdated":1625578115413}',p={},o=a('<h1 id="手写实现打印输出由-号组成的三角形、菱形、平行四边形"><a class="header-anchor" href="#手写实现打印输出由-号组成的三角形、菱形、平行四边形" aria-hidden="true">#</a> 手写实现打印输出由*号组成的三角形、菱形、平行四边形</h1><div class="language-js"><pre><code>\n <span class="token comment">/**\n       *      *       1----1\n       *      **      2----2\n       *      ***     3----3\n       *      ****    4----4\n       */</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 行数</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> num <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> num<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>row<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">;</span>row<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> num<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>num<span class="token operator">&lt;</span>row<span class="token punctuation">;</span>num<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n          document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n</code></pre></div>',2);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
