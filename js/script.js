const movies = [
    {"title": "Avengers: Age of Ultron", "youtubeId": "tmeOjFno6Do"},
    {"title": "Guardians of The Galaxy", "youtubeId": "d96cjJhvlMA"},
    {"title": "Inseption", "youtubeId": "YoHD9XEInc0"},
    {"title": "Wreck it Ralph 2", "youtubeId": "KHQhp2cGZtE"},
    {"title": "Anihilation", "youtubeId": "89OP78l9oF0"},
    {"title": "Interstellar", "youtubeId": "zSWdZVtXT7E"}
]

let youtube = {
    getIdFromUrl: function (videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('http') === 0) {
            return videoIdOrUrl.split('v=')[1];
        } else {
            return videoIdOrUrl
        }
    },

    generateThumbnailUrl: function (videoIdOrUrl) {
        return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
    },

    generateEmbedUrl: function (videoIdOrUrl) {
        return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdOrUrl);
    }
};