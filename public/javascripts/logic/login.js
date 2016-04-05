/**
 * Created by chenwenxiao on 2016/3/31.
 */
(function($){
    $(function(){
        login_poto();
        function login_poto(){
            var random_bg=Math.floor(Math.random()*14+1);
            var bg='url(/images/login/bg-'+random_bg+'.jpg)';
            $("body").css("background-image",bg);
            $(window).resize(function(){
                var $height=$("body").height();
                if($height<540){
                    $(".bss_login_main").addClass("relative")
                }else{
                    $(".bss_login_main").removeClass("relative")
                    $("body").css("background-image",bg);
                }
            });
        }

        $('#login').click(function(){
            var data = {};
            $('#loginForm').find('input').each(function(){
                if($(this).attr('name')!=undefined){
                    data[$(this).attr('name')] = $(this).val();
                }
            });
            $.ajax({
                type:'get',
                url:'/api/getLogin',
                datatype:'json',
                success:function(data){
                    data = eval('('+ data +')');
                    if(data.code != '000000'){
                        alert(data.desc);
                    }else{
                        alert(data.desc);
                        window.location.href = '/';
                    }
                },
                data:data
            });
        });
    });
})(jQuery||{});
