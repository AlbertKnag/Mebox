/**
 * Created by YiYing on 2014/5/19.
 */

(function(me,$,WebUploader,undefined){

    var dialog = null,curPath="",selected=[],curUser="";
    me.UNIDOBJ = {};
    me.createUploadDialog = function(UNID){
        curUser = document.getElementById("e-"+UNID+"-from").innerHTML;
        var buttons = [];
        buttons.push(
            {name:"确定",callback:function(){
                getOutLink(UNID);
                $("#me_UploadDialog").modal('hide');
            }}
        );
        dialog = me.createDialog({id:"me_UploadDialog"});
        dialog.setBody(template("T_dialogContent",""));
        dialog.setTitle("添加超大附件");
        dialog.setFoot(buttons).hide();
        //附件初始化
        InitUploader();
    };

    me.showFileList = function(path){
        path = path || "";
        $.ajax({
            url: "http://" + window.location.host + "/servlet/Mebox/GetFileList",
            type: "Post",
            data:'{"curUser":"'+curUser+'","path":"'+encodeURI(path)+'"}',
            success: function (data, textStatus, jqXHR) {
                //更新当前路径,清空已选择项
                curPath = path;selected=[];
                //设置title
                setDialogTitle(curPath);

                var obj = eval("(" + data + ")");
                var body = [];
                body.push('<table class="table table-hover" style="font-family: \'lucida Grande\', Verdana;font-size: 12px;">');
                body.push('<thead><th></th><th>文件名</th><th>大小</th><th>修改日期</th></thead>');
                var dirs = obj.dirs,fileName;
                for (var i = 0,dir;dir=dirs[i++];) {
                    fileName = '<a onclick="mebox.showFileList(\''+curPath + dir[0]+'/\')"><span class="file-name folder-icon"></span>'+dir[0]+'</a>';
                    body.push('<tr><td></td><td>'+fileName+'</td><td></td><td>'+dir[4]+'</td></tr>');
                }
                var files = obj.files,fileType;
                for(var j= 0,file;file=files[j++];){
                    fileType = file[0].substring(file[0].lastIndexOf(".")+1,file[0].length);
                    fileName = '<a><span class="file-name '+fileType+'-icon"></span></a>'+file[0];
                    body.push('<tr><td><span class="span-radio"></span></td><td>'+fileName+'</td><td>'+WebUploader.Base.formatSize(file[1], 2, ['B', 'K', 'M', 'G', 'TB'] )+'</td><td>'+file[4]+'</td></tr>');
                }
                body.push('</table>');
                dialog.setBody(body.join(""));
                dialog.getFoot().show();
                //选中radio样式切换
                $("table tr").bind("click",function(){
                    var radio = this.firstChild.firstChild;
                    if(radio){
                        var fileName = $(radio.parentNode.nextSibling).text();
                        var path = curPath + fileName;
                        if(radio.className == "span-radio"){
                            $(radio).removeClass().addClass("span-radio-selected");
                            selected.push({"name":fileName,"size":$(radio.parentNode.nextSibling.nextSibling).text(),"path":path});
                        }else{
                            $(radio).removeClass().addClass("span-radio");
                            var index;
                            for(var i= 0,item;item=selected[i++];){
                                item.path==path ? (index=i):"";
                            }
                            selected.splice(index-1,1);
                        }
                    }
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Get FileList error!")
            }
        });
    };

    me.removeFile = function(_this,UNID){
        $(_this.parentNode).remove();
        $("#LargeFileList").val($("#showLargeFileListId").html());
        document.getElementById("e-"+UNID+"-LargeFileList").value = document.getElementById("e-"+UNID+"-ShowLargeFileListId").innerHTML;
        //重新设置邮件界面布局
        setMailLayout(UNID);
    };

    function setDialogTitle(path){
        var temp = [];
        if(path){
            var arr = path.split("/");
            var len = arr.length,count="";
            temp.push("<a onclick='mebox.showFileList()'>首页</a>");
            for(var i= 0;i<len-1;i++){
                count = count + arr[i]+"/";
                if(i==len-2){
                    temp.push(arr[len-2]);
                }else{
                    temp.push("<a onclick='mebox.showFileList(\""+count+"\")'>"+arr[i]+"</a>");
                }
            }
        }else{
            temp.push("首页");
        }
        dialog.setTitle(temp.join("/"));
    }

    function getOutLink(UNID){
        var fileNames = "",targetArr=[],arr=[];
        mebox.uploader["successList"].length ? (targetArr=mebox.uploader["successList"]) : (targetArr=selected);
        for(var i= 0,item;item=targetArr[i++];){
            arr.push(item.path);
        }
        fileNames = arr.join("-_-");
        fileNames?$.ajax({
            url: "http://" + window.location.host + "/servlet/Mebox/GetOutLink",
            type: "POST",
            data:'{"curUser":"'+curUser+'","fileNames":"'+encodeURI(fileNames)+'"}',
            success: function (data, textStatus, jqXHR) {
                //console.log(data);
                var obj = eval("(" + data + ")");
                //console.log(obj);
                var tempArr = [];
                for(var i= 0,item;item=obj[i++];){
                    for(var j= 0,file;file=targetArr[j++];){
                        if(decodeURI(item.name)==file.path){
                            file.URL = item.URL;
                            tempArr.push(file);
                        }
                    }
                }
                var $panel = $(document.getElementById("e-"+UNID+"-ShowLargeFileListId"));
                $panel.append(template("T_ShowLargeFile",{"files":tempArr}));
                $(document.getElementById("e-"+UNID+"-LargeFileList")).val($panel.html());
                //重新设置邮件界面布局
                setMailLayout(UNID);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Get OutLink error!")
            }
        }):"";
    }

    //选完附件后，控制邮件布局
    function setMailLayout(UNID){
        setTimeout(function(){
            document.getElementById("e-"+UNID+"-recipients").style.height = "";
            var h = document.getElementById("e-"+UNID+"-recipients").offsetHeight+15;
            document.getElementById("e-"+UNID+"-body-commands").style.top = h+"px";
            document.getElementById("e-"+UNID+"-editorarea").style.paddingTop = (h+30)+"px";
        },500)
    }

    //邮件发送扩展
    me.sendMailExtend = function(UNID){
        this.UNIDOBJ[UNID] = UNID;
        //获得当前页签的文档id
        var getCurUNID = function(){
            for(var key in me.UNIDOBJ){
                var form = $(document.getElementById("e-"+key+"-ShowLargeFileListId")).parents("form");
                if(form && form.parent().parent().get(0) && form.parent().parent().get(0).style.top==""){
                    return key;
                }
            }
        };
        var fun = function(){
            var curUNID = getCurUNID();
            if(curUNID){
                //去除附件列表中的删除链接
                var tempStr = document.getElementById("e-"+curUNID+"-ShowLargeFileListId").innerHTML;
                if(tempStr){
                    tempStr     = tempStr.replace(/<a onclick=(.*?)>删除<\/a>/g,"");
                    document.getElementById("e-"+curUNID+"-LargeFileList").value = tempStr;
                    //向正文中增加附件
                    var body = document.getElementById("e-"+curUNID+"-bodyrich-editorframe").contentDocument.body;
                    var LF = $(body).find("div[id='mailBody-LF']");
                    if(LF.length){
                        LF.remove();
                    }
                    var fileListContent = template("T_LF_MailBody",{fileList:tempStr.replace(/<img src=(.*?)">/g,"")});
                    body.innerHTML = '<div style="min-height: 70%">'+(body.innerHTML || "&nbsp;")+"</div>"+ fileListContent;
                }
            }
        };

        /*setTimeout(function(){
            //为[发送/发送并归档]增加扩展事件
            if(UNID.substring(0,5)=="$new-"){
                $("#e-actions-mailedit-send-text,#e-actions-mailedit-sendandfile-text").unbind("click").bind("click",fun);
            }else{
                $("#e-actions-maileditdraft-send-text,#e-actions-maileditdraft-sendandfile-text").unbind("click").bind("click",fun);
            }
        },2000);*/

};

    //简单模板引擎
    var template = (function() {
        var cache = {};
        return function(str, data) {
            // Figure out if we're getting a template, or if we need to
            // load the template - and be sure to cache the result.
            var fn = !/\W/.test(str) ? cache[str] = cache[str] || template(document.getElementById(str).innerHTML) :
                // Generate a reusable function that will serve as a template
                // generator (and which will be cached).
                new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +
                    // Introduce the data as local variables using with(){}
                    "with(obj){p.push('" +
                    // Convert the template into pure JavaScript
                    str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
            // Provide some basic currying to the user
            return data ? fn(data) : fn;
        };
    })();



    /*--------------------------------------------附件上传相关-------------------------------------------------*/
    var InitUploader = function(){
        var uploader = WebUploader.create({
            //选完文件后，是否自动上传。
            auto: true,
            swf: '/Mebox/modules/webuploader/Uploader.swf',
            pick: '#filePicker',
            //是否分片上传
            //chunked:true
            threads:1,
            paste: document.body,
            dnd:document.body
        });

        uploader["successList"] = [];

        //当一批文件添加进队列以后触发。
        uploader.on( 'filesQueued', function( files ) {
            var body = dialog.getBody();
            var fileItem = template("T_FileUploadContent",{"files":files});
            var FU_content = body.find("div[class='FU_content']");
            if(FU_content.length){
                FU_content.append(fileItem);
            }else{
                body.append($("#filePicker")).append('<div class="FU_content">'+ fileItem +'</div>');
                this.options.dnd = "body";
                this.options.paste = "body";
                body.find(">:first-child").remove();
                dialog.getFoot().show();
            }
        });
        //某个文件开始上传前触发，一个文件只会触发一次。设置每个文件的上传URL
        uploader.on( 'uploadStart', function( file ) {
            var _this = this;
            setOperation(file.id,['icon_att_pause']);
            $.ajax({
                url: "http://" + window.location.host + "/servlet/Mebox/GetUploadURL",
                type: "POST",
                async:false,
                data:'{"curUser":"'+curUser+'","filePath":"'+file.name+'"}',
                success: function (data, textStatus, jqXHR) {
                    var dataObj=eval("("+data+")");
                    _this.options.server = dataObj.URL+dataObj.X_Account_Url+file.name+"?signature="+ dataObj.signature +"&expires="+ dataObj.expires +"&op=keephistory";
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Get GetUploadURL error!")
                }
            });
        });
        //上传进度条设置
        uploader.on( 'uploadProgress', function( file, percentage ) {
            $("#progress_"+file.id).css( 'width', percentage * 100 + '%' );
        });
        //当文件上传出错时触发
        uploader.on( 'uploadError', function( file, reason ) {
            $("#progress_"+file.id).parent().hide();
            $("#status_"+file.id).css("color","#C00").html("上传失败").show();
            setOperation(file.id,['icon_att_del']);
        });
        //当文件上传成功时触发
        uploader.on( 'uploadSuccess', function( file, response ) {
            $("#progress_"+file.id).parent().hide();
            $("#status_"+file.id).css("color","#999999").html("完成").show();
            setOperation(file.id,['icon_att_finish']);
            file.size = WebUploader.Base.formatSize(file.size, 2, ['B', 'K', 'M', 'G', 'TB']);
            file.path = file.name;
            uploader["successList"].push(file);
        });

        me.uploader = uploader;
        setTimeout(function(){uploader.refresh();},1000);

        var setOperation = function(id,arr){
            var obj = $("#operation_"+id).empty();
            for(var i= 0,item;item=arr[i++];){
                var $Content = $('<span class="icon_att '+item+'"></span>');
                switch(item){
                    case "icon_att_del":
                        //删除文件
                        $Content.bind("click",function(){
                            $(this.parentNode.parentNode).remove();
                            //uploader.removeFile(id);
                            uploader.skipFile(uploader.getFile(id));
                            var nextFileId = id.replace(/(.+)_(\d+)$/, function(matchStr,s1,s2,index,strSelf){return s1+"_"+(parseInt(s2)+1)});
                            if(nextFileId!=id){
                                setOperation(nextFileId,['icon_att_coutinue','icon_att_del']);
                            }
                        });
                        break;
                    case "icon_att_coutinue":
                        //继续上传
                        $Content.bind("click",function(){
                            uploader.upload();
                            setOperation(id,['icon_att_pause']);
                        });
                        break;
                    case "icon_att_pause":
                        //暂停上传
                        $Content.bind("click",function(){
                            uploader.stop(true);
                            setOperation(id,['icon_att_coutinue','icon_att_del'])
                        });
                        break;
                }
                obj.append($Content);
            }
        }
    };

})(window.mebox || (window.mebox = {}), jQuery,WebUploader);
//@ sourceURL=mebox.js