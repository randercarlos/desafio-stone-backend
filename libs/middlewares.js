import bodyParser from "body-parser";
import cors from "cors";

module.exports = app => {
    app.set('port', 3000);
    app.set('json spaces', 4);
    app.use(bodyParser.json());
    app.use(cors());
    app.use((req, res, next) => {
        if (req.body !== undefined) {
            delete req.body.id_funcionario;
        }
        next();
    });
};
