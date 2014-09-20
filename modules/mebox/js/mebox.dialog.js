/**
 * 弹出框组件
 Example：

 */
(function(factory) {
    var d = window.mebox || (window.mebox = {});
    d.createDialog || (d.createDialog = factory(jQuery));

    if (typeof define === "function" && define.cmd) {
        define(function(require, exports, module) {
            exports.createDialog = d.createDialog;
        });
    }
})(function($){
    var cache = {};
    return function(config){
        if(cache[config.id]){
            return cache[config.id].modal("show");
        }
        var dialogHTML = [];
        dialogHTML.push('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" id="'+ config.id +'">');
        dialogHTML.push('<div class="modal-dialog" style="margin:50px auto;width:'+config.width+'">');
        dialogHTML.push('<div class="modal-content">');
        dialogHTML.push('<div class="modal-header">');
        dialogHTML.push('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>');
        dialogHTML.push('<h4 class="modal-title">'+ config.title +'</h4>');
        dialogHTML.push('</div>');
        dialogHTML.push('<div class="modal-body" style="min-height:388px;_height:388px"></div>');
        dialogHTML.push('<div class="modal-footer" style="padding: 10px 20px 10px;margin-top:0"></div>');
        dialogHTML.push('</div></div></div>');
        var $root   = $(dialogHTML.join(""));

        var setFoot = function(buttons){
            if(buttons && buttons.length){
                var $foot = $root.find("div[class='modal-footer']").empty();
                for(var i= 0,b;b=buttons[i++];){
                    $foot.append($('<button type="button" class="btn btn-primary" id="'+ b.id+'">'+ b.name +'</button>').bind("click", b.callback));
                }
                return $foot.append('<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>');
            }
        };

        //增加body内容
        var $body   = $root.find("div[class='modal-body']").append(config.body || "");
        //增加操作按钮
        setFoot(config.buttons);
        //把dialog的DOM放到body上
        $("body").append($root);
        //dialog初始化
        cache[config.id] = $("#"+config.id).modal(config.modal || 'show');

        //取得body
        cache[config.id]["getBody"] = function(){
            return $body;
        };
        //设置body
        cache[config.id]["setBody"] = function(body){
            $body.empty().append(body);
        };
        //取得foot
        cache[config.id]["getFoot"] = function(){
            return $root.find("div[class='modal-footer']");
        };
        //设置foot操作栏
        cache[config.id]["setFoot"] = setFoot;
        //设置title
        cache[config.id]["setTitle"] = function(title){
            $root.find("h4[class='modal-title']").empty().append(title);
        };
        return cache[config.id];
    };
});
//@ sourceURL=mebox.dialog.js