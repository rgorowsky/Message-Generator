import {TimeMethods} from './methods';

class MessageBuilder {
    private timeMethods = new TimeMethods();

    preamble(): string {
        const timeOfDay = this.timeMethods.timeOfDay();
        return `Good ${timeOfDay}, valued Guest!`;
    }

    checkin(): string {
        const checkinDay = this.timeMethods.reservationCheckin();
        return `These reservations check in today ${}`
    }
}

const messageBuilder = new MessageBuilder();
console.log(messageBuilder.preamble());