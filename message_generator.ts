import {TimeMethods} from './methods';

class MessageBuilder {
    private timeMethods = new TimeMethods();

    preamble(): string {
        const timeOfDay = this.timeMethods.timeOfDay();
        return `Good ${timeOfDay}, valued Guest!`;
    }

    checkin(): string {
        const comp_start = 1733706103; // Start timestamp 12/9/24 1:01am
        const comp_end = 1733788543 // End timestamp 12/9/24 11:55pm
        const checkinDay = this.timeMethods.reservationCheckin(comp_start,comp_end);

        return `These reservations check in today: ${checkinDay || 'None'}`;
    }

    sendCheckinNotices(): string {
        const comp_start = 1733706103; // Start timestamp 12/9/24 1:01am
        const comp_end = 1733788543;   // End timestamp 12/9/24 11:55pm
        const reservationsToday = this.timeMethods.reservationCheckin(comp_start, comp_end);
        const messages = this.timeMethods.sendCheckinBlast(reservationsToday);
    
        // Join messages into a single string
        if (messages.length > 0) {
            return messages.join('\n');
        }
    
        return 'No check-in notices to send.';
    
    }

}

const messageBuilder = new MessageBuilder();
console.log(messageBuilder.preamble());
console.log(messageBuilder.checkin());
console.log(messageBuilder.sendCheckinNotices());