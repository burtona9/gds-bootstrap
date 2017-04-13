  $(function () {
      $("#day, #month, #year").keyup(function () {
          var dayError = checkDay();
          var monthError = checkMonth();
          var yearError = checkYear();
          var errors = null;


          if (dayError != null && dayError != "")
              errors = dayError;
          if (monthError != null && monthError != "") {
              if (monthError != "Enter number values only" || errors != "Enter number values only") {
                  if (errors == null)
                      errors = monthError;
                  else
                      errors += ", " + monthError;
              }
          }
          if (yearError != null && yearError != "") {
              if (errors == null || yearError != "Enter number values only" || errors.indexOf("Enter number values only") == -1)
                  errors = yearError;
              else if (yearError != "Enter number values only" || errors.indexOf("Enter number values only") == -1)
                  errors += ", " + yearError;
          }

          console.log("errors: " + errors);
          if (errors != null)
              setDobError(errors);
          else
              clearDobError();
      })


      function checkDay() {
          var dayValue = $("#day").val();
          if (dayValue == null || dayValue == "") {
              return;
          } else if (!jQuery.isNumeric(dayValue)) {
              return "Enter number values only";
          } else if (dayValue > 31)
              return "Day too high";
          else if (checkDayValidForMonth() != null) {
              return checkDayValidForMonth();
          } else {
              return;
          }
      }

      function checkMonth() {
          var monthValue = $("#month").val();

          if (monthValue == null || monthValue == "") {
              return;
          } else if (!jQuery.isNumeric(monthValue)) {
              return "Enter number values only";
          } else if (monthValue > 12) {
              return "Month too high";
          } else {
              return;
          }
      }

      function checkYear() {
          var yearValue = $("#year").val();

          if (yearValue == null || yearValue == "") {
              return;
          } else if (!jQuery.isNumeric(yearValue)) {
              return "Enter number values only";
          } else {
              return;
          }
      }


      function checkDayValidForMonth() {
          var dayValue = $("#day").val();
          var monthValue = $("#month").val();
          var yearValue = $("#year").val();
          if (monthValue == null || monthValue == "" || !jQuery.isNumeric(monthValue))
              return;
          else if ((monthValue == 4 || monthValue == 6 || monthValue == 9 || monthValue == 11) && (dayValue > 30))
              return "Day too high for month " + monthValue;
          else if (yearValue == null || yearValue == "" || !jQuery.isNumeric(yearValue))
              return;
          else if (monthValue == 2 && yearValue > 1000) {
              if (leapYear(yearValue) && dayValue > 29) {
                  return "Day too high for month " + monthValue;

              } else if (!leapYear(yearValue) && dayValue > 28) {
                  return "Day too high for month " + monthValue;
              } else
                  return;
          } else
              return;
      }


      function leapYear(year) {
          return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
      }
      /*********************************************************************************************************/
      /**************  SET/CLEAR ERROR STATE AND MESSAGES ******************************************************/

      function setDobError(errorMessage) {
          var el = $("#day");
          if (el.closest(".form-group").children("span").last().hasClass("error-message"))
              el.closest(".form-group").children("span").last().remove();
          if (!el.closest(".form-group").children("span").last().hasClass("error-message"))
              el.closest(".form-group").children("span").last().after("<span class=\"error-message\">" + errorMessage + "</span>");
          el.closest(".form-group").addClass("error");
      }

      function clearDobError() {
          var el = $("#day");
          if (el.closest(".form-group").children("span").last().hasClass("error-message")) {
              el.closest(".form-group").children("span").last().remove();
          }
          el.closest(".form-group").removeClass("error");
      }
  });