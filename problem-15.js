// *৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// * এইবার ভালো করে খেয়াল করো। 

// * প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// * সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// *তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

function paperRequirements(book1, book2, book3){
let pageForBook1 = book1 * 100;
let pageForBook2 = book2 * 200;
let pageForBook3 = book3 * 300;

let total = pageForBook1 + pageForBook2 + pageForBook3;
return total;

}

let totalPages = paperRequirements(1, 1, 1);
console.log(totalPages);
