/**
 * Created by chenwenxiao on 2016/4/5.
 */
var dataBinder = (function($,con){
    var attr_bind = 'jq-bind';
    var setData = function(attr,newVal){
        $(attr).each(function(){
            if($(this).is('input,textarea,select')){
                $(this).val(newVal);
            }else{
                $(this).html(newVal);
            }
        });
        $('['+ attr_bind +'="' + attr + '"]').each(function(){
            if($(this).attr('type')!='radio'&&$(this).attr('type')!='checkbox'){
                $(this).val(newVal);
            }
        })
    }
    var binder = function(){
        $(document).on('change keydown keyup','[' + attr_bind +  ']',function(){
            var $this = $(this);
            if($this.is('input')){
                if($this.attr('type')=='checkbox'){
                    var d = [];
                    $('[name="' + $this.attr('name') + '"]').each(function(){
                        if($(this).prop('checked')){
                            d.push($(this).val());
                        }
                    });
                    setData($this.attr(attr_bind),d);
                }else if($this.attr('type')=='radio'){
                    $('[name="'+$this.attr('name') +'"]').each(function(){
                        if($(this).prop('checked')){
                            setData($this.attr(attr_bind),$(this).val());
                            return false;
                        }
                    });
                }else{
                    setData($this.attr(attr_bind),$this.val());
                }
            }else{
                setData($this.attr(attr_bind),$this.val());
            }
        });
    }
    con.setter = function (attr,newVal){
        setData(attr,newVal);
    }
    con.getter = function(attr){
        var obj = $("[" + attr_bind + "='"+ attr +"']");
        var val = '';
        var d = [];
        obj.each(function() {
            if ($(this).attr('type') == 'radio') {
                if ($(this).prop('checked')) {
                    val = $(this).val();
                }
            } else if ($(this).attr('type') == 'checkbox') {
                if ($(this).prop('checked')) {
                    d.push($(this).val());
                }
                val = d;
            } else {
                val = $(this).val();
            }
        });
        return val;
    }
    binder();
    return con;
})(jQuery||{},dataBinder||{});