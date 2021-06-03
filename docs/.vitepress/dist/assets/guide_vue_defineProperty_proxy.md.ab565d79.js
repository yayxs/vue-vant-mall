import{o as n,c as s,a}from"./app.0c83b2b0.js";const t='{"title":"谈谈Object和Array的变化侦测采用的不同处理方式","description":"","frontmatter":{"title":"谈谈Object和Array的变化侦测采用的不同处理方式"},"headers":[{"level":2,"title":"对象的变化侦测","slug":"对象的变化侦测"},{"level":2,"title":"对比一下 Object.defineProperty 与proxy","slug":"对比一下-object-defineproperty-与proxy"},{"level":2,"title":"使用 JavaScript Proxy 实现简单的数据绑定","slug":"使用-javascript-proxy-实现简单的数据绑定"},{"level":2,"title":"数组的变化侦测","slug":"数组的变化侦测"},{"level":2,"title":"vue如何侦测新增元素的变化","slug":"vue如何侦测新增元素的变化"},{"level":2,"title":"直接给一个数组项赋值，Vue 能检测到变化吗","slug":"直接给一个数组项赋值，vue-能检测到变化吗"}],"relativePath":"guide/vue/defineProperty_proxy.md","lastUpdated":1615877423027}',p={},o=a('<h1 id="谈谈object和array的变化侦测采用的不同处理方式"><a class="header-anchor" href="#谈谈object和array的变化侦测采用的不同处理方式" aria-hidden="true">#</a> 谈谈Object和Array的变化侦测采用的不同处理方式</h1><ul><li>(1)Vue 框架怎么实现对象和数组的监听？</li><li>(2)直接给一个数组项赋值，Vue 能检测到变化吗？</li><li>(3)在 Vue 中怎么检测数组的变化</li><li>(4)对比一下 <code>Object.defineProperty</code> 与<code>proxy</code></li><li>(5)vue如何侦测新增元素的变化</li></ul><h2 id="对象的变化侦测"><a class="header-anchor" href="#对象的变化侦测" aria-hidden="true">#</a> 对象的变化侦测</h2><p>使用<code>Object.defineproperty</code> 侦测对象的变化。<code>template中的数据</code>在<code>getter中</code>收集依赖，在<code>setter</code> 中触发依赖。收集到<code>Dep</code> 中。其中模板或者用户写的<code>watch</code> 都是<code>Watcher</code></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n    <span class="token function">removeSub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n    <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n    <span class="token function">notufy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">handleRemove</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">const</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>key<span class="token punctuation">,</span>val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// let dep = [] // 存储当前的依赖</span>\n    <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>key<span class="token punctuation">,</span><span class="token punctuation">{</span>\n        enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 在getter中收集依赖</span>\n            <span class="token comment">// dep.push(window.target)</span>\n            dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 修改</span>\n            <span class="token keyword">return</span> val\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>val<span class="token operator">===</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> val\n            <span class="token punctuation">}</span>\n\n            <span class="token comment">// for(let i =0;i&lt;dep.length;i++){</span>\n            <span class="token comment">//     // 触发收集到的依赖</span>\n            <span class="token comment">//     dep[i](newVal,val)</span>\n            <span class="token comment">// }</span>\n            dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 新增</span>\n            val <span class="token operator">=</span> newVal\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="对比一下-object-defineproperty-与proxy"><a class="header-anchor" href="#对比一下-object-defineproperty-与proxy" aria-hidden="true">#</a> 对比一下 <code>Object.defineProperty</code> 与<code>proxy</code></h2><p>JavaScript没有提供元编程的能力，无法侦测到一个新属性被添加到了对象中，也无法侦测到一个属性从对象中删除了。 由于在ES6之前，JavaScript并没有提供元编程的能力，所以对于数组类型的数据，一些语法无法追踪到变化，只能拦截原型上的方法，而无法拦截数组特有的语法，例如使用length清空数组的操作就无法拦截。</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>object.defineproperty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>123{{$data.obj}}\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>action<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token comment">// 属性标志和属性描述符</span>\n      <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span>\n        age<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 其中desc 是属性描述符</span>\n      <span class="token comment">/* 属性描述符：\n        {\n        &quot;value&quot;: &quot;zs&quot;,\n        &quot;writable&quot;: true,\n        &quot;enumerable&quot;: true,\n        &quot;configurable&quot;: true\n        }\n        */</span>\n      <span class="token comment">// 除了 value 外 其他的叫标志 存在 age就进行更新</span>\n      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        value<span class="token operator">:</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> admin <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>admin<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        value<span class="token operator">:</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        el<span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>\n        data<span class="token operator">:</span> <span class="token punctuation">{</span>\n          obj<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;action触发&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;add-name-key&#39;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="使用-javascript-proxy-实现简单的数据绑定"><a class="header-anchor" href="#使用-javascript-proxy-实现简单的数据绑定" aria-hidden="true">#</a> 使用 JavaScript Proxy 实现简单的数据绑定</h2><h2 id="数组的变化侦测"><a class="header-anchor" href="#数组的变化侦测" aria-hidden="true">#</a> 数组的变化侦测</h2><p>对Array的变化侦测是通过拦截原型的方式实现的。正是因为这种实现方式，其实有些数组操作Vue.js是拦截不到的</p><div class="language-js"><pre><code>  <span class="token keyword">let</span> model <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        el<span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            list <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token function">handlePush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数组中push数据触发&#39;</span><span class="token punctuation">)</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      model<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n          <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> val<span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">变至</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n            val <span class="token operator">=</span> newVal\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>处理数组的方式与纯对象不同 数组是一个特殊的数据结构 有很多实例方法 这些方法会改变数组的值（变异方法）像 <code>push</code> <code>pop</code> <code>shift</code> <code>unshift</code> <code>splice</code> <code>reverse</code> <code>sort</code> 重点关注<strong>增加元素的操作</strong> 因为新增的元素不是响应式的 所以需要获取到新增的元素 并把他们变成响应式的才行。核心思路就是push来改变数组的内容，那么我们只要能在用户使用push操作数组的时候得到通知。</p><div class="language-js"><pre><code>  <span class="token keyword">const</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span>\n        arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span>\n        <span class="token punctuation">[</span><span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;reverse&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n            <span class="token keyword">const</span> oldMe <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span>\n            Object<span class="token punctuation">.</span><span class="token function">defineproperty</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">,</span>method<span class="token punctuation">,</span><span class="token punctuation">{</span>\n                <span class="token function-variable function">value</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token function">mutator</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> <span class="token function">oldMe</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                \n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>需要通过Observer，所以我们只需要在Observer中使用拦截器覆盖那些即将被转换成响应式Array类型数据的原型就好了<strong>Array在getter中收集依赖，在拦截器中触发依赖</strong> 总结：对于纯对象只需要逐个将对象的属性重新定义访问器属性，当某一属性的值也是个对象的时候就对其进行递归定义，对于数组的处理通过拦截数组的变异方法（push shift reverse等）直接通过 arr[0] = xxx 这种方式是触发不了响应 因为数组的索引不是“访问器” 属性。正是因为数组的索引不是访问器属性 所以当有观察者依赖数组的某一个元素的时候 触发不了元素的 get 函数 ，那自然而然收集不到依赖</p><h2 id="vue如何侦测新增元素的变化"><a class="header-anchor" href="#vue如何侦测新增元素的变化" aria-hidden="true">#</a> vue如何侦测新增元素的变化</h2><p>如果操作数组的方法是push、unshift和splice（可以新增数组元素的方法），则把参数中新增的元素拿过来，用Observer来侦测</p><h2 id="直接给一个数组项赋值，vue-能检测到变化吗"><a class="header-anchor" href="#直接给一个数组项赋值，vue-能检测到变化吗" aria-hidden="true">#</a> 直接给一个数组项赋值，Vue 能检测到变化吗</h2><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>\n</code></pre></div>',20);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
