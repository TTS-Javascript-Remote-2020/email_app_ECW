var appData = {
  "name": "gmail",
  "accountEmail": "me@gmail.com",
  "mailboxes": [
    "inbox",
    "sent",
    "drafts",
    "spam",
  ],
  "contacts": [
    {"name": "JaSON",
    "lastMessage": "I am Javascript Object Notation"},
    {"name": "Alice",
    "lastMessage": "This should be encrypted"},
    {"name": "Bob",
    "lastMessage": "I received an encrypted message from Alice"},
    {"name": "Mallory",
    "lastMessage": "I intercepted an encrypted message between Alice and Bob"},
  ],
  "emails": [
    {
      "from": "l.ipsum@placeholder.com",
      "to": [ "me@gmail.com" ],
      "cc": [],
      "bcc": [],
      "subject": "You already know...",
      "mailbox": "inbox",
      "priority": true,
      "starred": true,
      "timeStamp": "1985-05-22 05:05:13",
      "content": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "attachments": [ "lorem.gif", "kitten.jpeg" ],
      },
    }, {
      "from": "me@gmail.com",
      "to": [ "producer@python.com" ],
      "cc": [],
      "bcc": [],
      "subject": "Lavatorial Humour",
      "mailbox": "drafts",
      "priority": true,
      "starred": false,
      "timeStamp": "",
      "content": {
        "text": "Dear Sir, I object strongly to the obvious lavatorial turn this show has already taken. Why do we never hear about the good things in Britain, like Mary Bignall's wonderful jump in 1964? Yours etc., Ken Voyeur. ",
        "attachments": [ "signature.png", "mary_bingall.gif" ],
      },
    }, {
      "from": "elliottsmom@gmail.com",
      "to": [ "me@gmail.com" ],
      "cc": [ "dad@gmail.com", "brother@gmail.com", "sister@gmail.com", "aunt1@gmail.com", "aunt2@gmail.com", "cousirick@gmail.com", "cousintiffany@gmail.com" ],
      "bcc": [],
      "subject": "Ridiculous Forwards",
      "mailbox": "inbox",
      "priority": false,
      "starred": false,
      "timeStamp": "2198-03-29 05:28:08",
      "content": {
        "text": "Quos necessitatibus alias eos vero nesciunt deserunt, repellendus unde laudantium iure consectetur quo cum enim ab temporibus quisquam praesentium pariatur modi accusamus. Hic expedita, unde ducimus velit at earum debitis commodi qui a veritatis quas, ab temporibus beatae tempora nihil ipsum, ex dolore. Neque, adipisci fugit labore esse quibusdam veritatis mollitia consequatur, laudantium reiciendis voluptates ad non tenetur officia amet itaque, modi, maxime quos facilis cumque eos. Voluptas fuga inventore dignissimos perspiciatis beatae necessitatibus, porro ratione veritatis velit.",
        "attachments": [ "meme1.jpg", "meme2.jpg", "facebook1.jpg", "facebook2.jpg" ],
      },
    }, {
      "from": "me@gmail.com",
      "to": [ "support@amazon.com" ],
      "cc": [ "not.a.scam@hotmail.com" ],
      "bcc": [ "melchoir.the.lawyer@melchoirmelchoirandmelchoir.com" ],
      "subject": "Wrong Item",
      "mailbox": "sent",
      "priority": false,
      "starred": true,
      "timeStamp": "",
      "content": {
        "text": "Sequi mollitia earum, itaque nostrum! Minus eius et maiores quo ad, fugit porro officia quam voluptates excepturi sit cupiditate libero doloribus temporibus adipisci molestias tempora, dolore animi quod consequatur nemo deserunt, dignissimos accusamus voluptate sed.",
        "attachments": [ "signature.png" ],
      },
    }, {
      "from": "test@comchoice.co.ke",
      "to": [ "me@gmail.com" ],
      "cc": [],
      "bcc": [],
      "subject": "RE: Business Proposal!",
      "mailbox": "spam",
      "priority": true,
      "starred": false,
      "timeStamp": "1992-06-26 22:38:03",
      "content": {
        "text": `Attn,


I am Mr. Hafez Ghanem, vice president world bank. I am contacting you based on my personal interest to develop a mutual business relationship with you in your country. The amount and terms of executing the deal will be made known to you upon receiving a positive response from you. I solicit for your assistance to execute this transaction.



I will give you a complete picture of this transaction as soon as I hear from you. Send your response to my private email address: hafez.ghanem@aol.com



I look forward to hearing from you soonest.



Regards,

Mr. Hafez Ghanem`,
        "attachments": [ "payload.docx" ],
      },
    },
  ],
};

console.log("Your different mailboxes are:");
console.log(appData.mailboxes.join(', '));

console.log("All of your emails:");
console.log(appData.emails);

console.log(`Your second email (from ${appData.emails[1].from}) is in the mailbox: ${appData.emails[1].mailbox} and reads:`)
console.log(appData.emails[1].content.text);
appData.emails[1].mailbox = "sent";
appData.emails[1].timeStamp = new Date().toUTCString();
console.log(`Your second email now is in the mailbox: ${appData.emails[1].mailbox} as of ${appData.emails[1].timeStamp}`);

appData.emails.push({
  "from": "me@gmail.com",
  "to": [ "bossman@gmail.com" ],
  "cc": [],
  "bcc": [],
  "subject": "RE: Task",
  "mailbox": "drafts",
  "priority": true,
  "starred": false,
  "timeStamp": "",
  "content": {
    "text": "I'll get right on that.",
    "attachments": [ "signature.jpg" ],
  },
});

const momsEmail = appData.emails[2];
let familyGroup = momsEmail.to.concat(momsEmail.cc);
console.log("Your Family Group consists of:");
console.log(familyGroup);

const numberOfEmails = appData.emails.length;

const starredEmails = [];
for (let i = 0; i < numberOfEmails; i++) {
  const email = appData.emails[i];
  if (email.starred === true){
    starredEmails.push(email);
  }
}
console.log("Your starred emails:")
console.log(starredEmails);

const priorityEmails = [];
for (let i = 0; i < numberOfEmails; i++) {
  const email = appData.emails[i];
  if (email.priority === true) {
    priorityEmails.push(email);
  }
}
console.log("Your priority emails:");
console.log(priorityEmails);

const blockedEmailAddresses = [];
for (let i = 0; i < numberOfEmails; i++) {
  const email = appData.emails[i];
  if (email.mailbox === "spam") {
    blockedEmailAddresses.push(email.from);
  }
}
console.log("Your blocked email addresses:");
console.log(blockedEmailAddresses);
