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

    const _init = function (afterInit, ctx) {
        _getCurrentGameState();
        Game.Reversi.init();
        Game.Stats.init(ctx);
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
        //_makeBoard();  // oude implementatie van bord
    };

    // const _makeBoard = function () {
    //     const board = document.getElementsByClassName("board")[0];

    //     // tiles toevoegen aan bord
    //     for (let row = 1; row < 9; row++) {
    //         for (let column = 1; column < 9; column++) {
    //             let tile = document.createElement("div");
    //             $(tile).addClass('tile');
    //             tile.style.gridArea = `r${row}-c${column}`;
    //             $(tile).click(function () { _placeChip(tile); });
    //             board.appendChild(tile);
    //         };
    //     };

    //     // nummers en letters toevoegen aan bord
    //     for (let row = 0; row < 9; row++) {
    //         for (let column = 0; column < 8; column++) {
    //             const number = document.createElement("div");
    //             $(number).addClass('number');
    //             // nummers
    //             if (row == 0) {
    //                 number.innerHTML = `${column + 1}`;
    //                 number.style.gridArea = `r${row}-c${column + 1}`;
    //             }
    //             // letters
    //             else if (column == 0) {
    //                 number.innerHTML = `${String.fromCharCode(64 + row)}`; // ascii code
    //                 number.style.gridArea = `r${row}-c${column}`;
    //             }
    //             board.appendChild(number);
    //         }
    //     }
    // };

    const placeChip = function (rij, kolom) {
        // $(this).off("click");
        // const chip = document.createElement("figure");
        // $(chip).addClass("fiche fiche-black");
        // this.appendChild(chip)
        Game.API.doeZet(rij, kolom);
    };

    return {
        init: _init,
        placeChip
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
            //throw new Error("Geen valide state!");
        }

        return state;
    };

    return {
        init: _init,
        getWeather: _getWeather,
        getGameState: _getGameState
    };
})();

Game.Template = (() => {
    const _getTemplate = function (templateName) {
        return spa_templates.templates[templateName];
    };

    const parseTemplate = function (templateName, data) {
        return _getTemplate(templateName)(data);
    };

    return {
        parseTemplate,
    };

})();

Game.API = (() => {
    let _configmap = {
        spelToken: 0,
        spelerToken: 0
    };
    const init = function (spelToken, spelerToken) {
        _configmap.spelToken = spelToken;
        _configmap.spelerToken = spelerToken;
        console.log(_configmap.spelToken + " " + _configmap.spelerToken);
    };

    const doeZet = function (rij, kolom) {
        $.ajax({
            url: `/api/Spel/Zet/${rij}/${kolom}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                "spelerToken": `${_configmap.spelerToken}`,
                "spelToken": `${_configmap.spelToken}`
            }),
            success: function (response) {
                console.log("Zet goed");
            }
        });
    };

    return {
        init,
        doeZet
    };
})();

Game.Stats = (() => {
    let _configmap = {
        chart: null
    };
    const init = function () {

    };

    const createChart = function (ctx) {
        const labels = [];
        for (let i = 0; i < 64; ++i) {
            labels.push(i.toString());
        }
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Zwart',
                        data: [2],
                        borderColor: 'rgb(135,206,235)',
                        backgroundColor: 'rgb(135,206,235)',
                    },
                    {
                        label: 'Wit',
                        data: [2],
                        borderColor: 'rgb(255, 0, 0)',
                        backgroundColor: 'rgb(255, 0, 0)',
                    }
                ]
            },
            
        });
        _configmap.chart = myChart;
    };

    const updateChart = function (zwart, wit) {
        let chart = _configmap.chart;
        chart.data.datasets[0].data.push(zwart);
        chart.data.datasets[1].data.push(wit);
        chart.update();
    };

    return {
        init,
        createChart,
        updateChart
    };
})();