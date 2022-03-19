class FeedbackWidget {
    _key = "feedback_widget";

    constructor(elementId) {
        this._elementId = elementId;
    }

    get elementId() { //getter, set keyword voor setter methode
        return this._elementId;
    }

    show(message, type) {
        document.getElementsByClassName("widget__bericht__text")[0].innerHTML = message;
        $(`#${this._elementId}`).removeClass("widget-hidden");
        $(`#${this._elementId}`).addClass("widget-show");

        this.log({ message: message, type: type });
    }

    hide() {
        $(`#${this._elementId}`).removeClass("widget-show");
        $(`#${this._elementId}`).addClass("widget-hidden");
    }

    log(message) {
        // haal alle feedback op, in geval van geen feedback nieuwe array
        let feedback = JSON.parse(localStorage.getItem(this._key)) ?? [];

        // als er meer dan 10 feedback widgets aanwezig zijn gooi de eerste in de array weg
        if (feedback.length >= 10) feedback.splice(0, 1);
        feedback.push(message);

        // zet array van message objects om in JSON string format
        localStorage.setItem(this._key, JSON.stringify(feedback));
    }

    static removeLog() {
        localStorage.removeItem(this._key);
    }

    history() {
        let messages = JSON.parse(localStorage.getItem(this._key));
        let text = "";

        messages.forEach(message => {
            text += `<type: ${message.type}> - <berichttekst:${message.message}> <"\n">`;
        });
        this.show(text, "success");
    }
}

$(function () {
    let feedback = new FeedbackWidget("feedback-success");

    $("#ok").on("click", function () {
        //alert("The button was clicked.");
        feedback.show("Speler wil deelnemen aan jouw spel. Geef akkoord.", "success");
        //feedback.history();
    });

    $("#close").on("click", function () {
        feedback.hide();
    });
});