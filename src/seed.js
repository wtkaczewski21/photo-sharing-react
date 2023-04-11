export function seedDatabase(firebase) {
  const users = [
    {
      userId: "aEtU42R2erXNq9IrpiNyIrKorc02",
      username: "wtkaczewski",
      fullName: "Wojciech Tkaczewski",
      emailAddress: "w.tkaczewski0@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "lilia",
      fullName: "Lily Smith",
      emailAddress: "lsmith@wp.pl",
      following: [],
      followers: ["aEtU42R2erXNq9IrpiNyIrKorc02"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "alex",
      fullName: "Aleksandero Jones",
      emailAddress: "ajones@onet.pl",
      following: [],
      followers: ["aEtU42R2erXNq9IrpiNyIrKorc02"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "ann",
      fullName: "Anastasia Evans",
      emailAddress: "aevans@gmail.com",
      following: [],
      followers: ["aEtU42R2erXNq9IrpiNyIrKorc02"],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/lilia/${i}.jpg`,
        caption: "Lily Photo",
        likes: [],
        comments: [
          {
            displayName: "alex",
            comment: "Nice photo!",
          },
          {
            displayName: "ann",
            comment: "Looking good!",
          },
        ],
        dateCreated: Date.now(),
      });
  }
}
