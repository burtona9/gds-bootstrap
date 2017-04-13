  $(document).ready(function () {

      /* ajax call to get list  */
      var tagItems = ["weymouth library", "bridport library", "dorchester library", "weymouth college", "preston community books", "chickerell library", "puddletown library", "portland library", "poole library", "parkstone library"];

      setTagItems();

      $("#tagSubmitBtn").click(function () {
          var tagValue = $("#tag").val().toLowerCase().trim();
          if (tagValue == null || tagValue == "") {
              updateTagList();
              hideRecentList();
              $("#submittedMessage").hide();
          } else {
              var selectedInList = isSelectedInList(tagItems, tagValue);
              if (selectedInList >= 0) {
                  tagItems.splice(selectedInList, 1);
                  tagItems.unshift(tagValue);
              } else {
                  tagItems.unshift(tagValue);
                  tagItems.pop();
              }
              updateTagList();
              hideRecentList();
              $("#tag").val("");
              $("#tagInputContainer").hide();
              $(".loader").show();
              $("#submittedTag").html(tagValue);
              setTimeout(showResult, 3000);

          }
      });

      function showResult() {
          $(".loader").hide();
          $("#submittedMessage").show();


      }

      $("#tagList").on("click", ".list-group-item", function () {
          $("#tag").val($(this).text().toLowerCase());
          hideRecentList();
      })

      $("#tag").keyup(function () {
          var tagValue = $(this).val().toLowerCase().trim();
          if (tagValue == null || tagValue == "") {
              updateTagList();
              hideRecentList();
          } else {
              var tagSubItems = new Array();
              for (var i = 0; i < tagItems.length; i++) {
                  if (tagItems[i].indexOf(tagValue) >= 0)
                      tagSubItems.unshift(tagItems[i]);
              }
              updateTagList(tagSubItems);
              showRecentList();
          }
      });

      $("#recentLink").click(function () {
          $(this).find(".glyphicon").toggleClass("glyphicon-chevron-right").toggleClass("glyphicon-chevron-down");
      })

      function isSelectedInList(list, selected) {
          for (var i = 0; i < list.length; i++) {
              if (selected == list[i])
                  return i;
          }
          return -1;
      }

      function showRecentList() {
          $("#recentLink").removeClass("collapsed");
          $(".collapse").addClass("in");
          $("#recentLink").find(".glyphicon").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
      }

      function hideRecentList() {
          $("#recentLink").addClass("collapsed");
          $(".collapse").removeClass("in");
          $("#recentLink").find(".glyphicon").addClass("glyphicon-chevron-right").removeClass("glyphicon-chevron-down");

      }

      function updateTagList(subList) {
          var tagListElement = $("#tagList");
          tagListElement.empty();
          var items;
          if (subList == null)
              items = tagItems;
          else
              items = subList

          $.each(items, function (key, value) {
              tagListElement.append("<li class=\"list-group-item\"><a href=\"#\" class=\"recentTagItem\">" + value + "</a></li>");
          });
      }

      function setTagItems() {
          var tagListElement = $("#tagList");
          tagListElement.empty();
          $.each(tagItems, function (key, value) {
              tagListElement.append("<li class=\"list-group-item\"><a href=\"#\" class=\"recentTagItem\">" + value + "</a></li>");
          });
      }
  });