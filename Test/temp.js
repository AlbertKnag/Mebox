(function () {
    $.ajax({
        url: "http://" + window.location.host + "/servlet/MeboxSSO",
        type: "GET",
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Get Mebox token error!")
        },
        success: function (data, textStatus, jqXHR) {
            console.log(data)
            var obj = eval("(" + data + ")");
            for (var key in obj) {
                $.cookie(key, obj[key], {path: '/', domain: 'dcms.com'});
            }
        }
    });
})();

$("head").append("<script scr='http://oa.dcms.com/Application/demoOne.nsf/jquery.cookie.js' type='text/javascript'></script>")

$.when(
    $.getScript("http://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js")
).then(function () {
        var data = "{'accountURL':'/v1/706_9b0d3b9ae50f3645cd6fb6edb46fdbc8/','authToken':'AUTH_f36f52c9-94a7-4862-a520-3effaaada10b','roleID':'3','username':'squallzhong@vip.qq.com','nickname':'squallzhong'}";
        var obj = eval("(" + data + ")");
        for (var key in obj) {
            $.cookie(key, obj[key], {path: '/'});
        }
    });


/*
 Date: Thu, 15 May 2014 08:37:28 GMT
 X-Auth-Token: AUTH_f36f52c9-94a7-4862-a520-3effaaada10b
 X-Account-Url: /v1/706_9b0d3b9ae50f3645cd6fb6edb46fdbc8/
 X-Trans-Id: txd7807690dc72403da6e8867448546406
 Content-Length: 0
 X-Uid: 3
 X-Nickname: squallzhong*/

var aa = {"dirs": [
    [3, "/新建文件夹", null, 2],
    [4, "/文档", null, 1],
    [9, "/软件", null, 1],
    [5, "/文档/软航致新", null, 1]
], "files": [
    [15, "/Audi_Q3 说明书_中文版.pdf", 10, 3],
    [6, "/文档/软航致新/公司证件.rar", 1, 1],
    [7, "/文档/软航致新/北京办事处每月结算详细情况表2014年（1-3月）.xlsx", 2, 1],
    [8, "/文档/软航致新/北京办事处结算2014年（1-3月）.xls", 3, 1],
    [10, "/软件/跨浏览器测试示例.rar", 4, 1],
    [11, "/软件/中华人民共和国文化部文化市场司_NTKO_TIF&PDF插件_20140422.rar", 5, 1],
    [12, "/软件/中华人民共和国文化部文化市场司平台版20140422.rar", 6, 1],
    [13, "/软件/NTKO_OFFICE文档控件开发接口参考V5021.doc", 9, 1],
    [14, "/软件/T2S3-ExtractingImportantStatistics.pdf", 8, 1]
], "update_time": 1400144043}

//excel导入按钮创建
dojo.ready(function() {
    dojo.require("digiflow.util.ExcelProcesser");
    var fieldlist=['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14','C15','C16','C17','C18','C19','C20','C21','C22','C23','C24'];
    var button = digiflow.util.ExcelProcesser().getExcelToJsonButton(fieldlist, function(data) {
        var unid = DF_GetValue("DocUnid");
        if(unid==""){
            unid = dojo.query("span[id$=:DocUnid]")[0].innerHTML;
        }
        for(var i= 0,item;item=data[i++];){
            item['C25'] = unid+"_"+i;
            item['C26'] = '';
            item['C27'] = '';
            digiflow.DataGridManager().getGrid("woqiSap").store.newItem(item);
        }
    });
    button.placeAt(dojo.byId("#{id:excelpanel}"));
});
//excel导入按钮创建

/*
 *发起SAP请求
 */
function writeToSap(successButtonID){
    var grid = digiflow.DataGridManager().getGrid("woqiSap");
    digiflow.maskLayer.show("数据处理中，请稍后！");
    digichannel.exec({
        key:"WQSAP",
        async:true,
        callback:function(data){
            console.log("------------返回数据-----------");
            console.log(data);
            console.log("------------返回数据-----------");
            digiflow.maskLayer.hide();
        },
        error:function(data){digiflow.maskLayer.hide();}
    });
}




/**
 * 模板引擎，会尝试使用underscore的模板引擎，如果获取不到，使用基于John Resig’s Micro-Templating修改的简易模板引擎
 * @param {String} str 模板，或书写模板信息的dom节点 ID
 * @param {{}} data 渲染模板的数据
 * @return {*} 渲染结果
 */
digichannel.template = ("_" in window && $.isFunction(_.template)) ? _.template : function(str, data, variable) {
    // Generate a reusable function that will serve as a template
    var source = "__p+='" + str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "'+((__t=($1))==null?'':__t)+'").split("\t").join("';").split("%>").join("__p+='").split("\r").join("\\'") + "';\n";
    if (!variable) {
        source = "with(obj||{}){\n" + source + "}\n";
    }
    source = "var __p='',__t='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;";
    var fn = new Function(variable || "obj", source);
    // Provide some basic currying to the user
    return data ? fn(data) : fn;
};
//http://underscorejs.org/

_d.template = (function() {
    var cache = {};
    return function(str, data) {
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ? cache[str] = cache[str] || _d.template(document.getElementById(str).innerHTML) :
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

function anonymous(obj) {
    var p=[],print=function(){
        p.push.apply(p,arguments);
    };
    with(obj){
        p.push('<a>',name,'</a>');
    }
    return p.join('');
}


//<![CDATA[
//前端模板数据部分
var data = {
    "list" : [
        {"id" : 1,"name" : "数据1"},
        {"id" : 2,"name" : "数据2"},
        {"id" : 3,"name" : "数据3"},
        {"id" : 4,"name" : "数据4"},
        {"id" : 5,"name" : "数据5"},
        {"id" : 6,"name" : "数据6"},
        {"id" : 7,"name" : "数据7"},
        {"id" : 8,"name" : "数据8"},
        {"id" : 9,"name" : "数据9"},
        {"id" : 10,"name" : "数据10"}
    ]
};

//业务逻辑部分
var action = {
    sort:function(list, inc){
        $("sort").className = inc?"down":"up";
        list.sort(function(a, b){
            return (inc?1:-1)*a.name.localeCompare(b.name);
        });
        render(data);
    },
    create : function(name){
        data.list.unshift({id: +new Date(),name: name});
        render(data);
    },
    edit : function(id){
        each(data.list, function(value, i){
            data.list[i].state = value.id == id ? "edit" : "normal";
        });
        render(data);
    },
    del : function(id){
        each(data.list, function(value, i){
            if(value.id == id){
                data.list.splice(i,1);
            }
        });
        render(data);
    },
    save : function(id){
        each(data.list, function(value, i){
            if(value.id == id){
                value.name = $("g_" + id).value;
                value.state = "normal";
            }
        });
        render(data);
    },
    cancel : function(id){
        each(data.list, function(value, i){
            data.list[i].state = "normal";
        });
        render(data);
    }
};
function $(id){
    return document.getElementById(id);
}
function each(obj, fn){
    for (var i = 0; i < obj.length; i++) {
        fn.call(obj[i], obj[i], i);
    }
}

var teamList = baidu.template('teamList');
function render(data){
    $("container").innerHTML = teamList(data);
}

window.onload = function(){
    render(data);
};
//]]>


var cc = {'URL':'http://192.168.1.158','X-Account-Url':'/v1/706_9b0d3b9ae50f3645cd6fb6edb46fdbc8/','signature':'7d904e86c314023746505ccf74fbd940f1f97f5e','expires':'1402039102'};