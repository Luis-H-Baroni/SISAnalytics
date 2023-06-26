import socketio
import json
import psutil
import time
import platform
from datetime import datetime

# Configurações do servidor de destino Socket.IO
server_url = 'http://localhost:4000'  # URL do servidor Socket.IO

# Cria o cliente Socket.IO
sio = socketio.Client()

@sio.event
def connect():
    print('Conectado ao servidor Socket.IO')

@sio.event
def disconnect():
    print('Desconectado do servidor Socket.IO')

def get_system_info():
    # Obtém informações do sistema
    ram_usage = psutil.virtual_memory().percent
    rom_usage = psutil.disk_usage('/').percent
    cpu_temp = None #psutil.sensors_temperatures().get('cpu_thermal', [{}])[0].current
    hostname = platform.node()

    # Cria um dicionário com as informações
    system_info = {
        'ram': ram_usage,
        'rom': rom_usage,
        'cpuTemp': cpu_temp,
        'hostname': 'DESKTOP-1'
    }

    return system_info

def send_data():
    sio.connect(server_url)
    ramOverloadCount = 0
    while True:
        
        # Obtém as informações do sistema
        system_info = get_system_info()
        system_info['createdAt'] = datetime.now().isoformat()

        # Converte as informações para JSON
        json_data = json.dumps(system_info)

        
        if system_info['ram'] > 30:
            ramOverloadCount += 1
            print(ramOverloadCount)
            if ramOverloadCount == 2:
                print('RAM acima de 90%')
                ram_json_data = json.loads(json_data)
                ram_json_data['incidentAlias'] = 'RAM_OVERLOAD'
                ram_json_data = json.dumps(ram_json_data)
                sio.emit('incident', ram_json_data)
                print(ram_json_data)
                ramOverloadCount = 0

        if system_info['rom'] > 30:
            print('ROM acima de 80%')
            rom_json_data = json.loads(json_data)
            rom_json_data['incidentAlias'] = 'ROM_OVERLOAD'
            rom_json_data = json.dumps(rom_json_data)
            sio.emit('incident', rom_json_data)
            print(rom_json_data)

        # Envia os dados para o servidor Socket.IO
        sio.emit('system_info', json_data)

        print(f'Dados enviados: {json_data}')

        time.sleep(10)  # Aguarda 30 segundos antes de enviar novamente

# Conecta-se ao servidor Socket.IO


# Executa a função para enviar os dados
send_data()

# Mantém a conexão com o servidor Socket.IO
sio.wait()