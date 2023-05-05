import time
import psutil
import pymongo
import requests

api_url = 'http://exemplo.com/api'

# Conectar ao MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]

while True:
    # Obter as estatísticas do MongoDB
    stats = db.command("serverStatus")

    # Calcular a porcentagem de uso da CPU
    cpu_percent = psutil.cpu_percent()

    # Calcular a porcentagem de uso do MongoDB
    if 'process' in stats and 'cpu' in stats['process']:
      mongo_percent = stats['process']['cpu']['system'] / psutil.cpu_count() * 100
    else:
      mongo_percent = 0

    # Calcular a porcentagem total de uso do sistema
    total_percent = cpu_percent + mongo_percent

    # Criar um objeto com as estatísticas
    data = {
        'cpu_percent': cpu_percent,
        'mongo_percent': mongo_percent,
        'total_percent': total_percent
    }

    response = requests.post(api_url, json=data)

    if response.status_code == 200:
      print('Dados enviados com sucesso!')
    else:
      print('Erro ao enviar dados:', response.status_code)
    
    print(data)
    # Esperar 30 segundos
    time.sleep(30)
