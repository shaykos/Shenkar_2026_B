import { EventEmitter } from "events";

export default class TempSensor extends EventEmitter {           
    interval: NodeJS.Timeout;
    
    constructor() {
        super();
        this.interval = setInterval(() => this.sendData(), 1000);
    }

    private sendData() {
        let temp = Math.random() * 50; // דוגמה לטמפרטורה
        //emit(event name, event data)
        this.emit('reading', temp);
        if (temp > 40) {
            this.emit('alert', 'Overheating!!');
            clearInterval(this.interval);
        }
    }

}