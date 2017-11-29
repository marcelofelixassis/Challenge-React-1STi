var axios = require('axios');

module.exports = {
    get_max_min: function(state, initial) {

        var url = window.encodeURI("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\""+ state + ", "+ initial +"\")&format=json");

        return axios.get(url)
        .then(function(resp) {
            return resp.data.query.results.channel.item.forecast[0];
        })
    }
}