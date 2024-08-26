const memes = [
    {
        image: "./assests/bitcoin-up-down.png",
        text: "If you've ever dabbled in digital currencies, you'll understand how its unpredictable nature can make you feel on top of the world one moment and like a financial failure the next.",
        heading:"Bitcoin Gone Wild"
    },
    {
        image: "./assests/boomer-text.png",
        text: "The official term is 'hunt and peck typing,' also known as two-fingered typing. It's commonly observed in boomers and looks as if each finger is indecisively acting on its own, separate from the typist's mind.",
        heading:"Legend Has It, They Are Still Texting"
    },
    {
        image: "./assests/browser-tabs.png",
        text: "Ha, you think my desk is cluttered? You should see my browser! This meme is for all of you out there who have thoughts like, 'Who knows, that obscure article from three weeks ago might suddenly become crucial!' or 'Surely, I'll come back to that.' We know you're out there!",
        heading:"If Your Browser Ain’t Slowing Your Computer Down, You’re Not Doing It Right"
    },
    {
        image:"./assests/cyber-truck.png",
        text:"The Cybertruck's unique design has sparked a lot of debate. It has us at CanIPhish thinking, is the rugged, unapologetic boldness of the Tesla Cybertruck a thing of great beauty, or the ugly duckling destined to remain just that? Love it or hate it, there's no denying that the Cybertruck breaks the mold and challenges our conventional ideas of vehicle aesthetics.",
        heading:"The Ugly Duckling"
    },
    {
        image:"./assests/elon-bald.png",
        text:"They say money can't buy happiness, but as you can see by Musk's miraculous transformation, it certainly can buy hairlines!",
        heading:"Musk's Hairline Is on the Money"
    },
    {
        image:"./assests/google-search.png",
        text:"Navigating the world of online business can often feel like you're at the mercy of a fickle emperor. This meme perfectly captures the anxiety of business owners as they await the judgment of Google's ever-changing search algorithm.",
        heading:"May the Google Gods Favor You"
    },
    {
        image:"./assests/graduate.png",
        text:"This IT meme humorously captures the unrealistic expectations often found in job postings where fresh graduates are somehow expected to have extensive experience right out of college. It should strike a chord with job seekers everywhere, bringing a touch of humor to the often frustrating job search process.",
        heading:"Graduates Need Access to Time Machines"
    },
    {
        image:"./assests/hacker.png",
        text:"Press F12 now to instantly transition from casual user to elite hacker.",
        heading:"F12 Got Me Feeling Like a Hacker"
    },
    {
        image:"./assests/iphone-alarms.png",
        text:"The age old battle against the snooze button. Whether you're a chronic snoozer or just enjoy the comfort of knowing there's a backup (or five), this meme is sure to resonate with many of you.",
        heading:"A Tale as Old as Time"
    },
    {
        image:"./assests/job-description-vs-reality.png",
        text:'We all found ourselves in this all-too-common scenario: the job description promises ample help and support along the way, painting a picture of a collaborative and nurturing environment. Yet, reality hits, and you find yourself deep in the trenches, struggling to keep your head above water, with help nowhere in sight.<br/>This stark contrast between expectation and reality can be both frustrating and disheartening, but it is a shared experience that many can relate to in the working world.',
        heading:"You’ll Have Plenty of Support They Said"
    },
    {
        image:"./assests/job-easy-vs-hard.png",
        text:"ChatGPT and other AI tools have transformed many of our work lives. Tasks that took days can now be done in minutes. For those who actively embrace and leverage this technology, think how difficult your job would be without it!",
        heading:"ChatGPT Made Me Who I Am"
    },
    {
        image:"./assests/remote-work.png",
        text:"Remote work has become a major draw for job seekers. Just make sure to read your remote working policy carefully!",
        heading:"Not The Remote Working Policy I Expected"
    },
    {
        image:"./assests/twitter.png",
        text:"Musk's acquisition of Twitter appears to have triggered a chain of unfortunate events, transforming the social media giant into a metaphorical dumpster fire. Whether it's policy adjustments, widespread layoffs, or user backlash, this meme underscores the ongoing turmoil and unpredictability that Twitter (now X) is experiencing under Musk's ownership.",
        heading:"If You Break It, You Buy It...Or Is It: If You Buy It, You Break It?"
    },
    {
        image:"./assests/wifi-password.png",
        text:"Memorizing WiFi passwords can be a hassle. This meme humorously suggests the ultimate password that everyone can agree on.",
        heading:"The Only WiFi Password You Need"
    }
];

let currentMemeIndex = 0;

function updateMeme() {
    document.getElementById("meme-heading").textContent = memes[currentMemeIndex].heading;
    document.getElementById("meme-image").src = memes[currentMemeIndex].image;
    document.getElementById("meme-text").textContent = memes[currentMemeIndex].text;
}

document.getElementById("next-button").addEventListener("click", function() {
    currentMemeIndex = (currentMemeIndex + 1) % memes.length;
    updateMeme();
});

document.getElementById("prev-button").addEventListener("click", function() {
    currentMemeIndex = (currentMemeIndex - 1 + memes.length) % memes.length;
    updateMeme();
});