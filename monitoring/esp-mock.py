import json
import time
import requests
from random import randint



while True:
    #generate random numbers for temperature and humidity
    strTempC = str(randint(0, 50))
    strTempF = str(randint(0, 50))
    strHumi = str(randint(0, 100))

    url = "http://localhost:4000/temperature-humidity"
    request_body = {
        "configurationItemAlias": "ESP32",
        
        "data": {
            "celsius": strTempC,
            "fareinheit": strTempF,
            "umidity": strHumi
        }
    }

    body=json.dumps(request_body)
    print(body)
    response = requests.post(url, json=request_body)

    if response.status_code == 200:
        print("Requisição POST enviada com sucesso.")
    else:
        print("Falha ao enviar a requisição POST. Código de status:", response.status_code)
        print("Resposta do servidor:", response.text)

    time.sleep(5)
