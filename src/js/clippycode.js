const items = [    
    "scratch cat is the mascot of scratch",
    "gobo might have been the mascot for scratch",
    "niga could of been the mascot of in an alternate universe",
    "tera could of been the mascot of in an alternate universe",
    "nano could of been the mascot of in an alternate universe",
    "pico could of been the mascot of in an alternate universe",
    "Scratch could of not had a mascot in an alternate universe",
    "the scratch team owns the domain scratch.team",
    'this is the third "did you know" message i have written',
    "there was a small window of time where you could backpack scratchblocks from the forums",
    "according to all known laws of aviation there is no way a bee should be able to fly",
    'the word "notch" was originally "oche" but people misheard it when others said "an oche"',
    "the scratch team can see your gender",
    'you cannot sign up to scratch with the name "qnb02mclepghwic9"',
    "scratch projects are never deleted unless specifically you ask the scratch team to",
    "scrath has a bug bounty program",
    "it is currently 9:51 while i write this",
    "scratch owns the domain scratch.pizza",
    "scratch owns the domain scratch.love",
    "We are experiencing a disruption with email delivery. If you are not receiving emails from us, please try after 8am EST.",
    "backpack.scratch.mit.edu has a funny ghost",
    "download.scratch.mit.edu says Scratch On!",
    "downloads.scratch.mit.edu has a one of a kind error page",
    "downloads.scratch.ly just says No",
    "projects.scratch.mit.edu has an easter egg in the HTTP response headers",
    "during scratch 2's development there was a built in scrolling system for projects",
    "scratch has a discussion forum",
    "archbtw uses arch btw",
    'scratch has some code for an unused "disable studio notifications" button',
    "each of gobo's friends names come from the metric prefix for powers of 10",
    "today is probably someone's birthday on scratch",
    "the first scratch project was id 104, everything with a lower id was added later",
    "this isnt a did you know message",
    "i am running out of trivia",
    "i want you to see za-chary's 5000 Followers Podcast",
    "the scratch wiki has a wacky domain name",
    "the scratch team's admin panel may have at some point had a template specifically for fnaf project alerts",
    "scratchdb might stand for scratch donut buffet",
    "any scratch url starting https://scratch.mit.edu/go leads to a 403",,
    "you are reading this, or maybe not",
    "the",
    "no",
    "i wrote this at 2:22 PM"
]

clippy.load('Clippy', function(agent) {
    agent.show();
    setInterval(function() {
        var item = items[Math.floor(Math.random()*items.length)];
        agent.speak(item)
    }, 15000);
});