import { filterMoviesAndSeries } from "utils";

const trendingWeeklyUnfiltred = {
  page: 1,
  results: [
    {
      original_language: "en",
      original_title: "The King's Man",
      poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
      id: 476669,
      video: false,
      vote_average: 7.1,
      title: "The King's Man",
      overview:
        "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
      release_date: "2021-12-22",
      adult: false,
      backdrop_path: "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
      genre_ids: [28, 12, 53, 10752],
      vote_count: 1323,
      popularity: 3739.757,
      media_type: "movie",
    },
    {
      adult: false,
      backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      genre_ids: [28, 12, 878],
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      video: false,
      vote_average: 8.3,
      vote_count: 8256,
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      id: 634649,
      popularity: 6855.906,
      media_type: "movie",
    },
    {
      original_language: "en",
      original_title: "Texas Chainsaw Massacre",
      poster_path: "/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
      title: "Texas Chainsaw Massacre",
      overview:
        "In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin.",
      id: 632727,
      vote_average: 5.2,
      vote_count: 341,
      adult: false,
      backdrop_path: "/aTSA5zMWlVFTYBIZxTCMbLkfOtb.jpg",
      video: false,
      genre_ids: [27],
      release_date: "2022-02-18",
      popularity: 619.57,
      media_type: "movie",
    },
    {
      vote_average: 6.9,
      overview:
        "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
      id: 646385,
      title: "Scream",
      adult: false,
      backdrop_path: "/usaZV7KB6Man9Rm9TyDAeQf7uVD.jpg",
      genre_ids: [27, 9648, 53],
      vote_count: 618,
      original_language: "en",
      original_title: "Scream",
      poster_path: "/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
      release_date: "2022-01-12",
      video: false,
      popularity: 3464.303,
      media_type: "movie",
    },
    {
      original_language: "en",
      poster_path: "/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg",
      vote_average: 8.4,
      original_name: "Euphoria",
      origin_country: ["US"],
      vote_count: 6930,
      overview:
        "A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.",
      first_air_date: "2019-06-16",
      name: "Euphoria",
      backdrop_path: "/9KnIzPCv9XpWA0MqmwiKBZvV1Sj.jpg",
      id: 85552,
      genre_ids: [18],
      popularity: 5452.129,
      media_type: "tv",
    },
    {
      genre_ids: [28, 12],
      original_language: "en",
      original_title: "Uncharted",
      poster_path: "/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg",
      video: false,
      vote_average: 7.2,
      vote_count: 387,
      overview:
        "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
      release_date: "2022-02-10",
      title: "Uncharted",
      id: 335787,
      adult: false,
      backdrop_path: "/cTTggc927lEPCMsWUsdugSj6wAY.jpg",
      popularity: 1313.476,
      media_type: "movie",
    },
    {
      genre_ids: [28, 80, 14],
      original_language: "en",
      original_title: "Fistful of Vengeance",
      poster_path: "/3cccEF9QZgV9bLWyupJO41HSrOV.jpg",
      video: false,
      vote_average: 5.5,
      vote_count: 61,
      overview:
        "A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.",
      release_date: "2022-02-17",
      title: "Fistful of Vengeance",
      id: 890656,
      adult: false,
      backdrop_path: "/9nKZvyAnGOHEQFpuaPoqVma8E3.jpg",
      popularity: 422.556,
      media_type: "movie",
    },
    {
      original_language: "en",
      original_title: "House of Gucci",
      poster_path: "/vHla3Ej2m53rNmvmYkzvennLrKn.jpg",
      video: false,
      vote_average: 6.7,
      overview:
        "When Patrizia Reggiani, an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately…murder.",
      release_date: "2021-11-24",
      vote_count: 1144,
      title: "House of Gucci",
      adult: false,
      backdrop_path: "/jdLsmpqmP1wTdFUPtmxMnYgoifT.jpg",
      id: 644495,
      genre_ids: [18, 80, 53],
      popularity: 468.33,
      media_type: "movie",
    },
    {
      id: 568124,
      overview:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      release_date: "2021-11-24",
      adult: false,
      backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
      genre_ids: [16, 35, 10751, 14],
      vote_count: 4623,
      original_language: "en",
      original_title: "Encanto",
      poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      title: "Encanto",
      video: false,
      vote_average: 7.8,
      popularity: 3074.945,
      media_type: "movie",
    },
    {
      genre_ids: [28, 12, 14, 878],
      original_language: "en",
      original_title: "Eternals",
      poster_path: "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
      title: "Eternals",
      vote_average: 7.2,
      vote_count: 4490,
      overview:
        "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
      release_date: "2021-11-03",
      video: false,
      id: 524434,
      adult: false,
      backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
      popularity: 1934.727,
      media_type: "movie",
    },
    {
      id: 110492,
      name: "Peacemaker",
      first_air_date: "2022-01-13",
      backdrop_path: "/ctxm191q5o3axFzQsvNPlbKoSYv.jpg",
      vote_count: 1180,
      genre_ids: [10759, 10765, 18],
      vote_average: 8.6,
      original_language: "en",
      poster_path: "/hE3LRZAY84fG19a18pzpkZERjTE.jpg",
      original_name: "Peacemaker",
      origin_country: ["US"],
      overview:
        "The continuing story of Peacemaker – a compellingly vainglorious man who believes in peace at any cost, no matter how many people he has to kill to get it – in the aftermath of the events of “The Suicide Squad.”",
      popularity: 2060.522,
      media_type: "tv",
    },
    {
      overview:
        "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
      id: 85937,
      name: "Demon Slayer: Kimetsu no Yaiba",
      vote_count: 3597,
      genre_ids: [16, 10765, 10759],
      backdrop_path: "/iBAtBLqCMON3NPIjyQ1wdMbpTAk.jpg",
      original_language: "ja",
      original_name: "鬼滅の刃",
      origin_country: ["JP"],
      first_air_date: "2019-04-06",
      poster_path: "/wrCVHdkBlBWdJUZPvnJWcBRuhSY.jpg",
      vote_average: 8.8,
      popularity: 284.388,
      media_type: "tv",
    },
    {
      original_language: "en",
      original_title: "Marry Me",
      poster_path: "/ko1JVbGj4bT8IhCWqjBQ6ZtF2t.jpg",
      vote_count: 171,
      video: false,
      id: 615904,
      release_date: "2022-02-09",
      vote_average: 6.9,
      title: "Marry Me",
      adult: false,
      backdrop_path: "/koaxq5QbARIlfxCOR89atPHv367.jpg",
      overview:
        "Music superstars Kat Valdez and Bastian are getting married before a global audience of fans. But when Kat learns, seconds before her vows, that Bastian has been unfaithful, she decides to marry Charlie, a stranger in the crowd, instead.",
      genre_ids: [35, 10749, 10402],
      popularity: 1483.174,
      media_type: "movie",
    },
    {
      backdrop_path: "/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
      genre_ids: [10759, 10765],
      original_language: "en",
      id: 115036,
      poster_path: "/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg",
      original_name: "The Book of Boba Fett",
      origin_country: ["US"],
      overview:
        "Legendary bounty hunter Boba Fett and mercenary Fennec Shand must navigate the galaxy’s underworld when they return to the sands of Tatooine to stake their claim on the territory once ruled by Jabba the Hutt and his crime syndicate.",
      first_air_date: "2021-12-29",
      vote_count: 1115,
      vote_average: 8.3,
      name: "The Book of Boba Fett",
      popularity: 1180.168,
      media_type: "tv",
    },
    {
      adult: false,
      backdrop_path: "/hB4ibOHXm1Xl0IbuYVioktDGUWJ.jpg",
      genre_ids: [18, 35],
      original_language: "en",
      original_title: "Licorice Pizza",
      poster_path: "/jD98aUKHQZNAmrk0wQQ9wmNQPnP.jpg",
      vote_count: 342,
      video: false,
      vote_average: 7.1,
      title: "Licorice Pizza",
      overview:
        "The story of Alana Kane and Gary Valentine growing up, running around and going through the treacherous navigation of first love in the San Fernando Valley, 1973.",
      id: 718032,
      release_date: "2021-11-26",
      popularity: 194.834,
      media_type: "movie",
    },
    {
      id: 800510,
      overview:
        "A tech worker with agoraphobia discovers recorded evidence of a violent crime but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: she must leave her apartment.",
      release_date: "2022-02-10",
      adult: false,
      backdrop_path: "/mruT954ve6P1zquaRs6XG0hA5k9.jpg",
      vote_count: 131,
      genre_ids: [53],
      vote_average: 6.3,
      original_language: "en",
      original_title: "Kimi",
      poster_path: "/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
      title: "Kimi",
      video: false,
      popularity: 2922.399,
      media_type: "movie",
    },
    {
      overview:
        "When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.",
      release_date: "2021-11-11",
      id: 425909,
      adult: false,
      backdrop_path: "/EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg",
      genre_ids: [14, 35, 12],
      title: "Ghostbusters: Afterlife",
      original_language: "en",
      original_title: "Ghostbusters: Afterlife",
      poster_path: "/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
      vote_count: 2088,
      video: false,
      vote_average: 7.7,
      popularity: 1313.097,
      media_type: "movie",
    },
    {
      title: "The Batman",
      overview:
        "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      release_date: "2022-03-01",
      id: 414906,
      adult: false,
      backdrop_path: "/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg",
      genre_ids: [28, 80, 18],
      original_language: "en",
      original_title: "The Batman",
      poster_path: "/3VFI3zbuNhXzx7dIbYdmvBLekyB.jpg",
      vote_count: 0,
      video: false,
      vote_average: 0.0,
      popularity: 411.063,
      media_type: "movie",
    },
    {
      overview:
        "An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
      release_date: "2021-12-02",
      adult: false,
      backdrop_path: "/mqDnDhG5N6fn1H4MKQqr8E5wfeK.jpg",
      vote_count: 815,
      genre_ids: [80, 18, 53],
      id: 597208,
      original_language: "en",
      original_title: "Nightmare Alley",
      poster_path: "/680klE0dIreQQOyWKFgNnCAJtws.jpg",
      title: "Nightmare Alley",
      video: false,
      vote_average: 7.2,
      popularity: 2931.715,
      media_type: "movie",
    },
    {
      backdrop_path: "/yvKrycViRMQcIgdnjsM5JGNWU4Q.jpg",
      first_air_date: "2013-04-07",
      genre_ids: [10765, 16, 10759],
      id: 1429,
      name: "Attack on Titan",
      origin_country: ["JP"],
      original_language: "ja",
      original_name: "進撃の巨人",
      overview:
        "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
      poster_path: "/aiy35Evcofzl7hASZZvsFgltHTX.jpg",
      vote_average: 8.6,
      vote_count: 4018,
      popularity: 281.924,
      media_type: "tv",
    },
  ],
  total_pages: 1000,
  total_results: 20000,
};

const searchResultUnfiltred = {
  page: 1,
  results: [
    {
      backdrop_path: "/k7t2FSSeoTiPPb9hhyUHTVz7R8p.jpg",
      first_air_date: "1991-09-16",
      genre_ids: [16],
      id: 42245,
      media_type: "tv",
      name: "James Bond Jr.",
      origin_country: ["US"],
      original_language: "en",
      original_name: "James Bond Jr.",
      overview:
        "While attending prep school at Warfield Academy, James Bond Jr. with the help of his friends I.Q. (supposedly the grandson of Q) and Gordo Leiter (supposedly the son of Felix Leiter), fights against the evil terrorist organization SCUM (Saboteurs and Criminals United in Mayhem). Expanding on his uncle's famous line, James Bond Jr.'s catch phrase was \"Bond, James Bond. Junior.\"",
      popularity: 9.08,
      poster_path: "/cwUnbz31k7K5fV0zximhN2nPM14.jpg",
      vote_average: 5.2,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: "/8Bcm0qBnS6yjwTFad8eI6thzRub.jpg",
      genre_ids: [99],
      id: 869250,
      media_type: "movie",
      original_language: "en",
      original_title: "Being James Bond",
      overview:
        "Daniel Craig candidly reflects on his 15 year adventure as James Bond. Including never-before-seen archival footage from Casino Royale to the upcoming 25th film No Time To Die, Craig shares his personal memories in conversation with 007 producers, Michael G Wilson and Barbara Broccoli.",
      popularity: 9.04,
      poster_path: "/jLaAbwPDzHNbJfZ0Xj0CkeM56CO.jpg",
      release_date: "2021-08-29",
      title: "Being James Bond",
      video: false,
      vote_average: 7.8,
      vote_count: 46,
    },
    {
      adult: false,
      backdrop_path: "/xptBI2iwXQWS3G9v1yfNKJX6Cag.jpg",
      genre_ids: [99, 36, 10770],
      id: 688656,
      media_type: "movie",
      original_language: "de",
      original_title: "Richard Sorge - Stalins James Bond",
      overview:
        "An account of the troubled life of Richard Sorge (1895-1944), a Soviet spy of German origin who played a decisive role in the outcome of World War II.",
      popularity: 2.63,
      poster_path: "/j523NJfe7KRUfBLSOPsGxrTgoyR.jpg",
      release_date: "2017-12-30",
      title: "Stalin's James Bond",
      video: false,
      vote_average: 6,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/Lz17qcjUuLAjHokrnmBAC1wasT.jpg",
      genre_ids: [99],
      id: 338749,
      media_type: "movie",
      original_language: "en",
      original_title: "James Bond: For Real",
      overview:
        "The stunts and action set pieces for the the 2006 James Bond adventure 'Casino Royale'.",
      popularity: 4.242,
      poster_path: "/vYNYCv3LrZjRvQaFTm5HnZVCIut.jpg",
      release_date: "2006-11-22",
      title: "James Bond: For Real",
      video: true,
      vote_average: 7.3,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 44650,
      media_type: "movie",
      original_language: "en",
      original_title: "The James Bond Story",
      overview:
        "Bond... James Bond! Perhaps the greatest fictional cinema icon ever. He first appeared on the big screen in 1962 in Dr. No and has remained the most powerful action hero ever since. The secret to his success is his adaptability. No matter what tight spots he finds himself in, he always appears to be suave, sophisticated and cool. This is the full story -- from the creation of the character, the men who played him, all the toys, and all the women. Everything you wanted to know about James Bond... and more.",
      popularity: 3.142,
      poster_path: "/wG1iksqapNCNNZuIneHuF6j9Sg0.jpg",
      release_date: "1999-10-09",
      title: "The James Bond Story",
      video: false,
      vote_average: 6.5,
      vote_count: 11,
    },
    {
      adult: false,
      backdrop_path: "/3zpR0XaPfXxmoh7inMDuim2Uc3S.jpg",
      genre_ids: [35, 18, 53],
      id: 266315,
      media_type: "movie",
      original_language: "pa",
      original_title: "Jatt James Bond",
      overview:
        "Shinda was mistreated by his relatives therefore he finds other ways to have his love Laali. Shinda and his two other friends come up with a plan to solve all of their problems.",
      popularity: 2.698,
      poster_path: "/kgeAS28rBZJSEVypaKpEaI4wunn.jpg",
      release_date: "2014-04-25",
      title: "Jatt James Bond",
      video: false,
      vote_average: 5.2,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [28, 12, 10752],
      id: 582808,
      media_type: "movie",
      original_language: "en",
      original_title: "James Bond - 50th Anniversary: Bonus Features",
      overview:
        "All the Bonds. All the girls. All the action. All in high-definition. Metro-Goldwyn-Mayer Studios and Twentieth Century Fox Home Entertainment mark James Bond’s monumental golden anniversary with the release of BOND 50, showcasing 22 of the classic Bond films on Blu-ray together for the first time ever, neatly packaged into one cool, sleek collectable box-set. The collection marks the debut of nine James Bond films previously unavailable in high definition Blu-ray and comes with a dossier of more than 122 hours of bonus features.",
      popularity: 4.416,
      poster_path: "/fu5O6WNC1Dg3Nsd7l8VskNTxr9y.jpg",
      release_date: "2012-01-01",
      title: "James Bond - 50th Anniversary: Bonus Features",
      video: true,
      vote_average: 6.1,
      vote_count: 7,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 685325,
      media_type: "movie",
      original_language: "en",
      original_title: "The World of James Bond",
      overview:
        "Elizabeth Hurley hosts a one hour documentary on the history of the James Bond film series to tie in with the seventeenth Bond film, GoldenEye.",
      popularity: 2.641,
      poster_path: "/qlWcj1XNfvUQ3npoTrkmNdYPrAX.jpg",
      release_date: "1995-10-29",
      title: "The World of James Bond",
      video: false,
      vote_average: 6,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 465739,
      media_type: "movie",
      original_language: "en",
      original_title: "James Bond Supports International Women's Day",
      overview:
        "This short film is made by 'We Are Equals' to celebrate International Women's Day. James Bond video for international women's day shows 007's feminine side. Daniel Craig and Dame Judi Dench team up for two-minute film highlighting the need for gender equality. 007 star Daniel Craig undergo a dramatic makeover as he puts himself, quite literally, in a woman's shoes.",
      popularity: 2.625,
      poster_path: "/oiBCjrSexJd9O51KJtuWeMxSN8O.jpg",
      release_date: "2011-03-05",
      title: "James Bond Supports International Women's Day",
      video: false,
      vote_average: 5.8,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [28],
      id: 822110,
      media_type: "movie",
      original_language: "en",
      original_title: "Daniel Craig vs James Bond",
      overview:
        "Starting with a high-speed taxi sequence, Daniel is constantly recognized as James Bond by surprised locals as he hunts down his missing passport.",
      popularity: 2.461,
      poster_path: "/7hknQnJPd5lfrW1QFJUxmSxp3e4.jpg",
      release_date: "2020-01-25",
      title: "Daniel Craig vs James Bond",
      video: false,
      vote_average: 4.5,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 368155,
      media_type: "movie",
      original_language: "en",
      original_title: "Happy Anniversary 007: 25 Years of James Bond",
      overview:
        "An hour documentary on the history of Bond for the 25th anniversary of the film series.",
      popularity: 3.838,
      poster_path: "/mVeyZnJBNXFX6C02Hya1ZahH3xH.jpg",
      release_date: "1987-05-13",
      title: "Happy Anniversary 007: 25 Years of James Bond",
      video: false,
      vote_average: 5.4,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 264017,
      media_type: "movie",
      original_language: "en",
      original_title: "30 Years of James Bond",
      overview:
        "An examination of why the James Bond films have proved so popular including a discussion between the four actors who have played Bond, an interview with Cubby Broccoli and contributions from the directors, production designers, special effects and stuntmen.",
      popularity: 1.441,
      poster_path: "/nNSkinqAnUdOlbHG8EG3fWloSsf.jpg",
      release_date: "1992-10-03",
      title: "30 Years of James Bond",
      video: false,
      vote_average: 5.3,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 252359,
      media_type: "movie",
      original_language: "en",
      original_title: "James Bond in India",
      overview:
        "The making of the James Bond movie Octopussy (1983) in Udaipur, India during 1982.",
      popularity: 1.453,
      poster_path: "/lCiDDPJyeM9NdQ7XQwMEkHamxBk.jpg",
      release_date: "1983-01-25",
      title: "James Bond in India",
      video: false,
      vote_average: 5,
      vote_count: 2,
    },
    {
      adult: false,
      backdrop_path: "/wmeaIRdbWrSWxzdESsQDA4rAuSM.jpg",
      genre_ids: [35, 28, 10402],
      id: 896864,
      media_type: "movie",
      original_language: "en",
      original_title: "Lady James Bond",
      overview:
        "Indian superspy Lady James Bond is assigned to protect a professor and his top-secret research.",
      popularity: 1.09,
      poster_path: "/4FBy8LmuNvtugUGO6nBMSPPjQFI.jpg",
      release_date: "1985-05-01",
      title: "Lady James Bond",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99, 10770],
      id: 508744,
      media_type: "movie",
      original_language: "de",
      original_title: "James Bond: The First 21 Years",
      overview:
        "A look back at the first 21 years of Britain's most successful film series.",
      popularity: 2.085,
      poster_path: "/i27tAbaQBSNMWzcv8QCwfMCxmkz.jpg",
      release_date: "1983-05-27",
      title: "James Bond: The First 21 Years",
      video: false,
      vote_average: 4,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 147532,
      media_type: "movie",
      original_language: "en",
      original_title: "Noi non siamo come James Bond",
      overview:
        "How two friends, thanks to the strong relationship between them, piece back together the fragments of their existence sent topsy-turvy by serious illness? Through a peculiar kind of road movie, alternating the dense reflections of the two main characters on life, with their easy positive glances towards the future. Starting from a weird juvenile infatuation with James Bond: he utterly immortal, they extremely mortal. Now more than before.",
      popularity: 1.082,
      poster_path: null,
      release_date: "2012-11-29",
      title: "We're Nothing Like James Bond",
      video: false,
      vote_average: 6.3,
      vote_count: 4,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 798071,
      media_type: "movie",
      original_language: "en",
      original_title: "James Bond Down River",
      overview:
        "Promotional documentary filmed at the London East End Docklands area and River Thames for the filming of the opening boat chase for The World Is Not Enough (1999).",
      popularity: 1.121,
      poster_path: null,
      release_date: "2000-02-26",
      title: "James Bond Down River",
      video: false,
      vote_average: 5,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [99],
      id: 209912,
      media_type: "movie",
      original_language: "en",
      original_title: "Silhouettes: The James Bond Titles",
      overview:
        "Documentary exploring the famous title sequences used in the Bond movies. Narrated by Patrick Macnee. Included on the 'You Only Live Twice' Bluray disc",
      popularity: 1.39,
      poster_path: "/9YJVDUPQmQnHbl8S4UNbTDZDyU7.jpg",
      release_date: "2000-07-25",
      title: "Silhouettes: The James Bond Titles",
      video: false,
      vote_average: 5.4,
      vote_count: 5,
    },
  ],
  total_pages: 5,
  total_results: 88,
};

const detailSeries = {
  adult: false,
  backdrop_path: "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
  created_by: [
    {
      id: 9813,
      credit_id: "5256c8c219c2956ff604858a",
      name: "David Benioff",
      gender: 2,
      profile_path: "/xvNN5huL0X8yJ7h3IZfGG4O2zBD.jpg",
    },
    {
      id: 228068,
      credit_id: "552e611e9251413fea000901",
      name: "D. B. Weiss",
      gender: 2,
      profile_path: "/2RMejaT793U9KRk2IEbFfteQntE.jpg",
    },
  ],
  episode_run_time: [60],
  first_air_date: "2011-04-17",
  genres: [
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10759,
      name: "Action & Adventure",
    },
  ],
  homepage: "http://www.hbo.com/game-of-thrones",
  id: 1399,
  in_production: false,
  languages: ["en"],
  last_air_date: "2019-05-19",
  last_episode_to_air: {
    air_date: "2019-05-19",
    episode_number: 6,
    id: 1551830,
    name: "The Iron Throne",
    overview:
      "In the aftermath of the devastating attack on King's Landing, Daenerys must face the survivors.",
    production_code: "806",
    season_number: 8,
    still_path: "/3x8tJon5jXFa1ziAM93hPKNyW7i.jpg",
    vote_average: 4.8,
    vote_count: 169,
  },
  name: "Game of Thrones",
  next_episode_to_air: null,
  networks: [
    {
      name: "HBO",
      id: 49,
      logo_path: "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      origin_country: "US",
    },
  ],
  number_of_episodes: 73,
  number_of_seasons: 8,
  origin_country: ["US"],
  original_language: "en",
  original_name: "Game of Thrones",
  overview:
    "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
  popularity: 609.921,
  poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  production_companies: [
    {
      id: 76043,
      logo_path: "/9RO2vbQ67otPrBLXCaC8UMp3Qat.png",
      name: "Revolution Sun Studios",
      origin_country: "US",
    },
    {
      id: 12525,
      logo_path: null,
      name: "Television 360",
      origin_country: "",
    },
    {
      id: 5820,
      logo_path: null,
      name: "Generator Entertainment",
      origin_country: "",
    },
    {
      id: 12526,
      logo_path: null,
      name: "Bighead Littlehead",
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "GB",
      name: "United Kingdom",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  seasons: [
    {
      air_date: "2010-12-05",
      episode_count: 227,
      id: 3627,
      name: "Specials",
      overview: "",
      poster_path: "/kMTcwNRfFKCZ0O2OaBZS0nZ2AIe.jpg",
      season_number: 0,
    },
    {
      air_date: "2011-04-18",
      episode_count: 10,
      id: 3624,
      name: "Season 1",
      overview:
        "Trouble is brewing in the Seven Kingdoms of Westeros. For the driven inhabitants of this visionary world, control of Westeros' Iron Throne holds the lure of great power. But in a land where the seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, an ancient evil has returned. In Season One, the story centers on three primary areas: the Stark and the Lannister families, whose designs on controlling the throne threaten a tenuous peace; the dragon princess Daenerys, heir to the former dynasty, who waits just over the Narrow Sea with her malevolent brother Viserys; and the Great Wall--a massive barrier of ice where a forgotten danger is stirring.",
      poster_path: "/wgfKiqzuMrFIkU1M68DDDY8kGC1.jpg",
      season_number: 1,
    },
    {
      air_date: "2012-04-01",
      episode_count: 10,
      id: 3625,
      name: "Season 2",
      overview:
        "The cold winds of winter are rising in Westeros...war is coming...and five kings continue their savage quest for control of the all-powerful Iron Throne. With winter fast approaching, the coveted Iron Throne is occupied by the cruel Joffrey, counseled by his conniving mother Cersei and uncle Tyrion. But the Lannister hold on the Throne is under assault on many fronts. Meanwhile, a new leader is rising among the wildings outside the Great Wall, adding new perils for Jon Snow and the order of the Night's Watch.",
      poster_path: "/5tuhCkqPOT20XPwwi9NhFnC1g9R.jpg",
      season_number: 2,
    },
    {
      air_date: "2013-03-31",
      episode_count: 10,
      id: 3626,
      name: "Season 3",
      overview:
        "Duplicity and treachery...nobility and honor...conquest and triumph...and, of course, dragons. In Season 3, family and loyalty are the overarching themes as many critical storylines from the first two seasons come to a brutal head. Meanwhile, the Lannisters maintain their hold on King's Landing, though stirrings in the North threaten to alter the balance of power; Robb Stark, King of the North, faces a major calamity as he tries to build on his victories; a massive army of wildlings led by Mance Rayder march for the Wall; and Daenerys Targaryen--reunited with her dragons--attempts to raise an army in her quest for the Iron Throne.",
      poster_path: "/7d3vRgbmnrRQ39Qmzd66bQyY7Is.jpg",
      season_number: 3,
    },
    {
      air_date: "2014-04-06",
      episode_count: 10,
      id: 3628,
      name: "Season 4",
      overview:
        "The War of the Five Kings is drawing to a close, but new intrigues and plots are in motion, and the surviving factions must contend with enemies not only outside their ranks, but within.",
      poster_path: "/dniQ7zw3mbLJkd1U0gdFEh4b24O.jpg",
      season_number: 4,
    },
    {
      air_date: "2015-04-12",
      episode_count: 10,
      id: 62090,
      name: "Season 5",
      overview:
        "The War of the Five Kings, once thought to be drawing to a close, is instead entering a new and more chaotic phase. Westeros is on the brink of collapse, and many are seizing what they can while the realm implodes, like a corpse making a feast for crows.",
      poster_path: "/527sR9hNDcgVDKNUE3QYra95vP5.jpg",
      season_number: 5,
    },
    {
      air_date: "2016-04-24",
      episode_count: 10,
      id: 71881,
      name: "Season 6",
      overview:
        "Following the shocking developments at the conclusion of season five, survivors from all parts of Westeros and Essos regroup to press forward, inexorably, towards their uncertain individual fates. Familiar faces will forge new alliances to bolster their strategic chances at survival, while new characters will emerge to challenge the balance of power in the east, west, north and south.",
      poster_path: "/zvYrzLMfPIenxoq2jFY4eExbRv8.jpg",
      season_number: 6,
    },
    {
      air_date: "2017-07-16",
      episode_count: 7,
      id: 81266,
      name: "Season 7",
      overview:
        "The long winter is here. And with it comes a convergence of armies and attitudes that have been brewing for years.",
      poster_path: "/3dqzU3F3dZpAripEx9kRnijXbOj.jpg",
      season_number: 7,
    },
    {
      air_date: "2019-04-14",
      episode_count: 6,
      id: 107971,
      name: "Season 8",
      overview:
        "The Great War has come, the Wall has fallen and the Night King's army of the dead marches towards Westeros. The end is here, but who will take the Iron Throne?",
      poster_path: "/39FHkTLnNMjMVXdIDwZN8SxYqD6.jpg",
      season_number: 8,
    },
  ],
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Ended",
  tagline: "Winter Is Coming",
  type: "Scripted",
  vote_average: 8.4,
  vote_count: 17319,
};

const detailMovie = {
  adult: false,
  backdrop_path: "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
  belongs_to_collection: {
    id: 645,
    name: "James Bond Collection",
    poster_path: "/HORpg5CSkmeQlAolx3bKMrKgfi.jpg",
    backdrop_path: "/dOSECZImeyZldoq0ObieBE0lwie.jpg",
  },
  budget: 250000000,
  genres: [
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 53,
      name: "Thriller",
    },
  ],
  homepage: "https://www.007.com/no-time-to-die/",
  id: 370172,
  imdb_id: "tt2382320",
  original_language: "en",
  original_title: "No Time to Die",
  overview:
    "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
  popularity: 381.394,
  poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
  production_companies: [
    {
      id: 7576,
      logo_path: "/oYcUi1byZ312Z3xiz5ojz9RQLND.png",
      name: "Eon Productions",
      origin_country: "GB",
    },
    {
      id: 21,
      logo_path: "/aOWKh4gkNrfFZ3Ep7n0ckPhoGb5.png",
      name: "Metro-Goldwyn-Mayer",
      origin_country: "US",
    },
    {
      id: 60,
      logo_path: "/oJXpAs4I3W46e4dkaOEzCa4yBko.png",
      name: "United Artists",
      origin_country: "US",
    },
    {
      id: 33,
      logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
      name: "Universal Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "GB",
      name: "United Kingdom",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2021-09-29",
  revenue: 774153007,
  runtime: 163,
  spoken_languages: [
    {
      english_name: "Russian",
      iso_639_1: "ru",
      name: "Pусский",
    },
    {
      english_name: "French",
      iso_639_1: "fr",
      name: "Français",
    },
    {
      english_name: "Spanish",
      iso_639_1: "es",
      name: "Español",
    },
    {
      english_name: "Italian",
      iso_639_1: "it",
      name: "Italiano",
    },
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "The mission that changes everything begins…",
  title: "No Time to Die",
  video: false,
  vote_average: 7.5,
  vote_count: 3529,
};

const trendingWeekly = trendingWeeklyUnfiltred.results.filter(
  filterMoviesAndSeries
);
const searchResults = searchResultUnfiltred.results.filter(
  filterMoviesAndSeries
);

export { trendingWeekly, searchResults, detailSeries, detailMovie };
