const MacaddressValidation = (req, res, next) => {
    if(!req.params.macaddress)
        return res.status(400).json({ error: 'macaddress é obrigatorio' });
    else
        next();
}

module.exports = MacaddressValidation;