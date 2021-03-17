const controller = require('../controllers/controller')
const router = require('express').Router();


router.post('/users', controller.createUser);
router.get('/getusers', controller.getUsers);
router.get('/finduser/:id', controller.findUser)
router.put('/updateuser/:id', controller.updateUser);
router.delete('/deleteuser/:id', controller.deleteUser);
module.exports = router;