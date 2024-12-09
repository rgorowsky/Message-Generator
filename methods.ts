import customerData from './json_files/customers.json';

export class TimeMethods {
    timeOfDay(): string {
        const dateTime = new Date();
        const hours = dateTime.getHours();
        let timeOfDay = '';

        if (hours < 12) {
            timeOfDay = 'Morning';
        } else if (hours > 18) {
            timeOfDay = 'Afternoon';
        } else {
            timeOfDay = 'Evening';
        }

        console.log(`current time: ${dateTime}`);
        return timeOfDay;
    };

    reservationCheckin(comp_start: number, comp_end: number): number[] {
        let reservationsToday = [];

        for (const customer of customerData) {
            if (comp_start <= customer.reservation.startTimestamp && customer.reservation.startTimestamp <= comp_end ) {
                // return customer.id;
                reservationsToday.push(customer.id);
            }
        }

        return reservationsToday;
    };

    sendCheckinBlast(reservationsToday: number[]): string[] {
        let messages: string[] = [];
    
        for (const id of reservationsToday) {
            for (const customer of customerData) {
                if (id === customer.id) {
                    messages.push(
                        `Welcome ${customer.firstName}, your room number ${customer.reservation.roomNumber} will be ready soon. Please prepare your things.`
                    );
                }
            }
        }
    
        return messages;
    }
    
};
