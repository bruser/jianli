/**
 * Created by Bruse on 2017/2/25.
 */



$(function() {

    //    整屏滚动
    $('#resume').fullpage({

        // sectionsColor: ['transparent', 'transparent', '#e4e4e4', 'rgba(255, 255, 255, .0)', 'transparent', 'transparent'],
        scrollingSpeed: 700,
        //滚动速度，单位为毫秒

        navigation: true,
        // 上下导航条显示
        normalScrollElementTouchThreshold: 5,

        easing: 'easeInOut',
        //动画方程

        slidesNavigation: true,
        // 是否显示左右滑块的项目导航

        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        // 锚点连接设置

        controlArrowColor: '#16BA9D',
        //左右滑块的颜色

        loopHorizontal: false,
        //左右滑块循环

        // scrollOverflow: true,

        // resize: true,

        // navigationPosition: 'left',

        menu: '#menu',
        // 绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动


        afterRender: function() {


            var Tooltips = ['首页', '自我介绍', '专业技能', '作品展示', '工作经历', '自我评价'];
            $("#fp-nav ul li").each(function(index) {
                this.dataset['toggle'] = 'tooltip';
                this.dataset['placement'] = 'left';
                $(this).attr('title', Tooltips[index])
            })


            $('[data-toggle="tooltip"]').tooltip();
            // 顶部导航栏自动会拉事件
            if ($('.navbar-toggle').css('display') == 'block') {
                $('.navbar-collapse li').on('click', function() {
                    $('.navbar-toggle').trigger('click');
                });
                $('.navbar-collapse ul').css({
                    'z-index': '100',
                    'backgroundColor': '#ccc'
                })
            }

            //箭头导航
            $('.item-1 .next-page').on('click', function() {
                $.fn.fullpage.moveSectionDown();
            });



            //    侧边导航事件 给侧边导航加上   自定义锚点 与提示

        },

        //滚动触发后 结束前的回调 即从当前页面跳转到下一个页面
        onLeave: function(index, nextIndex, dircetion) {
            if (nextIndex == 4) {
                $('.sky').show();
            }

            if (nextIndex == 5) {
                $('.sky').hide();
            }


            switch (index) {
                case 1:
                    $('.resume-hide').hide();
                    $('.navbar').removeClass('black');
                    break;

                case 2:
                    $('.item-2 .container').hide();
                    break;

                case 3:
                    $('.item-3 .container').hide();
                    $('.navbar').removeClass('blue');
                    break;
                case 4:

                    $('.item-4 .container').hide();
                    break;
                case 5:

                    $('.one1').css('transform', 'translateX(-200%)');
                    $('.one2').css('transform', 'translateX(200%)');
                    $('.one3').css('transform', 'translateY(-200%)');
                    $('.one4').css('transform', 'translateY(200%)');
                    $('.item-5 .content').hide();
                    break;

            }
        },







        //    滚动结束后回调函数
        //    滚动到当前页面后，并且滚动结束触发
        afterLoad: function(anchorLink, index) {



            switch (anchorLink) {
                case 'page1':
                    // alert(1111);
                    $('.resume-hide').show();
                    $('.navbar').addClass('black');
                    break;
                case 'page2':
                    $('.item-2 .container').show();
                    break;
                case 'page3':
                    // alert(1111)
                    $('.item-3 .container').show();
                    $('.navbar').addClass('blue');

                    break;
                case 'page4':
                    //xiangmu
                    $('.item-4 .container').show();
                    break;

                case 'page5':
                    $('.item-5 .content').show(1000);
                    setTimeout(function() {

                        $('.go').css('transform', 'translateX(0px)');
                    }, 500)

                    break;
            }
        }

    });

    // 分布导航效果
    (function() {
        $('.grade_tab ul').on("click", 'li', function() {
            $('.detail')
                .eq($(this).index()).css('display', 'block')
                .siblings().css('display', 'none');





        })







    })()

});