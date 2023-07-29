import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const fakeUsers = [
  {
    _id: userIds[0], firstName: "Mary", lastName: "Sue", email: "mary@sue.com", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/209x100.png/cc0000/ffffff", friends: [
      userIds[5],
      userIds[1],
      userIds[8],
      userIds[4],
      userIds[9],
    ], location: "93583 Marcy Crossing", occupation: "Admin", viewedProfile: 12, impressions: 59, isAdnim: true
  },
  {
    _id: userIds[1], firstName: "John", lastName: "Doe", email: "john@doe.com", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/182x100.png/5fa2dd/ffffff", friends: [
      userIds[0],
      userIds[7],
      userIds[3],
      userIds[8],
    ], location: "6 Mcbride Parkway", occupation: "Librarian", viewedProfile: 57, impressions: 62, isAdnim: false
  },
  {
    _id: userIds[2], firstName: "Hashim", lastName: "Larwell", email: "hlarwell2@gravatar.com", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/142x100.png/cc0000/ffffff", friends: [
      userIds[0],
      userIds[9],
      userIds[6],
      userIds[5],
      userIds[4],
      userIds[1],
    ], location: "4456 Drewry Street", occupation: "Senior Developer", viewedProfile: 69, impressions: 47, isAdnim: false
  },
  {
    _id: userIds[3], firstName: "Dirk", lastName: "Zorzenoni", email: "dzorzenoni3@naver.com", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/144x100.png/cc0000/ffffff", friends: [
      userIds[2],
      userIds[5],
      userIds[1],
      userIds[7],
      userIds[9],
    ], location: "9665 Tennyson Point", occupation: "Project Manager", viewedProfile: 40, impressions: 45, isAdnim: false
  },
  {
    _id: userIds[4], firstName: "Yettie", lastName: "Richel", email: "yrichel4@cafepress.com", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/207x100.png/5fa2dd/ffffff", friends: [
      userIds[9],
      userIds[8],
      userIds[3],
    ], location: "1 Nevada Street", occupation: "Senior Cost Accountant", viewedProfile: 64, impressions: 16, isAdnim: false
  },
  {
    _id: userIds[5], firstName: "Vincent", lastName: "Wolffers", email: "vwolffers5@amazon.de", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/221x100.png/cc0000/ffffff", friends: [
      userIds[1],
      userIds[0],
      userIds[9],
      userIds[2],
      userIds[6],
    ], location: "872 Coleman Point", occupation: "Director of Sales", viewedProfile: 16, impressions: 16, isAdnim: false
  },
  {
    _id: userIds[6], firstName: "Rey", lastName: "Haydock", email: "rhaydock6@nyu.edu", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/155x100.png/cc0000/ffffff", friends: [
      userIds[2],
      userIds[3],
    ], location: "10 Londonderry Hill", occupation: "Accounting Assistant IV", viewedProfile: 46, impressions: 27, isAdnim: false
  },
  {
    _id: userIds[7], firstName: "Ferguson", lastName: "Brockman", email: "fbrockman7@rakuten.co.jp", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/246x100.png/cc0000/ffffff", friends: [
      userIds[6],
      userIds[9],
      userIds[2],
      userIds[4],
      userIds[1],
    ], location: "073 Manufacturers Place", occupation: "Recruiter", viewedProfile: 37, impressions: 32, isAdnim: false
  },
  { _id: userIds[8], firstName: "Anneliese", lastName: "Burke", email: "aburke8@themeforest.net", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/250x100.png/cc0000/ffffff", friends: [], location: "2 Crownhardt Way", occupation: "Environmental Tech", viewedProfile: 82, impressions: 16, isAdnim: false },
  {
    _id: userIds[9], firstName: "Ailee", lastName: "Chomicz", email: "achomicz9@shutterfly.com", password: "$2a$10$xIYj6gdZxktO8ZQP2sQqye4zCBnGWaiRNPboYKqACUfrLEyrG8kUq", picturePath: "http://dummyimage.com/200x100.png/dddddd/000000", friends: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[6],
      userIds[2],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ], location: "345 Utah Place", occupation: "Human Resources Manager", viewedProfile: 60, impressions: 37, isAdnim: false
  },
]

export const fakePosts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    description: "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    picturePath: "http://dummyimage.com/192x100.png/dddddd/000000",
    likes: [
      userIds[0],
      userIds[5],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
      "in the 1960s with the release of Letraset sheets containing Lorem",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    picturePath: "http://dummyimage.com/249x100.png/dddddd/000000",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[6],
      userIds[2],
    ],
    comments: [
      "only five centuries, but also the leap into electronic",
      "typesetting, remaining essentially unchanged. It was popularised",
      "in the 1960s with the release of Letraset sheets containing Lorem",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    picturePath: "http://dummyimage.com/141x100.png/dddddd/000000",
    likes: [
      userIds[6],
      userIds[2],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    description: "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    picturePath: "http://dummyimage.com/219x100.png/cc0000/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[6],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "typesetting, remaining essentially unchanged. It was popularised",
      "in the 1960s with the release of Letraset sheets containing Lorem",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    description: "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    picturePath: "http://dummyimage.com/228x100.png/dddddd/000000",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    description: "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    picturePath: "http://dummyimage.com/229x100.png/ff4444/ffffff",
    likes: [
      userIds[0],
      userIds[4],
    ],
    comments: [
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    description: "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    picturePath: "http://dummyimage.com/159x100.png/cc0000/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[6],
      userIds[2],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    description: "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    picturePath: "http://dummyimage.com/150x100.png/ff4444/ffffff",
    likes: [],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
      "only five centuries, but also the leap into electronic",
      "typesetting, remaining essentially unchanged. It was popularised",
      "in the 1960s with the release of Letraset sheets containing Lorem",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    description: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    picturePath: "http://dummyimage.com/247x100.png/cc0000/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[4],
    ],
    comments: []
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    description: "Praesent id massa id nisl venenatis lacinia.Aenean sit amet justo.Morbi ut odio.",
    picturePath: "http://dummyimage.com/189x100.png/dddddd/000000",
    likes: [
      userIds[0],
      userIds[5],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "in the 1960s with the release of Letraset sheets containing Lorem",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    description: "Vivamus tortor.Duis mattis egestas metus.Aenean fermentum.Donec ut mauris eget massa tempor convallis.Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.Quisque id justo sit amet sapien dignissim vestibulum.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.Vestibulum ac est lacinia nisi venenatis tristique.",
    picturePath: "http://dummyimage.com/153x100.png/ff4444/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[6],
      userIds[2],
      userIds[7],
      userIds[3],
      userIds[4],
    ],
    comments: [
      "in the 1960s with the release of Letraset sheets containing Lorem",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.Mauris lacinia sapien quis libero.Nullam sit amet turpis elementum ligula vehicula consequat.Morbi a ipsum.Integer a nibh.In quis justo.Maecenas rhoncus aliquam lacus.Morbi quis tortor id nulla ultrices aliquet.",
    picturePath: "http://dummyimage.com/163x100.png/dddddd/000000",
    likes: [
      userIds[0],
      userIds[5],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "typesetting, remaining essentially unchanged. It was popularised",
      "in the 1960s with the release of Letraset sheets containing Lorem",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    description: "Curabitur gravida nisi at nibh.In hac habitasse platea dictumst.Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    picturePath: "http://dummyimage.com/229x100.png/5fa2dd/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[6],
      userIds[2],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[8],
    description: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.Aliquam erat volutpat.In congue.Etiam justo.Etiam pretium iaculis justo.In hac habitasse platea dictumst.Etiam faucibus cursus urna.Ut tellus.Nulla ut erat id mauris vulputate elementum.Nullam varius.",
    picturePath: "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
    likes: [],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "in the 1960s with the release of Letraset sheets containing Lorem",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.Curabitur convallis.Duis consequat dui nec nisi volutpat eleifend.",
    picturePath: "http://dummyimage.com/216x100.png/cc0000/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[6],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
      "only five centuries, but also the leap into electronic",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.Mauris lacinia sapien quis libero.Nullam sit amet turpis elementum ligula vehicula consequat.Morbi a ipsum.Integer a nibh.In quis justo.Maecenas rhoncus aliquam lacus.Morbi quis tortor id nulla ultrices aliquet.Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    picturePath: "http://dummyimage.com/149x100.png/ff4444/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[1],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "in the 1960s with the release of Letraset sheets containing Lorem",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    description: "Duis bibendum.Morbi non quam nec dui luctus rutrum.Nulla tellus.In sagittis dui vel nisl.Duis ac nibh.Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.Suspendisse potenti.",
    picturePath: "http://dummyimage.com/197x100.png/cc0000/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[6],
      userIds[2],
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: []
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    description: "Nulla justo.Aliquam quis turpis eget elit sodales scelerisque.Mauris sit amet eros.Suspendisse accumsan tortor quis turpis.",
    picturePath: "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
      "industry.Lorem Ipsum has been the standard dummy text ever since",
      "scrambled it to make a type specimen book. It has survived not",
      "only five centuries, but also the leap into electronic",
      "like Aldus PageMaker including versions of Lorem Ipsum",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    description: "Morbi non quam nec dui luctus rutrum.Nulla tellus.In sagittis dui vel nisl.Duis ac nibh.Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.Suspendisse potenti.In eleifend quam a odio.In hac habitasse platea dictumst.",
    picturePath: "http://dummyimage.com/216x100.png/dddddd/000000",
    likes: [
      userIds[7],
      userIds[3],
      userIds[8],
      userIds[4],
    ],
    comments: [
      "the 1500s, when an unknown printer took a galley of type and",
      "scrambled it to make a type specimen book. It has survived not",
      "only five centuries, but also the leap into electronic",
      "typesetting, remaining essentially unchanged. It was popularised",
      "in the 1960s with the release of Letraset sheets containing Lorem",
    ]
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    description: "Suspendisse accumsan tortor quis turpis.Sed ante.",
    picturePath: "http://dummyimage.com/220x100.png/ff4444/ffffff",
    likes: [
      userIds[0],
      userIds[5],
      userIds[2],
      userIds[7],
      userIds[4],
    ],
    comments: []
  }
]