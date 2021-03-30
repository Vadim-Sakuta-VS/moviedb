import React from 'react';
import {Container, Row} from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
    let movies = [
        {
            "adult": false,
            "backdrop_path": "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
            "genre_ids": [
                28,
                12,
                14,
                878
            ],
            "id": 791373,
            "original_language": "en",
            "original_title": "Zack Snyder's Justice League",
            "overview": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
            "popularity": 9701.638,
            "poster_path": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
            "release_date": "2021-03-18",
            "title": "Zack Snyder's Justice League",
            "video": false,
            "vote_average": 8.7,
            "vote_count": 4032
        },
        {
            "adult": false,
            "backdrop_path": "/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
            "genre_ids": [
                28,
                878
            ],
            "id": 399566,
            "original_language": "en",
            "original_title": "Godzilla vs. Kong",
            "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
            "popularity": 9043.741,
            "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
            "release_date": "2021-03-24",
            "title": "Godzilla vs. Kong",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 155
        },
        {
            "adult": false,
            "backdrop_path": "/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg",
            "genre_ids": [
                18,
                14,
                878
            ],
            "id": 581389,
            "original_language": "ko",
            "original_title": "승리호",
            "overview": "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
            "popularity": 3228.143,
            "poster_path": "/1e1tUWInXCVrrwY6ntuNRuwEj7P.jpg",
            "release_date": "2021-02-05",
            "title": "Space Sweepers",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 443
        },
        {
            "adult": false,
            "backdrop_path": "/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
            "genre_ids": [
                16,
                12,
                14,
                10751,
                28
            ],
            "id": 527774,
            "original_language": "en",
            "original_title": "Raya and the Last Dragon",
            "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
            "popularity": 3152.527,
            "poster_path": "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
            "release_date": "2021-03-03",
            "title": "Raya and the Last Dragon",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 1815
        },
        {
            "adult": false,
            "backdrop_path": "/gzJnMEMkHowkUndn9gCr8ghQPzN.jpg",
            "genre_ids": [
                53,
                28,
                18
            ],
            "id": 793723,
            "original_language": "fr",
            "original_title": "Sentinelle",
            "overview": "Transferred home after a traumatizing combat mission, a highly trained French soldier uses her lethal skills to hunt down the man who hurt her sister.",
            "popularity": 2299.543,
            "poster_path": "/fFRq98cW9lTo6di2o4lK1qUAWaN.jpg",
            "release_date": "2021-03-05",
            "title": "Sentinelle",
            "video": false,
            "vote_average": 6,
            "vote_count": 292
        },
        {
            "adult": false,
            "backdrop_path": "/z8TvnEVRenMSTemxYZwLGqFofgF.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 458576,
            "original_language": "en",
            "original_title": "Monster Hunter",
            "overview": "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
            "popularity": 2021.063,
            "poster_path": "/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
            "release_date": "2020-12-03",
            "title": "Monster Hunter",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 1292
        },
        {
            "adult": false,
            "backdrop_path": "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
            "genre_ids": [
                28,
                35,
                10751
            ],
            "id": 587807,
            "original_language": "en",
            "original_title": "Tom & Jerry",
            "overview": "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
            "popularity": 1931.099,
            "poster_path": "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
            "release_date": "2021-02-11",
            "title": "Tom & Jerry",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 1019
        },
        {
            "adult": false,
            "backdrop_path": "/egg7KFi18TSQc1s24RMmR9i2zO6.jpg",
            "genre_ids": [
                14,
                28,
                12
            ],
            "id": 464052,
            "original_language": "en",
            "original_title": "Wonder Woman 1984",
            "overview": "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
            "popularity": 1894.648,
            "poster_path": "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
            "release_date": "2020-12-16",
            "title": "Wonder Woman 1984",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 4533
        },
        {
            "adult": false,
            "backdrop_path": "/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 587996,
            "original_language": "es",
            "original_title": "Bajocero",
            "overview": "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
            "popularity": 1715.942,
            "poster_path": "/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg",
            "release_date": "2021-01-29",
            "title": "Below Zero",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 482
        },
        {
            "adult": false,
            "backdrop_path": "/uQtqiAu2bBlokqjlURVLEha6zoi.jpg",
            "genre_ids": [
                80,
                18
            ],
            "id": 544401,
            "original_language": "en",
            "original_title": "Cherry",
            "overview": "Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
            "popularity": 1630.702,
            "poster_path": "/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
            "release_date": "2021-02-26",
            "title": "Cherry",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 396
        },
        {
            "adult": false,
            "backdrop_path": "/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg",
            "genre_ids": [
                27,
                53,
                12,
                9648
            ],
            "id": 522444,
            "original_language": "en",
            "original_title": "Black Water: Abyss",
            "overview": "An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.",
            "popularity": 1106.085,
            "poster_path": "/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg",
            "release_date": "2020-07-09",
            "title": "Black Water: Abyss",
            "video": false,
            "vote_average": 5,
            "vote_count": 172
        },
        {
            "adult": false,
            "backdrop_path": "/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg",
            "genre_ids": [
                18,
                53
            ],
            "id": 649087,
            "original_language": "sv",
            "original_title": "Red Dot",
            "overview": "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.",
            "popularity": 1119.048,
            "poster_path": "/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg",
            "release_date": "2021-02-11",
            "title": "Red Dot",
            "video": false,
            "vote_average": 6,
            "vote_count": 395
        },
        {
            "adult": false,
            "backdrop_path": "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
            "genre_ids": [
                53,
                80
            ],
            "id": 602269,
            "original_language": "en",
            "original_title": "The Little Things",
            "overview": "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
            "popularity": 1015.758,
            "poster_path": "/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg",
            "release_date": "2021-01-28",
            "title": "The Little Things",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 664
        },
        {
            "adult": false,
            "backdrop_path": "/5nAYjMYxC8bHc7sKCFhfd6y3eMa.jpg",
            "genre_ids": [
                878,
                28,
                12,
                14
            ],
            "id": 686487,
            "original_language": "en",
            "original_title": "King Kong vs. Godzilla",
            "overview": "The more famous John Beck re-edit of the original Japanese film. Eric Carter of United Nation News is joined by Dr. Johnson as Godzilla emerges from hibernation and a Japanese pharmaceutical company seeks publicity with a monster of their own. New footage with American actors was inserted along with several scenes of the Japanese original omitted and re-edited to alter the narrative structure around a news report not present in the original. Much of the original soundtrack was replaced in favor of stock music from the Universal Library with footage of The Mysterians also inserted through out the film. Due to the licensing deal between Toho and Universal the American edit is the primary and most widely available version of the film.",
            "popularity": 1246.928,
            "poster_path": "/xcvSLEBoMYRhkHaVX00txdxocet.jpg",
            "release_date": "1963-06-26",
            "title": "King Kong vs. Godzilla",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 98
        },
        {
            "adult": false,
            "backdrop_path": "/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg",
            "genre_ids": [
                53,
                28,
                878
            ],
            "id": 775996,
            "original_language": "en",
            "original_title": "Outside the Wire",
            "overview": "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",
            "popularity": 1241.822,
            "poster_path": "/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg",
            "release_date": "2021-01-15",
            "title": "Outside the Wire",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 916
        },
        {
            "adult": false,
            "backdrop_path": "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
            "genre_ids": [
                878,
                28
            ],
            "id": 651571,
            "original_language": "en",
            "original_title": "Breach",
            "overview": "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
            "popularity": 1020.571,
            "poster_path": "/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
            "release_date": "2020-12-17",
            "title": "Breach",
            "video": false,
            "vote_average": 4.5,
            "vote_count": 332
        },
        {
            "adult": false,
            "backdrop_path": "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
            "genre_ids": [
                14,
                28,
                878
            ],
            "id": 590706,
            "original_language": "en",
            "original_title": "Jiu Jitsu",
            "overview": "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
            "popularity": 940.434,
            "poster_path": "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
            "release_date": "2020-11-20",
            "title": "Jiu Jitsu",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 347
        },
        {
            "adult": false,
            "backdrop_path": "/jb6Ju38HmKX0bYHCmAxs8HyNeJ2.jpg",
            "genre_ids": [
                878,
                28
            ],
            "id": 373571,
            "original_language": "en",
            "original_title": "Godzilla: King of the Monsters",
            "overview": "Follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species, thought to be mere myths, rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
            "popularity": 1020.403,
            "poster_path": "/mzOHg7Q5q9yUmY0b9Esu8Qe6Nnm.jpg",
            "release_date": "2019-05-29",
            "title": "Godzilla: King of the Monsters",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 3832
        },
        {
            "adult": false,
            "backdrop_path": "/9xeEGUZjgiKlI69jwIOi0hjKUIk.jpg",
            "genre_ids": [
                14,
                28,
                12,
                16
            ],
            "id": 664767,
            "original_language": "en",
            "original_title": "Mortal Kombat Legends: Scorpion's Revenge",
            "overview": "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.",
            "popularity": 981.37,
            "poster_path": "/4VlXER3FImHeFuUjBShFamhIp9M.jpg",
            "release_date": "2020-04-12",
            "title": "Mortal Kombat Legends: Scorpion's Revenge",
            "video": false,
            "vote_average": 8.4,
            "vote_count": 812
        },
        {
            "adult": false,
            "backdrop_path": "/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg",
            "genre_ids": [
                28,
                12,
                53
            ],
            "id": 581387,
            "original_language": "ko",
            "original_title": "백두산",
            "overview": "Stagnant since 1903, at an elevation of 9000', a volcano erupts on the mythical and majestic Baekdu Mountain.",
            "popularity": 882.058,
            "poster_path": "/zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg",
            "release_date": "2019-12-19",
            "title": "Ashfall",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 218
        }
    ];

    let movieCardsElements = movies.map(m => (
        <MovieCard
            key={m.id}
            title={m.title}
            overview={m.overview}
            voteAverage={m.vote_average}
            voteCount={m.vote_count}
            releaseDate={m.release_date}
            posterPath={m.poster_path}
        />
    ));

    return (
        <Container className='p-2'>
            <Row className='justify-content-center justify-content-md-start'>
                {movieCardsElements}
            </Row>
        </Container>
    );
};

export default MovieList;