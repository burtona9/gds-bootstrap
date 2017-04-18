   $(function () {
       $(".error-summary").focus();
       /* Radio button group, set classes to apply styles */
       $(".selection-button-radio").change(function () {
           var name = $(this).find("input").attr("name");
           $("input[name=" + name + "]").closest(".block-label").removeClass("selected");
           $(this).addClass("selected");
       });

       /* Checkbox, set classes to apply styles */
       $("input[type=checkbox]").change(function () {
           if ($(this).is(":checked")) {
               $(this).closest(".selection-button-checkbox").addClass('selected');
               $(this).attr("checked", true);
           } else {
               $(this).closest(".selection-button-checkbox").removeClass('selected');
               $(this).attr("checked", false);
           }
       });


       /* Set focus state classes to apply styles */
       $("input[type=radio]").focus(function () {
           $(this).closest('.selection-button-radio').addClass('focused');

       });
       $("input[type=radio]").focusout(function () {
           $(this).closest('.selection-button-radio').removeClass('focused');
       });

       $("input[type=checkbox]").focus(function () {
           $(this).closest('.selection-button-checkbox').addClass('focused');
       });
       $("input[type=checkbox]").focusout(function () {
           $(this).closest('.selection-button-checkbox').removeClass('focused');
       });


       /* collapsable checkboxes, with accordion behaviour */
       $(".radio-collapse").change(function () {
           if ($(this).is(':checked')) {
               $(this).closest(".radio").siblings('.radio').children('.collapse').removeClass('in');
               $(this).closest(".selection-button-radio").next(".collapse").addClass("in");
           }
       });

   });