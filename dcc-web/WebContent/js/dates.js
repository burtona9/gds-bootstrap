 $(function () {
     var startPickadate;
     var startPickadate;
     startPickadate = $('.start-date')
         .pickadate({
             format: 'dd/mm/yyyy',
             selectYears: true,
             selectMonths: true,
             editable: true,
             container: '#datepickerContainer',
             firstDay: 1

         });
     startPicker = startPickadate.pickadate('picker');
     $('.start-date').off('click focus');
     $('.start-date-calandar-button').on('click', function (e) {
         if (startPicker.get('open')) {
             startPicker.close();
         } else {
             startPicker.open();
         }
         e.stopPropagation()
     });
     $(".start-date").focusin(function () {
         $('#helpBlock').addClass("show");
         $(this).removeAttr('placeholder');
     })
     $('.start-date').focusout(function () {
         $('#helpBlock').removeClass("show");
         $(this).attr('placeholder', 'dd/mm/yyyy');

     })

 });