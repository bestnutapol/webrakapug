import requests

url = "https://dataapi.moc.go.th/gis-product-prices?product_id=P11001&from_date=2022-01-01&to_date=2022-03-28"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)