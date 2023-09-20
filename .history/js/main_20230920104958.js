
    $(document).ready(function () {
        // 为侧边栏链接绑定点击事件
        $('.sidebar a').on('click', function (e) {
            e.preventDefault(); // 阻止默认链接行为

            // 获取点击链接的href属性值
            var target = $(this).attr('href');

            // 隐藏所有的section
            $('main section').hide();

            // 显示目标section
            $(target).show();
        });
    });
    // 调整iframe标签自适应大小
function adjustIframe(){
        var ifm= document.getElementById("bi_iframe");
        ifm.height=document.documentElement.clientHeight;
        ifm.width=document.documentElement.clientWidth;
}