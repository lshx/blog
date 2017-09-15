/**
 * Created by lishengxi on 2017/9/15.
 */
(function () {
    var pages = Constants.PAGE;

    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var panel = '<div class="panel panel-default"><div class="panel-body">' +
            '<a target="_blank" href="' + page.url + '">' + page.title + '</a>' +
            '<p>' + page.remark + '</p>' +
            '</div>' +
            '<div class="panel-footer">' +
            '<div class="btn-group" role="group" aria-label="">';
        for(var j = 0; j < page.tag.length; j++){
            panel += '<button type="button" class="btn btn-default">'+page.tag[j]+'</button>';
        }
        panel += '</div>' +
            '<span>' + page.date + '</span>' +
            '</div>' +
            '</div>';
        $('.panels').append(panel);
    }
})();

