/**
 * Created by zhongpei on 16/7/22.
 */
function fCheckSidebar() {
    var $sidebar = $('#my-sidebar');
    var $documentTop = $(document).scrollTop();
    if ($documentTop >= 82 && $documentTop <= 2080) {
        $sidebar.addClass("my-sidebar-middle");
        $sidebar.removeClass("my-sidebar-bottom");
    } else if ($documentTop > 2080) {
        $sidebar.addClass("my-sidebar-bottom");
    } else {
        $sidebar.removeClass("my-sidebar-middle");
        $sidebar.removeClass("my-sidebar-bottom");
    }

    if ($documentTop < $("#process-list").offset().top - 40) {
        $("#my-sidebar li:eq(0)").addClass("active");
    } else {
        $("#my-sidebar li:eq(0)").removeClass("active");
    }

    if ($documentTop >= $("#process-list").offset().top - 40 && $(document).scrollTop() < $("#filesystem").offset().top - 40) {
        $("#my-sidebar li:eq(1)").addClass("active");
    } else {
        $("#my-sidebar li:eq(1)").removeClass("active");
    }

    if ($documentTop >= $("#filesystem").offset().top - 40) {
        $("#my-sidebar li:eq(2)").addClass("active");
    } else {
        $("#my-sidebar li:eq(2)").removeClass("active");
    }
}