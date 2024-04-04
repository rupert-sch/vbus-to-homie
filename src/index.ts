import {HomieMqttServerConfig} from './lib/interfaces';
import {VbusReader} from './lib/vbus-reader';

export const mqttConfig: HomieMqttServerConfig = {
    brokerUrl: 'mqtt://192.168.188.4',
    username: '',
    password: '',
    homieBaseTopic: 'homie'
};

const path = '192.168.188.22';

VbusReader.start(path, mqttConfig);
