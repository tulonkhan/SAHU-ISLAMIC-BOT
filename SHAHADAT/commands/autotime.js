module.exports.config = {
    name: "autotime",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU", //don't change credits 
    description: "Ramadan Islamic captions every hour",
    commandCategory: "system",
    usages: "",
    cooldowns: 5
};

const messages = [
{ timer: "12:00 AM", message: ["🌙 রাত গভীর… ঘুমাও, শরীরের হক আদায় করো। 😴"] },
{ timer: "12:30 AM", message: ["🤲 ‘আল্লাহর স্মরণেই অন্তর প্রশান্তি পায়।’"] },

{ timer: "01:00 AM", message: ["🌌 এখন ঘুমালে ফজরে উঠা সহজ হবে।"] },
{ timer: "01:30 AM", message: ["💤 ঘুম না হলে মনও ভালো থাকে না।"] },

{ timer: "02:00 AM", message: ["🕌 তাহাজ্জুদের সময়… চাইলে নামাজ পড়ো।"] },
{ timer: "02:30 AM", message: ["🤲 রাতের দোয়া সবচেয়ে বেশি কবুল হয়।"] },

{ timer: "03:00 AM", message: ["🌙 আল্লাহকে ডাকো—তিনি সব শোনেন।"] },
{ timer: "03:30 AM", message: ["📿 ‘যে আল্লাহকে ভয় করে, তিনি পথ বের করে দেন।’"] },

{ timer: "04:00 AM", message: ["🕌 ফজরের প্রস্তুতি নাও।"] },
{ timer: "04:30 AM", message: ["🤲 ফজরের নামাজ পড়ে নাও—বরকত আসবে।"] },

{ timer: "05:00 AM", message: ["🌅 নতুন দিন শুরু করো বিসমিল্লাহ বলে।"] },
{ timer: "05:30 AM", message: ["☀️ সকালটা productive করো।"] },

{ timer: "06:00 AM", message: ["🚿 ফ্রেশ হয়ে কাজে লেগে পড়ো।"] },
{ timer: "06:30 AM", message: ["💚 ছোট ভালো কাজও বড় হয়ে যায়।"] },

{ timer: "07:00 AM", message: ["📖 প্রতিদিন কিছু নতুন শিখো।"] },
{ timer: "07:30 AM", message: ["🤲 দোয়া করো—আল্লাহ শুনেন।"] },

{ timer: "08:00 AM", message: ["💼 কাজে মন দাও, সময় নষ্ট না।"] },
{ timer: "08:30 AM", message: ["⚡ ধারাবাহিকতা = সফলতা।"] },

{ timer: "09:00 AM", message: ["🕌 যোহরের প্রস্তুতি নিতে থাকো।"] },
{ timer: "09:30 AM", message: ["🤲 ‘নামাজ ঈমানের স্তম্ভ।’"] },

{ timer: "10:00 AM", message: ["🕌 যোহরের সময় হয়ে আসছে।"] },
{ timer: "10:30 AM", message: ["🤲 যোহরের নামাজ পড়ে নাও।"] },

{ timer: "11:00 AM", message: ["🍛 দুপুরের খাবার খাও।"] },
{ timer: "11:30 AM", message: ["😌 একটু বিশ্রাম নিতে পারো।"] },

{ timer: "12:00 PM", message: ["🕌 আসরের প্রস্তুতি নাও।"] },
{ timer: "12:30 PM", message: ["🤲 আসরের নামাজ পড়ে নাও।"] },

{ timer: "01:00 PM", message: ["🌤️ বিকেলটা ভালো কাজে ব্যবহার করো।"] },
{ timer: "01:30 PM", message: ["📿 আল্লাহর জিকির করো।"] },

{ timer: "02:00 PM", message: ["🌆 সূর্যাস্তের দিকে যাচ্ছে সময়…"] },
{ timer: "02:30 PM", message: ["🕌 মাগরিবের প্রস্তুতি নাও।"] },

{ timer: "03:00 PM", message: ["🤲 মাগরিবের নামাজ পড়ে নাও।"] },
{ timer: "03:30 PM", message: ["💚 খাওয়ার আগে বিসমিল্লাহ বলো।"] },

{ timer: "04:00 PM", message: ["🍽️ রাতের খাবার খাও।"] },
{ timer: "04:30 PM", message: ["😌 পরিবারকে সময় দাও।"] },

{ timer: "05:00 PM", message: ["🕌 এশার প্রস্তুতি নাও।"] },
{ timer: "05:30 PM", message: ["🤲 এশার নামাজ পড়ে নাও।"] },

{ timer: "06:00 PM", message: ["🌙 দিন শেষের পথে…"] },
{ timer: "06:30 PM", message: ["📖 কুরআন পড়লে মন শান্ত হয়।"] },

{ timer: "07:00 PM", message: ["💤 ঘুমের প্রস্তুতি নাও।"] },
{ timer: "07:30 PM", message: ["🤍 ‘আল্লাহ দয়ালু, দয়া করতে ভালোবাসেন।’"] },

{ timer: "08:00 PM", message: ["😴 তাড়াতাড়ি ঘুমাও, ফজর মিস না।"] },
{ timer: "08:30 PM", message: ["🌌 রাতের দোয়া পড়ে ঘুমাও।"] },

{ timer: "09:00 PM", message: ["🛌 ফোন কম ব্যবহার করে বিশ্রাম নাও।"] },
{ timer: "09:30 PM", message: ["🤲 আল্লাহর উপর ভরসা রাখো।"] },

{ timer: "10:00 PM", message: ["🌙 ঘুমানোর সময় হয়ে গেছে।"] },
{ timer: "10:30 PM", message: ["💤 ভালো ঘুম = ভালো দিন।"] },

{ timer: "11:00 PM", message: ["🌌 আজকের দিন শেষ… আলহামদুলিল্লাহ।"] },
{ timer: "11:30 PM", message: ["🤲 ঘুমানোর আগে দোয়া পড়ে নাও।"] }
];

module.exports.onLoad = ({ api }) => {
    setInterval(() => {
        const now = new Date(Date.now() + 21600000);
        const formattedTime = now.toLocaleTimeString("en-US", { hour12: true });

        const data = messages.find(item => item.timer === formattedTime);
        if (data) {
            const text = data.message[Math.floor(Math.random() * data.message.length)];

            const finalMessage =
`𝐑𝐀𝐌𝐀𝐃𝐀𝐍 𝐑𝐄𝐌𝐈𝐍𝐃𝐄𝐑 🌺

⏰ Time: ${data.period} ${formattedTime}

${text}`;

            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(finalMessage, threadID);
            });
        }
    }, 1000);
};

module.exports.run = () => {};
