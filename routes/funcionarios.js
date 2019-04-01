import Sequelize from 'sequelize';

module.exports = app => {
    const Funcionario = app.db.models.Funcionario;

    app.route('/funcionarios/search')
        .post((req, res) => {
            // "/funcionarios": Cadastra um novo funcionário
            console.log(req.body);

            const whereSearch = {};
            const orderSearch = [];
            let offset = 0;
            let limit = 0;
            let total = 0;

            if (req.body['filter']['nm_funcionario']) {
                whereSearch['nm_funcionario'] = {[Sequelize.Op.like]: '%' + req.body['filter']['nm_funcionario'].toLowerCase() + '%'};
            }

            if (req.body['filter']['nm_cargo']) {
                whereSearch['nm_cargo'] = {[Sequelize.Op.like]: '%' + req.body['filter']['nm_cargo'].toLowerCase() + '%'};
            }

            if (req.body['filter']['vl_idade_inicio']) {
                whereSearch['vl_idade'] = {[Sequelize.Op.gte]: req.body['filter']['vl_idade_inicio']};
            }

            if (req.body['filter']['vl_idade_fim']) {
                whereSearch['vl_idade'] = {[Sequelize.Op.lte]: req.body['filter']['vl_idade_fim']};
            }

            if (req.body['sortingFields'] && req.body['sortingDirections']) {
                orderSearch.push([req.body['sortingFields'], req.body['sortingDirections']]);
            }

            if (req.body['currentPage'] || req.body['pageSize']) {
                offset = Number(req.body['currentPage']) * Number(req.body['pageSize']);
                limit = Number(req.body['pageSize']);
            }

            total = Funcionario.count();

            // $resources->offset($request['currentPage'] * $request['pageSize'])->limit($request['pageSize']);
            Funcionario.findAll({
                where: whereSearch,
                order: orderSearch,
                offset: offset,
                limit: limit,
                subQuery: false
            })
            .then(result => {

                const data = {};
                data['list'] = result;
                data['totalResults'] = total;

                res.json(data);
            }).catch(error => {
                res.status(412).json({msg: error.message});
            });
        })

    app.route('/funcionarios')
        .get((req, res) => {
            // "/funcionarios": Lista os funcionários
            Funcionario.findAll({})
                .then(result => {
                    res.json(result);
                }).catch(error => {
                    res.status(412).json({msg: error.message});
                });

        })
        .post((req, res) => {
            // "/funcionarios": Cadastra um novo funcionário
            console.log(req.body);
            Funcionario.create(req.body)
                .then(result => {
                    res.json(result);
                }).catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })

    app.route('/funcionarios/:id_funcionario')
        .get((req, res) => {
            // "/funcionarios/1": Retorna o funcionário com id_funcionario = 1
            Funcionario.findOne({where: req.params})
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                }).catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .put((req, res) => {
            // "/funcionarios/1": Atualiza o funcionário com id_funcionario = 1

            Funcionario.update(req.body, {where: req.params})
                .then(result => {
                    res.sendStatus(204);
                }).catch(error => {
                    res.status(412).json({msg: error.message});
                });

        })
        .delete((req, res) => {
            // "/funcionarios/1": Exclui o funcionário com id_funcionario = 1

            Funcionario.destroy({where: req.params})
                .then(result => {
                    res.sendStatus(204);
                }).catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
};
