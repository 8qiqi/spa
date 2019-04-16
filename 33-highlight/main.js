$(function() {
    var e = new Behave({
        textarea: $(".main textarea").get(0),
        replaceTab: !0,
        softTabs: !0,
        tabSize: 2,
        autoOpen: !0,
        overwrite: !0,
        autoStrip: !0,
        autoIndent: !0,
        fence: !1
    });
    return $('input[type="button"]').click(function() {
        var e = $('<div><pre class="javascript"></pre></div>')
          , t = $(".main textarea");
        "" !== t.val() && (e.find("pre").html(t.val()),
        hljs.highlightBlock(e.find("pre").get(0)),
        $(".main").append(e))
    }),
    e
});

