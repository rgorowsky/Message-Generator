import {TimeMethods} from './methods';

class MessageBuilder {
    private timeMethods = new TimeMethods();

    buildMessage(): string {
        const timeOfDay = this.timeMethods.timeOfDay();
        return `Good ${timeOfDay}, valued Guest!`;
    }
}

const messageBuilder = new MessageBuilder();
console.log(messageBuilder.buildMessage());