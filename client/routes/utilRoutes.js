const router=require('express').Router();
const db = require('../models')

router.get('/seed', (req,res,err) => {
    const seeds = require('../client/charSeeds.json');
    Promise.all(
    seeds.map(character=>db.Character.create(character))
    )
    .then(characters => res.json(characters));
})

module.exports = router;