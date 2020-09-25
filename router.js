const router = require('express').Router();
const Contact = require('./model');


router.get('/', (req,res)=>{
    Contact.find((err, contacts)=>{
        if(err){
            res.send(err);
        }else{
            res.json(contacts);
        }
    })
    
})

router.post('/add', async(req, res)=>{

    const nameExists = await Contact.findOne({name:req.body.name})
    if(nameExists) return res.status(400).send('Name Already exists')

    const numberExists = await Contact.findOne({number:req.body.number})
    if(numberExists) return res.status(400).send('Number Already exists')

    const contact = new Contact({
        name: req.body.name,
        number: req.body.number
    })
    contact.save()
    .then(contact => {
        res.status(200).send({'contact': 'contact added successfully'});
    })
    .catch(err => {
        res.status(400).send(err);
    });
    
})

router.get('/:id', (req,res)=>{
    //let id = req.params.id
    Contact.findById({id:req.params.id}, (contact)=>{
        res.json(contact);
    })
})

router.post('/update/:id',(req,res)=>{
    Contact.findById(req.params.id, (err, contact)=>{
        if(!contact){
            res.status(400).send('Data not available')
        }else{
            contact.name= res.body.name;
            contact.number= res.body.number;  

            contact.save()

            .then((contact)=>{
                res.json('Updated successfully');
            })
            .catch(err=>{
                res.send(err);
            });
        };
});

});

router.get('/delete/:id', (req, res)=>{
    Contact.findByIdAndDelete(req.params.id, (contact)=>{
        res.json('Contact deleted');
    })
})




module.exports = router;