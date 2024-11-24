import fs from './customers.json';

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

    reservationCheckin(filePath: string, startTimestamp: number): number | null {
        let reservationsToday = ''
        const customerData = fs.readFileSync(filePath, 'utf-8');
        const jsonObject = JSON.parse(customerData);

        for (const customer of jsonObject) {
            if (customer.reservation.startTimestamp.getHours() === 1) {
                let reservationsToday = customer.id;
                return reservationsToday;
            }
        }

        return null; //if no matches are found
    };
};
