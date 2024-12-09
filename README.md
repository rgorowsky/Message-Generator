# Message-Generator
Developing a messaging system bot, playing around with some concepts.  Basic code and functions written in typescript

# Core Function
Have placeholder greetings, salutations, core messages, etc.  Pull from a db/list of recipients that can be updated independently

# Nice to Haves, or for the Future...
Connect a webpage interface for an employee to use.  Logging on the requests and what messages were sent.

# How to Run?
the messageGenerator.ts file has the main executable functions.  I have opted to not convert files to javascript but rather run directly via typescript using 'npx ts-node [executable file]'

# How it started
Began with constructing the message_generator, and methods files.  With the former being the main executable, and methods being where specific and repeatable functions were defined.  Started with preamble() and then checkin() to connect to json file structures.  Once the checkin() was pulling from the JSON, I used it to construct a method of determining who was checking in that day.  Expanded with the sendCheckinNotices() method, which then sends personalized messages to those checking in that day.