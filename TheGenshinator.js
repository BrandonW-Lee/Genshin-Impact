let genshinImpactImages = ["Images/1.jpg","Images/2.jpg","Images/3.jpg","Images/4.jpg","Images/5.jpg","Images/6.jpg","Images/7.jpg","Images/8.jpg","Images/9.jpg","Images/10.jpg","Images/11.jpg","Images/12.jpg","Images/1.jpg"]

const genshinImpactQuotes = ["You should know that all power comes at a price. For every bit of power you gain, so too do you gain more responsibility. - Zhongli",
"Reality is the stillness buried deep beneath the illusion - Raiden Shogun", 
"If you can change something, change it. If you can't, don't waste time thinking about it. - Beidou",
"Every journey has its final day. Don't rush! - Zhongli", 
"As the wind continues to blow, so too shall I continue to fight. - Jean Gunnhildr",
"Are you deaf, or just stupid? When did I give you the right... to issue your own orders? -Scaramouche", 
"Fine. You can touch my ears for a second, but the tail is off limits! - Diona", 
"Some ambitions have the power to heal wounds, to bring victory, to inspire hope. But some ambitions, outlive their masters, long after their soul ascends. They remain as they were in the beginning, burning bright and true, for all eternity. - Yae Miko",
"Yesterday's experiences make me stronger today. - Keqing",
"Discipline is everything. Unbridled passion can have disastrous consequences. Trust me, I would know. - Chongus",
"What does freedom really mean, when demanded of you by a god? - Dainslef",
"The fate that brings people together is not a cord so easily cut. -  Kaedehara Kazuha",
"Some use the wind's whistling to drown out the sound of their crimes. - Diluc",
"Come on, let's get moving. We're not frozen in place, after all. - Kaeya",
"A true knight can't afford to be a picky eater. - Jean Gunnhildr",
"If you make a promise, you keep it, if you make a mistake, you apologize. And if you give someone a dream, you defend it to the end.  Childe",
"I love it when it snows. The world falls completely silent... and I can sleep undisturbed. - Kaedehara Kazuha",
"But mortal arrogation never stops. - Dainslef",
"WINDBLADE!!! - Traveler"
]

//It's time to replace every single image with genshin
const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
    let randomImgs = Math.floor(Math.random() * genshinImpactImages.length);
    imgs[i].src = genshinImpactImages[randomImgs];
} 
const body = document.getElementsByTagName('body');
body.background = genshinImpactImages[3];

//And all of the text as well
const text = document.getElementsByTagName('h1');
for (let i = 0; i < imgs.length; i++) {
    let randomQuotes = Math.floor(Math.random() * genshinImpactQuotes.length);
    h1[i].innerText = genshinImpactQuotesrandomImgs;
} 

// play.audio();
// new Audio('Sounds/GenshinImpact.mp3');

let myAudio = new Audio(chrome.runtime.getURL('Sounds/GenshinImpact.mp3'));
myAudio.play();
