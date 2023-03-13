function capturarCargo(req, res, next) {
    const cargo = req.body.cargo;

    if (cargo.toLowerCase() === "líder") {
        next();
    } else {
        res.status(403).json({ mensagem: "Acesso negado" });
    }
}

module.exports = { capturarCargo };