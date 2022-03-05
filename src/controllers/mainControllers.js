const controller = {
    index: (req, res) => {
        res.render("index");
    },
    home: (req, res) => {
        res.render("home");
    },
    contacto: (req, res) => {
        res.send("construccion");
    },
};

module.exports = controller;