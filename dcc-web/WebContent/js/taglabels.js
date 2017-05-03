$(document).ready(function () {

    /* ajax call to get items  */
    var tagItems = ["weymouth library", "bridport library", "dorchester library", "weymouth college", "preston community books", "chickerell library", "puddletown library", "portland library", "poole library", "parkstone library"];

    setTagItems();

    $("#tagSubmitBtn").click(function () {

        var selected = $("#tag").val().toLowerCase().trim();

        if (selected == null || selected == "")
            return;

        var selectedInList = isSelectedInList(tagItems, selected);
        if (selectedInList >= 0) {
            tagItems.splice(selectedInList, 1);
            tagItems.unshift(selected);
        } else {
            tagItems.unshift(selected);
            tagItems.pop();
        }
        var tagList = $("#tagList");
        tagList.html("");
        $.each(tagItems, function (key, value) {
            tagList.append("<span class=\"label label-primary tag-label\">" + value + "</span>");
        });
        $("#tag").val("");
        $("#submittedMessage").show();
        $("#submittedTag").html(selected);

    });

    $("#tagList").on("click", ".tag-label", function () {
        $("#tag").val($(this).text().toLowerCase());
    })

    function isSelectedInList(list, selected) {
        for (var i = 0; i < list.length; i++) {
            if (selected == list[i])
                return i;
        }
        return -1;
    }

    function setTagItems() {
        var tagLabelsElement = $("#tagList");
        tagLabelsElement.html("");

        $.each(tagItems, function (key, value) {
            tagLabelsElement.append("<span class=\"label label-primary tag-label\">" + value + "</span>");
        });
    }
});