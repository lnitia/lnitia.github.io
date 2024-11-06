import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as l,c as i,a,b as o,d as p,f as n}from"./app-0mkQjek1.js";const c={},u=n(`<h1 id="html基础" tabindex="-1"><a class="header-anchor" href="#html基础" aria-hidden="true">#</a> HTML基础</h1><h2 id="_1-语法规范" tabindex="-1"><a class="header-anchor" href="#_1-语法规范" aria-hidden="true">#</a> 1 语法规范</h2><ol><li>尖括号</li><li>通常是成对出现</li><li>标签分成包含和并列关系</li></ol><h2 id="_2-标签" tabindex="-1"><a class="header-anchor" href="#_2-标签" aria-hidden="true">#</a> 2 标签</h2><h3 id="_2-1-基本结构标签" tabindex="-1"><a class="header-anchor" href="#_2-1-基本结构标签" aria-hidden="true">#</a> 2.1 基本结构标签</h3><h4 id="_2-1-1-根标签" tabindex="-1"><a class="header-anchor" href="#_2-1-1-根标签" aria-hidden="true">#</a> 2.1.1 根标签</h4><p><code>&lt;html&gt; &lt;/html&gt;</code></p><h4 id="_2-1-2-头部标签" tabindex="-1"><a class="header-anchor" href="#_2-1-2-头部标签" aria-hidden="true">#</a> 2.1.2 头部标签</h4><ol><li><code>&lt;head&gt; &lt;/head&gt;</code></li><li>其中必须设置的是标题标签 <code>&lt;title&gt; &lt;/title&gt;</code></li></ol><h4 id="_2-1-3-主体标签" tabindex="-1"><a class="header-anchor" href="#_2-1-3-主体标签" aria-hidden="true">#</a> 2.1.3 主体标签</h4><p><code>&lt;body&gt; &lt;/body&gt;</code></p><h4 id="_2-1-4-vs-code一键生成的骨架标签" tabindex="-1"><a class="header-anchor" href="#_2-1-4-vs-code一键生成的骨架标签" aria-hidden="true">#</a> 2.1.4 vs code一键生成的骨架标签</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>   <span class="token comment">&lt;!-- 文档类型声明标签，必须写到页面最前--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  <span class="token comment">&lt;!-- lang语言种类--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token comment">&lt;!-- 字符集--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-语义标签" tabindex="-1"><a class="header-anchor" href="#_2-2-语义标签" aria-hidden="true">#</a> 2.2 语义标签</h3><h4 id="_2-2-1-标题标签" tabindex="-1"><a class="header-anchor" href="#_2-2-1-标题标签" aria-hidden="true">#</a> 2.2.1 标题标签</h4><ol><li>标题（Heading）是通过&lt; h1&gt; - &lt; h6&gt; 标签来定义的</li><li><code>&lt;h1&gt; 一级标题 &lt;/h1&gt;</code></li><li>使用标题标签后独占一行并加粗</li></ol><h4 id="_2-2-2-段落标签" tabindex="-1"><a class="header-anchor" href="#_2-2-2-段落标签" aria-hidden="true">#</a> 2.2.2 段落标签</h4><p><code>&lt;p&gt;一个段落&lt;/p&gt;</code></p><h4 id="_2-2-3-换行标签" tabindex="-1"><a class="header-anchor" href="#_2-2-3-换行标签" aria-hidden="true">#</a> 2.2.3 换行标签</h4><ol><li><code>&lt;br/&gt;</code></li><li>单标签</li><li>只是另起一行，不会产生段落之间的大间隙</li></ol><h3 id="_2-3-文本格式化" tabindex="-1"><a class="header-anchor" href="#_2-3-文本格式化" aria-hidden="true">#</a> 2.3 文本格式化</h3><h4 id="_2-3-1-加粗" tabindex="-1"><a class="header-anchor" href="#_2-3-1-加粗" aria-hidden="true">#</a> 2.3.1 加粗</h4><ol><li><code>&lt;strong&gt; &lt;/strong&gt;</code></li><li><code>&lt;b&gt; &lt;/b&gt;</code></li></ol><h4 id="_2-3-2-斜体" tabindex="-1"><a class="header-anchor" href="#_2-3-2-斜体" aria-hidden="true">#</a> 2.3.2 斜体</h4><ol><li><code>&lt;em&gt; &lt;/em&gt;</code></li><li><code>&lt;i&gt; &lt;/i&gt;</code></li></ol><h4 id="_2-3-3-下划线" tabindex="-1"><a class="header-anchor" href="#_2-3-3-下划线" aria-hidden="true">#</a> 2.3.3 下划线</h4><ol><li><code>&lt;del&gt; &lt;/del&gt;</code></li><li><code>&lt;s&gt;&lt;/s&gt;</code></li></ol><h4 id="_2-3-4-删除线" tabindex="-1"><a class="header-anchor" href="#_2-3-4-删除线" aria-hidden="true">#</a> 2.3.4 删除线</h4><ol><li><code>&lt;ins&gt; &lt;/ins&gt;</code></li><li><code>&lt;u&gt; &lt;/u&gt;</code></li></ol><h3 id="_2-4-盒子标签" tabindex="-1"><a class="header-anchor" href="#_2-4-盒子标签" aria-hidden="true">#</a> 2.4 盒子标签</h3><h4 id="_2-4-1-div" tabindex="-1"><a class="header-anchor" href="#_2-4-1-div" aria-hidden="true">#</a> 2.4.1 div</h4><ol><li><code>&lt;div&gt; &lt;/div&gt;</code></li><li>一行只能放一个div</li></ol><h4 id="_2-4-2-span" tabindex="-1"><a class="header-anchor" href="#_2-4-2-span" aria-hidden="true">#</a> 2.4.2 span</h4><ol><li><code>&lt;span&gt;&lt;/span&gt;</code></li><li>一行可以放很多个</li></ol><h3 id="_2-5-图像标签" tabindex="-1"><a class="header-anchor" href="#_2-5-图像标签" aria-hidden="true">#</a> 2.5 图像标签</h3><p><code>&lt;img src=&quot;图像URL&quot;/&gt;</code></p><h4 id="_2-5-1-图像标签属性" tabindex="-1"><a class="header-anchor" href="#_2-5-1-图像标签属性" aria-hidden="true">#</a> 2.5.1 图像标签属性</h4><ol><li>src：&lt; img&gt;标签的必须属性，用于指定图像文件的路径和文件名</li><li>alt：替换文本，图片不能显示时显示的文本</li><li>title：提示文本，鼠标放到图像上显示的文字</li><li>width：图像宽度像素</li><li>height：图像高度像素</li><li>border：图像边框像素</li></ol><h4 id="_2-5-2-图像路径" tabindex="-1"><a class="header-anchor" href="#_2-5-2-图像路径" aria-hidden="true">#</a> 2.5.2 图像路径</h4><h5 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h5><ol><li>同一级路径：直接写上文件名</li><li>上一级路径：<code>../</code></li><li>下一级路径：<code>/</code></li></ol><h5 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径" aria-hidden="true">#</a> 绝对路径</h5><ol><li>本地绝对地址</li><li>网络绝对地址</li></ol><h3 id="_2-6-超链接标签" tabindex="-1"><a class="header-anchor" href="#_2-6-超链接标签" aria-hidden="true">#</a> 2.6 超链接标签</h3><h4 id="_2-6-1-语法格式" tabindex="-1"><a class="header-anchor" href="#_2-6-1-语法格式" aria-hidden="true">#</a> 2.6.1 语法格式</h4><ol><li><code>&lt;a href=&quot;跳转目标&quot; target=&quot;目标弹出方式&quot;&gt; &lt;/a&gt;</code></li><li>herf：必须属性，指定链接目标地址</li><li>target：默认为 <code>_self </code>当前页面打开，还可以选择 <code>_blank </code>在新窗口中打开页面</li></ol><h4 id="_2-6-2-链接分类" tabindex="-1"><a class="header-anchor" href="#_2-6-2-链接分类" aria-hidden="true">#</a> 2.6.2 链接分类</h4><ol><li>外部链接：herf直接写网络绝对地址</li><li>内部链接：herf写本地相对地址</li><li>空连接：herf写#</li><li>下载链接：herf写文件地址</li><li>锚点链接：快速定位到页面的某个位置 <ul><li>链接文本：<code>&lt;a herf=&quot;#two&quot;&gt; &lt;/a&gt;</code></li><li>目标位置标签 <code>&lt;id=&quot;two&quot;&gt;</code></li></ul></li></ol><h3 id="_2-7-注释标签" tabindex="-1"><a class="header-anchor" href="#_2-7-注释标签" aria-hidden="true">#</a> 2.7 注释标签</h3><ol><li><code>&lt;!-- --&gt;</code></li><li>快捷键：ctrl + /</li></ol><h3 id="_2-8-特殊字符" tabindex="-1"><a class="header-anchor" href="#_2-8-特殊字符" aria-hidden="true">#</a> 2.8 特殊字符</h3>`,51),d={href:"https://blog.csdn.net/weixin_40848638/article/details/83269598",target:"_blank",rel:"noopener noreferrer"},r=n(`<ol><li>空格：&amp;nbsp；</li><li>小于号：&amp;lt；</li><li>大于号：&amp;gt；</li></ol><h3 id="_2-9-表格标签" tabindex="-1"><a class="header-anchor" href="#_2-9-表格标签" aria-hidden="true">#</a> 2.9 表格标签</h3><h4 id="_2-9-1-表格基本语法" tabindex="-1"><a class="header-anchor" href="#_2-9-1-表格基本语法" aria-hidden="true">#</a> 2.9.1 表格基本语法</h4><ol><li>定义表格：<code>&lt;table&gt;&lt;/table&gt;</code></li><li>定义行：<code>&lt;tr&gt;&lt;/tr&gt;</code></li><li>定义单元格 <code>&lt;td&gt;&lt;/td&gt;</code></li></ol><h4 id="_2-9-2-表头单元格标签" tabindex="-1"><a class="header-anchor" href="#_2-9-2-表头单元格标签" aria-hidden="true">#</a> 2.9.2 表头单元格标签</h4><ol><li><code>&lt;th&gt;&lt;/th&gt;</code></li><li>居中加粗显示</li></ol><h4 id="_2-9-3-表格属性" tabindex="-1"><a class="header-anchor" href="#_2-9-3-表格属性" aria-hidden="true">#</a> 2.9.3 表格属性</h4><ol><li>不常用，一般用css来设置</li><li>align：规定表格相对周围元素的对齐方式</li><li>border：规定边框</li><li>cellpadding：边沿和内容之间的空白</li><li>cellspacing：单元格之间的空白距离</li><li>width：表格宽度</li></ol><h4 id="_2-9-4-表格结构标签" tabindex="-1"><a class="header-anchor" href="#_2-9-4-表格结构标签" aria-hidden="true">#</a> 2.9.4 表格结构标签</h4><ol><li>头部区域标签：<code>&lt;thead&gt;&lt;/thead&gt;</code></li><li>主题区域标签：<code>&lt;tbody&gt;&lt;/tbody&gt;</code></li></ol><h4 id="_2-9-5-合并单元格" tabindex="-1"><a class="header-anchor" href="#_2-9-5-合并单元格" aria-hidden="true">#</a> 2.9.5 合并单元格</h4><h5 id="合并单元格方式" tabindex="-1"><a class="header-anchor" href="#合并单元格方式" aria-hidden="true">#</a> 合并单元格方式</h5><ol><li>跨行合并：rowapan=“合并单元格个数”</li><li>跨列合并：colspan=“合并单元格个数”</li></ol><h5 id="目标单元格" tabindex="-1"><a class="header-anchor" href="#目标单元格" aria-hidden="true">#</a> 目标单元格</h5><ol><li>跨行：最上侧</li><li>跨列：最左侧</li></ol><h3 id="_2-10-列表标签" tabindex="-1"><a class="header-anchor" href="#_2-10-列表标签" aria-hidden="true">#</a> 2.10 列表标签</h3><p>用于布局网页的</p><h4 id="_2-10-1-无序列表" tabindex="-1"><a class="header-anchor" href="#_2-10-1-无序列表" aria-hidden="true">#</a> 2.10.1 无序列表</h4><ol><li>无序列表语法格式</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>&lt; ul&gt;标签里只能出现&lt; li&gt;标签，不能出现其他内容</li><li>&lt; li&gt;标签里可以放任何标签，是一个容器</li><li>无序列表带有样式属性，实际使用的时候用css设置</li></ol><h4 id="_2-10-2-有序列表" tabindex="-1"><a class="header-anchor" href="#_2-10-2-有序列表" aria-hidden="true">#</a> 2.10.2 有序列表</h4><ol><li>有序列表语法格式</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>列表项2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>&lt; ol&gt;标签里只能出现&lt; li&gt;标签，不能出现其他内容</li><li>&lt; li&gt;标签里可以放任何标签，是一个容器</li><li>有序列表带有样式属性，实际使用的时候用css设置</li></ol><h4 id="_2-10-3-自定义列表" tabindex="-1"><a class="header-anchor" href="#_2-10-3-自定义列表" aria-hidden="true">#</a> 2.10.3 自定义列表</h4><ol><li>自定义列表语法格式</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>名词1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>名词1解释1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>名词1解释1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>&lt; dl&gt;标签里只能出现&lt; dt&gt;、&lt; dd&gt;标签，不能出现其他内容</li></ol><h3 id="_2-11-表单标签" tabindex="-1"><a class="header-anchor" href="#_2-11-表单标签" aria-hidden="true">#</a> 2.11 表单标签</h3><h4 id="_2-11-1-表单域" tabindex="-1"><a class="header-anchor" href="#_2-11-1-表单域" aria-hidden="true">#</a> 2.11.1 表单域</h4><ol><li>表单域是包含表单元素的区域，实现用户信息的收集和传递</li><li>表单域语法格式</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url地址<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提交方式<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>表单域名称<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>表单域属性 <ul><li>action：用于指定接收并处理表单数据的服务器程序的url地址</li><li>method：get/post，设置表单数据的提交方式</li><li>name：指定表单的名称</li></ul></li></ol><h4 id="_2-11-2-表单控件-表单元素" tabindex="-1"><a class="header-anchor" href="#_2-11-2-表单控件-表单元素" aria-hidden="true">#</a> 2.11.2 表单控件（表单元素）</h4><h5 id="input输入表单元素" tabindex="-1"><a class="header-anchor" href="#input输入表单元素" aria-hidden="true">#</a> input输入表单元素</h5><ol><li>语法规范 <code>&lt;input type=&quot;属性值&quot;/&gt;</code></li><li>input为单标签</li><li>type属性必须要写 <ul><li>text:文本，直接显示</li><li>password：文本，影藏显示</li><li>radio：单选按钮，圆的</li><li>checkbox：多选按钮，方的</li><li>submit:点击按钮将表单域的元素值送入后台</li><li>reset：重置表单域里的元素值</li><li>button：普通按钮，启动js脚本</li><li>file：文件域按钮，上传文件 <img src="https://i.loli.net/2020/11/25/reIfvEMKwmYdVjP.png" alt="QQ图片20201125203719.png" loading="lazy"></li></ul></li><li>name属性 单选按钮的表单元素name属性一致，才能实现多选一</li><li>value属性 表单元素默认值</li><li>checked属性 单选按钮和复选框的属性，显示默认勾选</li><li>maxlength 规定输入字段中的字符最大长度</li></ol><h5 id="label标签" tabindex="-1"><a class="header-anchor" href="#label标签" aria-hidden="true">#</a> label标签</h5><ol><li>点击label标签内的文本时，浏览器自动将光标转到对应的表单元素</li><li>语法规范</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>核心是label标签的for属性与相关元素的id属性相同</li></ol><h5 id="select下拉表单元素" tabindex="-1"><a class="header-anchor" href="#select下拉表单元素" aria-hidden="true">#</a> select下拉表单元素</h5><ol><li>语法规范</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">&gt;</span></span>选项1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">&gt;</span></span>选项2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>select里至少包含一个option</li><li>option里定义selected属性=“selected”默认选定</li></ol><h5 id="textarea-文本域表单元素" tabindex="-1"><a class="header-anchor" href="#textarea-文本域表单元素" aria-hidden="true">#</a> textarea 文本域表单元素</h5><ol><li>可以定义多行文本输入</li><li>语法规范 <code>&lt;textarea&gt;默认文字&lt;/textarea&gt;</code></li><li>cols属性设定一行显示的字数</li><li>rows属性设定显示多少行</li></ol><h4 id="提示信息" tabindex="-1"><a class="header-anchor" href="#提示信息" aria-hidden="true">#</a> 提示信息</h4><h2 id="_3-emmet语法" tabindex="-1"><a class="header-anchor" href="#_3-emmet语法" aria-hidden="true">#</a> 3 Emmet语法</h2><h3 id="_3-1-快速生成html" tabindex="-1"><a class="header-anchor" href="#_3-1-快速生成html" aria-hidden="true">#</a> 3.1 快速生成HTML</h3><ol><li>生成标签：直接输入标签名+ tab</li><li>生成多个标签：* tab</li><li>父子级关系： &gt; tab</li><li>兄弟级关系： + tab</li><li>带有类名： . 带有id名字： #</li><li>自增符号： $</li><li>标签默认文字用{}括起来</li></ol><h2 id="_4-html5-标签" tabindex="-1"><a class="header-anchor" href="#_4-html5-标签" aria-hidden="true">#</a> 4 HTML5 标签</h2><h3 id="_4-1-html5新增语义化标签" tabindex="-1"><a class="header-anchor" href="#_4-1-html5新增语义化标签" aria-hidden="true">#</a> 4.1 HTML5新增语义化标签</h3><ol><li>头部标签 <code>&lt;header&gt;</code></li><li>导航标签 <code>&lt;nav&gt;</code></li><li>内容标签 <code>&lt;article&gt;</code></li><li>定义文档某个区域 <code>&lt;section&gt;</code></li><li>侧边栏标签 <code>&lt;aside&gt;</code></li><li>尾部标签 <code>&lt;footer&gt;</code></li><li>这种语义化的标签主要是针对搜索引擎</li><li>新标签页面中可使用多次</li></ol><h3 id="_4-2-html5新增多媒体标签" tabindex="-1"><a class="header-anchor" href="#_4-2-html5新增多媒体标签" aria-hidden="true">#</a> 4.2 HTML5新增多媒体标签</h3><ol><li>音频标签 <code>&lt;audio&gt;</code></li><li>视频标签 <code>&lt;video&gt;</code></li></ol><h4 id="_4-2-1-视频标签" tabindex="-1"><a class="header-anchor" href="#_4-2-1-视频标签" aria-hidden="true">#</a> 4.2.1 视频标签</h4><ol><li>只支持三种视频格式：MP4; WebM; Ogg</li><li>尽量使用MP4</li><li>语法 <code>&lt;video src=&quot;文件地址&quot; controls=&quot;controls&quot;&gt;&lt;/video&gt;</code></li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>320<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>240<span class="token punctuation">&quot;</span></span> <span class="token attr-name">controls</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie.ogg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/ogg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie.webm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/webm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>320<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>240<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>embed</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie.swf<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>320<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>240<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>常见属性 <img src="https://i.loli.net/2021/03/09/6bJMcTtvLQrsouz.jpg" alt="视频常见属性.jpg" loading="lazy"></li></ol><h4 id="_4-2-2-音频标签" tabindex="-1"><a class="header-anchor" href="#_4-2-2-音频标签" aria-hidden="true">#</a> 4.2.2 音频标签</h4><ol><li>只支持三种音频格式：MP3; Wav; Ogg</li><li>都支持MP3</li><li>语法 <code>&lt;audio src=&quot;文件地址&quot; controls=&quot;controls&quot;&gt;&lt;/audio&gt;</code></li><li>常见属性 <img src="https://i.loli.net/2021/03/09/8KMULaAo41VZ7Ss.jpg" alt="音频常见属性.jpg" loading="lazy"></li></ol><h3 id="_4-3-html新增input类型" tabindex="-1"><a class="header-anchor" href="#_4-3-html新增input类型" aria-hidden="true">#</a> 4.3 HTML新增input类型</h3><p><img src="https://i.loli.net/2021/03/11/x9FTJQz1rdEcnyq.jpg" alt="input常见类型.jpg" loading="lazy"></p><h3 id="_4-4-html新增表单属性" tabindex="-1"><a class="header-anchor" href="#_4-4-html新增表单属性" aria-hidden="true">#</a> 4.4 HTML新增表单属性</h3><p><img src="https://i.loli.net/2021/03/11/7n6vgFai32RCPlk.jpg" alt="新增表单属性.jpg" loading="lazy"></p>`,66);function h(k,g){const s=e("ExternalLinkIcon");return l(),i("div",null,[u,a("p",null,[a("a",d,[o("特殊字符汇总(opens new window)"),p(s)])]),r])}const b=t(c,[["render",h],["__file","01html.html.vue"]]);export{b as default};