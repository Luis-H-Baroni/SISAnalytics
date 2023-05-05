import psutil
import requests
import time

# URL da API que receberá os dados
url = 'https://exemplo.com/api/'

def monitorar_memoria():
    # Obtém as informações de uso da memória
    memoria = psutil.virtual_memory()
    return {
        'total': memoria.total,
        'available': memoria.available,
        'percent': memoria.percent
    }

def monitorar_disco():
    # Obtém as informações de uso do disco
    disco = psutil.disk_usage('/')
    return {
        'total': disco.total,
        'available': disco.free,
        'percent': disco.percent
    }

while True:
    # Monitora a cada 30 segundos
    memoria = monitorar_memoria()
    disco = monitorar_disco()
    dados = {
        'memoria': memoria,
        'disco': disco
    }
    # Envia os dados para a API
    resposta = requests.post(url, json=dados)
    print(resposta.status_code)
    time.sleep(30)
