import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req: Request, res: Response) => {
    let newContact = new Contact(req.body);

        newContact.save()
        .then(contact => res.json(contact)) 
        .catch(err => res.send(err))
}   

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, /* { new: true }, */ (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    })
}

export const deleteContact = (req, res) => {
    Contact.findByIdAndDelete({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
}