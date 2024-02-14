const getPredictionByID = async (id) => {
    try {
        // Load the JSON data directly as an object
        const predictions = [
            { id: 1, name: "পটল বুনলে ফাগুনে, ফলন বাড়ে দ্বিগুণে। রোমান্সের পালে লাগবে নতুন হাওয়া!" },
            { id: 2, name: "খরা ভুয়ে ঢালবি জল, সারাবছর পাবি ফল। সামনে অনেক সাফল্য, অনেক আনন্দ!" },
            { id: 3, name: "বিপদে করো নহে ভয়, অভিজ্ঞতায় হবে জয়। ধনে-মানে-গৌরবে উজ্জ্বল হয়ে উঠবে চারদিক..." },
            { id: 4, name: "ছায়া ভালো ছাতার তল, বল ভালো নিজের বল। শ্রম কখনও বিফলে যায়না..." },
            { id: 5, name: "তুমি কম্বল ছেড়ে দিয়েছো কিন্তু কম্বল তোমাকে ছাড়ছে না ? চিন্তা করোনা জিপি স্টারের হট অফার আসছে..." },
            { id: 6, name: "এদিক নেই ওদিক আছে, ঈদ আসছে কদিন বাদে, ধামাকা আসছে জিপির সাথে..." },
            { id: 7, name: "চল্লেই চল্লিশ বুদ্ধি, না চল্লেই হতবুদ্ধি, কাছে থাকবে জিপি হোক যতই অসঙ্গতি..." },
            { id: 8, name: "ঠকঠকালে হবে কি, কপালে তোর নেই কো ঘি। ভাবিস না কাছেই আছে জিপি..." },
            { id: 9, name: "ক্ষমার বড় গুণ নাই, দানের বড় পুণ্য নাই। তোমার কোন শত্রু নাই..." },
            { id: 10, name: "কইতে কইতে মুখ বাড়ে,খাইতে খাইতে পেট বাড়ে, দেখতে দেখতে দিন কাটে।" },
            { id: 11, name: "শুভ দিন আসন্ন, সবাই থাকবে প্রসন্ন। তুমি থাকবে উপরে, দেখতে হবে জমিনে..." },
            { id: 12, name: "এখন করলে শুরু, পাবে নাকো কদু। আরম্ভ করলে শেষ হতে আর কতক্ষণ? সামনে উজ্জ্বল দিনের সূত্রপাত ঘটবে..." },
            { id: 13, name: "লোকের ভালো, লোকের মন্দ, লোকের সঙ্গে চলে যায়। কিন্তু জিপি কাছে থাকে..." },
            { id: 14, name: "মিললে মেলা, না মিললে একলা একলা ভালা! অপেক্ষা করছে জাগ্রত এক নববসন্ত..." },
            { id: 15, name: "ঠেলার নাম বাবাজী, তোমরা আবার নবাবি, খাইতে হবে নেহারি তাইলে হবে মন খুশি..." },
            { id: 16, name: "পূর্ব আষাঢ়ে দক্ষিণা বয়, সবাই তোমায় ভাল কয়। আপনার রোমান্সের বৃক্ষে নতুন নতুন ফুল ফুটবে..." },
            { id: 17, name: "বিধি যদি বিপরীত, কেবা করে তার হিত। আস্থা রাখুন জিপির ওপর..." },
            { id: 18, name: "দিন থাকতে বাঁধে আল, তবে খায় তিন শাল। কাজ, সাফল্য ও আনন্দে প্লাবিত হবে জীবনের নদীগুলো..." },
            { id: 19, name: "আগেপাছে লন্ঠন, কাজের বেলায় ঠনঠন। দেখিয়ে দিন সবাইকে আপনিও পারেন..." },
            { id: 20, name: "পূর্বে করা বিনিয়োগে ভবিষ্যতে পাবে সম্পদ ভাণ্ডার" },
            { id: 21, name: "বন্ধুর সাক্ষাৎ পাওয়ার উপযুক্ত সন্নিকটে!" },
            { id: 22, name: "স্বাস্থ্যগত দিক থেকে আপনি বিশ্বের শীর্ষে অবস্থান করবেন।" },
            { id: 23, name: "আজ আপনার ভাগ্যবান দিন, কারণ সব সময় আপনার ভাগ্য সুপ্রসন্ন।" },
            { id: 24, name: "আপনি আপনার এলাকার চোরের মর্যাদাপূর্ণ প্রকল্প বা নিয়োগের জন্য প্রধান বাধা, কেননা আপনি গভীর রাত পর্যন্ত ইন্টারনেট চালান!" },
            { id: 25, name: "আপনার kpi দেখে অন্যরা হবে ঈর্ষণীয়" },
            { id: 26, name: "এই ঈদে আপনার জন্য একটি বিশেষ চমক আছে!" },
            { id: 27, name: "আপনি সারা বছর জিপিস্টার সুবিধা জিতবেন!" },
            { id: 28, name: "আপনার ভ্যালেন্টাইনস ডে আরও উত্তেজনাপূর্ণ হতে চলেছে!" },
            { id: 29, name: "আপনি নেহারি খাওয়ার জন্য হঠাৎ তাগিদ পাবেন এবং একটি বিশেষ ছাড় পাবেন!" }
        ];
        
        
        const prediction = predictions.find(prediction => prediction.id === id);
        return prediction ? prediction.name : null; // Return the name property if prediction exists, otherwise return null
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        return null; // Return null if there's an error
    }
};

export { getPredictionByID };


