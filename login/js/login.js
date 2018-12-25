var wait = 60;

function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "免费获取验证码";
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        // o.value="重新发送(" + wait + ")";
        o.value = "重新发送(" + wait + ")";
        wait--;
        setTimeout(function () {
                time(o)
            },
            1000)
    }
}

jQuery(function ($) {
    // 点击账号手机切换
    var Index=0
    $('.login .select li').click(function () {
        var i = $('.login .select li').index(this);
        Index=i;
        // $('#btn'+Index).css('color','red');
        $(this).addClass('current').siblings().removeClass('current');
        $('.shuru .checkTab').eq(i).addClass('show').siblings('.checkTab').removeClass('show')
    });
    // 循环input
    $(" input[ name='PhoneNumber'] ").blur(function () {
        var PhoneNumber = $(this).val();
        if ($.trim(PhoneNumber) == '') {
            $(" input[ name='PhoneNumber'] ").val('手机号码不能为空');
            return;
        } else if (!(/^1[3578][0-9]{9}$/).test(PhoneNumber)) {
            $(" input[ name='PhoneNumber'] ").val('手机号码格式错误');
            return;
        }
    })
    // 点击用户名登录

    // $('.loginUserName').click(function () {
    //     var UserName = $(" input[ name='UserName'] ").val();
    //     var PassCode = $(" input[ name='PassCode'] ").val();
    //     $(" input[ name='UserName'],input[ name='PassCode'] ").removeClass('error')
    //     console.log(UserName, PassCode)
    //     if (UserName == '') {
    //         $(" input[ name='UserName'] ").addClass('error');
    //         return;
    //     } else if (PassCode == '') {
    //         $(" input[ name='PassCode'] ").addClass('error');
    //     }
    // })
    //
    // // 点击手机登录
    // $('.loginPhone').click(function () {
    //     var PhoneNumber = $(" input[ name='PhoneNumber'] ").val();
    //     var SMSCode = $(" input[ name='SMSCode'] ").val();
    //     $(" input[ name='PhoneNumber'],input[ name='SMSCode'] ").removeClass('error')
    //     console.log(PhoneNumber, SMSCode)
    //     if (PhoneNumber == '' || !(/^1[3578][0-9]{9}$/).test(PhoneNumber)) {
    //         $(" input[ name='PhoneNumber'] ").addClass('error');
    //         return;
    //     } else if (SMSCode == '') {
    //         $(" input[ name='SMSCode'] ").addClass('error');
    //     }
    // })
})