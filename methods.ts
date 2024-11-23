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
};
