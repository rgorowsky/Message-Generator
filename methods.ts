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

    reservationCheckin(comp_time: number): number | null {
        let reservationsToday = 0;

        for (const customer of customerData) {
            if (customer.reservation.startTimestamp === comp_time) {
                return customer.id;
            }
        }

        return reservationsToday; //if no matches are found
    };
};
