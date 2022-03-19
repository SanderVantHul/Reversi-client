const Game = ((url) => {
    //Configuratie en state waarden
    let _configMap = {
        apiUrl: url
    };

    let _stateMap = {
        gameState: ""
    };

    const _getCurrentGameState = function () {
        setInterval(() => {
            Game.Model.getGameState(1); // de echte request moet nog komen
            _stateMap.gameState = "";       // deze moet nog naar correcte waarde geupdate worden
        }, 2000);
    };

    const _init = function (afterInit) {
        _getCurrentGameState();
        afterInit();
    };

    return {
        init: _init
    };
})('/api/url');

Game.Reversi = (() => {
    let _configMap = {
    };

    const _init = function () {
        console.log(_configMap.apiUrl);
    };

    return {
        init: _init
    };
})();

Game.Data = (() => {
    let _configMap = {
        apiKey: "aa6bb372c0ccba60aff08f3c0b3cf922",
        mock: [
            {
                url: "api/Spel/Beurt",
                data: 0
            }
        ]
    };

    let _stateMap = {
        environment: "development"
    };

    const _init = function (environment) {
        if (environment !== "development" || environment !== "production") {
            throw new Error('This environment state does not exist (accepted states are: "production" and "development")');
        }

        this._stateMap.environment = environment;

        this.get(url);
    };

    const _getMockData = function (url) {
        const mockData = _configMap.mock.filter(m => m.url === url).data;

        return new Promise((resolve, reject) => {
            resolve(mockData);
        });
    };

    const _get = function (url) {
        if (_stateMap.environment === "development") {
            return _getMockData(url);
        }
        return $.get(url)
            .then(r => {
                return r;
            })
            .catch(e => {
                console.log(e.message);
            });
    };

    return {
        configmap: _configMap,
        init: _init,
        get: _get
    };
})();

Game.Model = (() => {
    let _configMap = {
    };

    const _init = function () {
    };

    const _getWeather = function () {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=will&APPID=${Game.Data.configMap.apiKey}`;

        Game.Data.get(url)
            .then(data => {
                if (!data?.main?.temp) {
                    throw new Error("No temperature found");
                }
                console.log(data);
            })
            .catch(e => {
                console.error(e.message);
            });
    };

    const _getGameState = async function (token) {
        //aanvraag via Game.Data
        let state = await Game.Data.get(`/api/Spel/Beurt/${token}`);

        //controle of ontvangen data valide is
        if (state !== 0 && state !== 1 && state !== 2) {
            throw new Error("Geen valide state!");
        }

        return state;
    };

    return {
        init: _init,
        getWeather: _getWeather,
        getGameState: _getGameState
    };
})();
