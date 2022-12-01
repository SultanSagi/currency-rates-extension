function getRates() {
	const endpoint = 'latest'
	const access_key = 'e99f1218ad91423282c6bb4d9013b35b';
    $.ajax({
        url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key + '&symbols=USD,CZK,GBP',
        dataType: 'jsonp',
        success: function(json) {
			var $box;

			const usdRate = (json.rates.CZK/json.rates.USD).toFixed(2);
			const eurRate = json.rates.CZK.toFixed(2);
			const gbpRate = (json.rates.CZK/json.rates.GBP).toFixed(2);

			$box = $( '#mw-content-text' ).html(
				`<div>1 USD = ${usdRate} CZK</div><div>1 EUR = ${eurRate} CZK</div><div>1 GBP = ${gbpRate} CZK</div>`
			);
			$( function () {
				$( 'h1' ).first()
					.after( $box );
			} );
        },
        error: function(data) {
            alert("Oops, something went wrong!");
        }
    });
});
}
getRates();
setInterval(function () {
    getRates();
	console.log("Refresh in 10 sec");
}, 10000);
