import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
  });
  
  // Get a contact by id
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
  });
  
// make a new contact
router.post('/create', (req, res) => {
    const newContact = req.body;
    res.send('Contact created: ' + JSON.stringify(newContact));
  });
  
  // Update an existing contact
  router.put('/update', (req, res) => {
    const updatedContact = req.body;
    res.send('Contact updated: ' + JSON.stringify(updatedContact));
  });
  
  // delete a contact
  router.delete('/delete', (req, res) => {
    const contactId = req.body.id;
    res.send('Contact deleted with ID: ' + contactId);
  });

export default router;
