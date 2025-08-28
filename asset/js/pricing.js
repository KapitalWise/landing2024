 


 $( document ).ready(function() { 
      var essentialAmmount = 300;  
      var essentialMoAmmount = calculateMonthly(essentialAmmount);
      var formatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            });
      $('#essentialAmmount').html(formatter.format(essentialMoAmmount)+'/mo');
      $('#billeMonthlyLabel').html('billed upfront at '+formatter.format(Math.round(essentialMoAmmount)*12)+'/yr');
      $('#marketingHours').hide();

      $(document).on('change', '#countSlider', function() {
         $('#marketingHours').hide();
         //alert();
            document.getElementById("countSlider").step = "5";
            if($(this).val() >=102)
               document.getElementById("countSlider").step = "10";
            if($(this).val() >=202)
               document.getElementById("countSlider").step = "20";

            if($(this).val() >=2)
               $('#userCount').html(10);
            if($(this).val() >=32)
            {
               $('#userCount').html(15);
               //$('#marketingHoursTxt').html("30 Minutes Marketing and Content Strategy Consultation");
               //$('#marketingHours').show();
            }
            if($(this).val() >=102)
            {
               $('#userCount').html(20);
               $('#marketingHoursTxt').html("Free 30 Minutes Monthly Marketing and Content Strategy Consultation");
               $('#marketingHours').show();

            }
            if($(this).val() >=202)
            {
               $('#userCount').html(25);
               $('#marketingHoursTxt').html("Free 60 Minutes Monthly Marketing and Content Strategy Consultation");
               $('#marketingHours').show();
            }
            if($(this).val() >=402)
            {
               $('#userCount').html(30);
               $('#marketingHoursTxt').html("Free 90 Minutes Monthly Marketing and Content Strategy Consultation");
               $('#marketingHours').show();
            }
            essentialAmmount = 300;  

        
            if($(this).val()>2 &&$(this).val()<=102)
            {
                essentialAmmount = 300+(($(this).val()-2) *16);                
            }
            if($(this).val()>102 &&$(this).val()<=202)
            {
                essentialAmmount = 3000+(($(this).val()-102) *6);
            }
            if($(this).val()>202 &&$(this).val()<=502)
            {
                  essentialAmmount = 3600+(($(this).val()-202) *2);
            }
            essentialMoAmmount = calculateMonthly(essentialAmmount);
            if(!$("#monthlyYearly").is(':checked'))
            {
               $('#billeMonthlyLabel').hide();
               $('#essentialAmmount').html(formatter.format(essentialAmmount+(essentialAmmount/10))+'/mo');

            }
            else{
               $('#billeMonthlyLabel').html('billed upfront at '+formatter.format(Math.round(essentialMoAmmount)*12)+'/yr');
               $('#billeMonthlyLabel').show();
               $('#essentialAmmount').html(formatter.format(essentialMoAmmount)+'/mo');
            }
            
      });

      $('#monthlyYearly').change(function() {
        if(this.checked) {
            essentialMoAmmount = calculateMonthly(essentialAmmount);
            $('#billeMonthlyLabel').html('billed upfront at '+formatter.format(Math.round(essentialMoAmmount)*12)+'/yr');
            $('#billeMonthlyLabel').show();
            $('#essentialAmmount').html(formatter.format(essentialMoAmmount)+'/mo');
        }else{
            $('#billeMonthlyLabel').hide();
            $('#essentialAmmount').html(formatter.format(essentialAmmount+(essentialAmmount/10))+'/mo');
        }
    });


  });

 function calculateMonthly(essentialAmmount){

   var essentialDisc = (essentialAmmount+ (essentialAmmount/10))/10; 
   var essentialMoDiscountedAmmount = (essentialAmmount+ (essentialAmmount/10)) - essentialDisc;
   //alert(essentialMoDiscountedAmmount);
   return essentialMoDiscountedAmmount;
 }
 