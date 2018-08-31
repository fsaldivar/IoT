#Read data from Xiaomi flower monitor, tested on firmware version 2.6.6


import sys

from gattlib import GATTRequester, GATTResponse

from struct import *

import paho.mqtt.client as mqtt


address = sys.argv[1]

requester = GATTRequester(address)

#Read battery and firmware version attribute

data=requester.read_by_handle(0x0038)[0]

battery, version = unpack('<B6s',data)

print "Battery level:",battery,"%"

print "Firmware version:",version

#Enable real-time data reading

requester.write_by_handle(0x0033, str(bytearray([0xa0, 0x1f])))

#Read plant data

data=requester.read_by_handle(0x0035)[0]

temperature, sunlight, moisture, fertility = unpack('<hxIBHxxxxxx',data)

print "Light intensity:",sunlight,"lux"

print "Temperature:",temperature/10.,"C"

print "Soil moisture:",moisture,"%"

print "Soil fertility:",fertility,"uS/cm"


#Sometimes the version contains some funny charcters which throws off the JSON processing. Cleaning string

temp = version

version = " "

for x in temp:

    if x == ".":

        version = version + "."

    if x >= "0" and x <="9":

            version = version + x

version = version.strip()


# Saving information in text file in JSON format

json_file = open(sys.argv[2],"w")

json_file.write("{ \"battery\" : " + str(battery) + ", \"version\" : \"" + version + "\", \"sunlight\" : " + str(sunlight) + ", \"temperature\" : " + str(temperature/10.) + ", \"moisture\" : " + str(moisture) + ", \"fertility\" : " + str(fertility) + " }")

json_file.close()

# End Json file export


# Publishing the results to MQTT

mqttc = mqtt.Client("miflora")

mqttc.username_pw_set("fer***","thev*****") #Usuario,Password

mqttc.connect("localhost", 1883)

mqttc.publish("/home/pi", "{ \"battery\" : " + str(battery) + ", \"version\" : \"" + version + "\", \"sunlight\" : " + str(sunlight) + ", \"temperature\" : " + str(temperature/10.) + ", \"moisture\" : " + str(moisture) + ", \"fertility\" : " + str(fertility) + " }")

mqttc.loop(2)

# End of MQTT
