import {TimeMethods} from './methods';

class MessageBuilder {
    private timeMethods = new TimeMethods();

    preamble(): string {
        const timeOfDay = this.timeMethods.timeOfDay();
        return `Good ${timeOfDay}, valued Guest!`;
    }

    checkin(): string {
        // const filePath = './json_files/customers.json'; // Path to your JSON file
        const comp_time = 1486654792;  // Example timestamp to check for
        const checkinDay = this.timeMethods.reservationCheckin(comp_time);

        return `These reservations check in today: ${checkinDay || 'None'}`;
    }
}

const messageBuilder = new MessageBuilder();
console.log(messageBuilder.preamble());
console.log(messageBuilder.checkin());