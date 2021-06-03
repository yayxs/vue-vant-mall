import{o as t,c as e,a as i}from"./app.0c83b2b0.js";const s='{"title":"请你说说css的定位position","description":"","frontmatter":{"title":"请你说说css的定位position"},"headers":[{"level":2,"title":"1.1 了解定位（positioning）","slug":"_1-1-了解定位（positioning）"},{"level":3,"title":"定位的基本思想：","slug":"定位的基本思想："},{"level":3,"title":"浮动提出的时间","slug":"浮动提出的时间"},{"level":3,"title":"CSS 定位机制（3种）","slug":"css-定位机制（3种）"},{"level":2,"title":"1.2 CSS中的文档流","slug":"_1-2-css中的文档流"},{"level":3,"title":"标准文档流","slug":"标准文档流"}],"relativePath":"guide/css/position.md","lastUpdated":1615877423021}',d={},a=i('<h1 id="请你说说css的定位position"><a class="header-anchor" href="#请你说说css的定位position" aria-hidden="true">#</a> 请你说说css的定位position</h1><h2 id="_1-1-了解定位（positioning）"><a class="header-anchor" href="#_1-1-了解定位（positioning）" aria-hidden="true">#</a> 1.1 了解定位（positioning）</h2><h3 id="定位的基本思想："><a class="header-anchor" href="#定位的基本思想：" aria-hidden="true">#</a> 定位的基本思想：</h3><p>它允许你定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置。</p><h3 id="浮动提出的时间"><a class="header-anchor" href="#浮动提出的时间" aria-hidden="true">#</a> 浮动提出的时间</h3><p>CSS1 中首次提出了浮动，它以 Netscape 在 Web 发展初期增加的一个功能为基础</p><h3 id="css-定位机制（3种）"><a class="header-anchor" href="#css-定位机制（3种）" aria-hidden="true">#</a> CSS 定位机制（3种）</h3><p>关于CSS的定位机制，相比会有小伙伴不太清楚，平常也没有留意过，那么CSS有三种基本的定位机制</p><ul><li>普通流</li><li>浮动</li><li>绝对定位</li></ul><p>CSS position 属性之属性值的含义</p><table><thead><tr><th>属性值</th><th>含义</th><th>描述</th></tr></thead><tbody><tr><td>Static</td><td>元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。</td><td>默认值。没有定位，元素出现在正常的流中</td></tr><tr><td>Relative</td><td>元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。</td><td>生成相对定位的元素，相对于其正常位置进行定位。</td></tr><tr><td>Absolute</td><td>元素框从文档流完全删除，并相对于其包含块定位。</td><td>生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。</td></tr><tr><td>fixed</td><td>元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身</td><td>生成绝对定位的元素，相对于浏览器窗口进行定位。</td></tr><tr><td>inherit</td><td></td><td>规定应该从父元素继承 position 属性的值。</td></tr></tbody></table><h2 id="_1-2-css中的文档流"><a class="header-anchor" href="#_1-2-css中的文档流" aria-hidden="true">#</a> 1.2 CSS中的文档流</h2><h3 id="标准文档流"><a class="header-anchor" href="#标准文档流" aria-hidden="true">#</a> 标准文档流</h3><p><strong>文档流</strong>指的是元素排版布局过程中，元素会<strong>默认</strong>自动从左往右，从上往下的<strong>流式排列方式</strong>。并最终窗体自上而下分成一行行，并在每行中从左至右的顺序排放元素。</p>',14);d.render=function(i,s,d,r,o,h){return t(),e("div",null,[a])};export default d;export{s as __pageData};
