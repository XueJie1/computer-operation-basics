<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
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
</script>