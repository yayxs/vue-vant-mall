import{o as n,c as s,a}from"./app.78bcef79.js";const t='{"title":"new Vue的时候发生了什么","description":"","frontmatter":{"title":"new Vue的时候发生了什么"},"relativePath":"guide/vue/new-vue.md","lastUpdated":1625578115406}',p={},o=a('<p>当调用 new Vue 的时候传入<code>options</code> 会执行 <code>this._init</code> 即是<code>Vue.prototype._init</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Vue</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Vue is a constructor and should be called with the `new` keyword</span>\n    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;启动安全模式，应该使用new 关键字来调用Vue&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// init方法的调用</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// 执行 new Vue 的时候  this._init()方法被执行</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>那我们是如何使用的呢，一个简单的案例</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{test}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./vue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token punctuation">{</span>\n    test<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>执行 new Vue()时，会调用 <code>._init</code> 方法，该方法实现了一系列初始化操作， 它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，<strong>即匹配更新为新的值</strong></p><p>我们查看 Vue 的文档会发现 <a href="https://cn.vuejs.org/v2/api/#performance" target="_blank" rel="noopener noreferrer">Vue.config.performance</a></p><p>官方文档描述的性能追踪就是在<strong>组件初始化的</strong> <code>_init</code> 方法中实现的</p><div class="language-js"><pre><code><span class="token keyword">let</span> startTag<span class="token punctuation">,</span> endTag\n<span class="token comment">/* istanbul ignore if */</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  startTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">vue-perf-start:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  endTag <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">vue-perf-end:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vm<span class="token punctuation">.</span>_uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token function">mark</span><span class="token punctuation">(</span>startTag<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 中间的代码省略...</span>\n\n<span class="token comment">/* istanbul ignore if */</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  vm<span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token function">formatComponentName</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n  <span class="token function">mark</span><span class="token punctuation">(</span>endTag<span class="token punctuation">)</span>\n  <span class="token function">measure</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">vue </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>vm<span class="token punctuation">.</span>_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> init</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> startTag<span class="token punctuation">,</span> endTag<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>接着是 声明一个 是否是 Vue 实例的标记 <code>_isVue</code></p><div class="language-js"><pre><code>vm<span class="token punctuation">.</span>_isVue <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// 作用：为了避免被响应式的系统观测到</span>\n</code></pre></div><p>包括整个生命周期的流程以及响应式系统流程的启动等。</p><div class="language-js"><pre><code><span class="token function">initLifecycle</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n<span class="token function">initEvents</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n<span class="token function">initRender</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n<span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">)</span>\n<span class="token function">initInjections</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve injections before data/props</span>\n<span class="token function">initState</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>\n<span class="token function">initProvide</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span> <span class="token comment">// resolve provide after data/props</span>\n<span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>在各项工作进行之前还有一点就是</p><div class="language-js"><pre><code><span class="token comment">// 在vm实例上增加 $options 属性</span>\n<span class="token comment">// https://cn.vuejs.org/v2/api/#vm-options</span>\n<span class="token comment">// 重点查看属性合并的方法</span>\nvm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>\n  <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  vm\n<span class="token punctuation">)</span>\n</code></pre></div>',16);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
