var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2022-01-01&to_date=2022-03-28',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
