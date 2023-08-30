Vue.component('header-component', {
    template:
        <header>
        <h1> 中国传统节日</h1>
            <nav>
        <ul>
            <li><a href="#">主页</a></li>
            <li><a href="#">节日分类</a></li>
        </ul>
    </nav>
        </header>
});

new Vue({
    el: '#app'
});
