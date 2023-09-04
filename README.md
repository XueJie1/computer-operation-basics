[English Version (translated by ChatGPT)](./README_en.md)

# 💩山警告！
此项目存在的问题（包括但不限于）：
* 命名不规范
* 代码重用过多（如 `<header>`，`<footer>`以及js）
# 这是啥
这是河北科技大学信息学院的大二上学期的计算机操作实习任务之一：编写一个主题网页。

# 实习课程要求
以下来自实习课程要求：
## 任务选择
* 选择一个主题，围绕一个主题进行展开，每个人负责一个模块。
* 例如：魅力河北：可以分不同的地区、特色进行介绍。

	 传统节日：春节、元宵节、中秋节。。。

## 要求
* 工作量有要求：每个人所做页面不少于10个（低于10个不及格）
* 设计内容要求：网站主题积极向上，不允许违法网站，不允许游戏。
* 网页链接要求：每个网页都能浏览到，要求能返回或连接到主页，不能通过浏览器的后退访问其他网页。
* 网页设计要求：网页的内容尽量控制。不能只把文字和图片添加网页，不做控制。
* HTML标签应尽量应用。不少于10种

## 工具选择
Dreamweaver（推荐）、VS、VS code、WebStorm或其他自选工具。

# 给团队中其他人的说明
要做的事：在 `/pages/节日名/网页名.html`处“填空”就行。

`网页名`是`cuisine.html` `customs.html` `history.html` `introduction.html` `legend.html`中的一个，不包括如`qixifestival.html`，因为已经写好了。

先学一点[HTML知识](https://www.runoob.com/html/html-basic.html)：

`<h1>这里填1号标题</h1>`

`<h2>这里填2号标题</h2>`

`<h3>这里填3号标题</h3>`

`<p>这里填正文的一个段落</p>`

## 约定
### 标题和段落
约定2号标题`<h2></h2>`为大标题，3号标题`<h3></h3>`为小标题，`<p></p>`为正文的一个段落。
### 图片
```
<div class="img">
	<img src="图片位置">
</div>
```
把以上代码复制粘贴到插入图片的位置，把代码里的“图片位置”替换成本地路径（[学习相对路径](https://zhuanlan.zhihu.com/p/263756528)）或HTTP链接（如http://www.google.cn/intl/zh-CN_cn/landing/cnexp/google-search.png，不推荐，无网络时无法显示）。