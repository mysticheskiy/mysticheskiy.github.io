jQuery(document).ready(function() {
    
    $('#countdown_dashboard').countDown({
					targetDate: {
						'day': 		31,
						'month': 	10,
						'year': 	2018,
						'hour': 	13,
						'min': 		00,
						'sec': 		00,	
						'utc':      true,
						},
					omitWeeks: true					
				});               
                             
});