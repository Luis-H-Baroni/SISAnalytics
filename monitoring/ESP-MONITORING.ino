
#include <DHT.h>
#include <WiFi.h>
#include <HTTPClient.h>
#define DHT_SENSOR_PIN  21 // ESP32 pin GIOP21 connected to DHT11 sensor
#define DHT_SENSOR_TYPE DHT11


DHT dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);

const char* ssid = "Visitantes";
const char* password =  "";
void setup() {
  Serial.begin(9600);
  dht_sensor.begin(); // initialize the DHT sensor
  delay(4000);

  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) { //Check for the connection
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println("Connected to the WiFi network");
}

void loop() {
  if(WiFi.status()== WL_CONNECTED){
    float humi  = dht_sensor.readHumidity();
    float tempC = dht_sensor.readTemperature();
    float tempF = dht_sensor.readTemperature(true);

    if ( isnan(tempC) || isnan(tempF) || isnan(humi)) {
      Serial.println("Failed to read from DHT sensor!");
    } else {
      Serial.print("Humidity: ");
      Serial.print(humi);
      Serial.print("%");
  
      Serial.print("  |  ");
  
      Serial.print("Temperature: ");
      Serial.print(tempC);
      Serial.print("°C  ~  ");
      Serial.print(tempF);
      Serial.println("°F");      
      delay(2000);

      String strTempC = String(tempC, 2);
      String strTempF = String(tempF, 2);
      String strHumi = String(humi, 2);
      
      HTTPClient http;

      // Configurar a URL do servidor e o caminho do endpoint
      http.begin("http://localhost:4000/logs");
    
      // Configurar o cabeçalho do tipo de conteúdo
      http.addHeader("Content-Type", "application/json");
    
      // Configurar o corpo da requisição POST
      String requestBody = "{\"itemAlias\":\"teste\",\"itemId\":\"1234\",\"data\":{\"celsius\":"+strTempC+",\"fareinheit\":"+strTempF+",\"umidity\":"+strHumi+"}}";
      
      // Enviar a requisição POST
      Serial.print(requestBody);
      
      int httpResponseCode = http.POST(requestBody);

      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.println("Resposta do servidor:");
        Serial.println(response);
      } else {
        Serial.print("Erro na requisição. Código de erro: ");
        Serial.println(httpResponseCode);
      }
    
      http.end();
    }
  } else {
    Serial.println("Error in WiFi connection");   
  }
}
