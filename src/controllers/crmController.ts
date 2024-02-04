import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";
import { Request, Response } from "express";

const Contact = mongoose.model("Contact", ContactSchema, 'contact');

export const addNewContact = (req: Request, res: Response) => {
  let newContact = new Contact(req.body);

  newContact
    .save()
    .then((contact) => res.json(contact))
    .catch((err) => res.send(err));
};

// J'ai dû remplacer cette fonction par celle ci-dessous, car "MongooseError: Model.find() no longer accepts a callback". Les versions après mongoose 6 n'acceptent plus de callback, donc remplacer par async/await.
/* export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
    
    for (let item of contact) {
      console.log(item);
    }
    
    for (let itemPos in contact) {
      console.log(itemPos);
    }
  });
  }; */

export const getContacts = async (req, res) => {
    try {
      console.log('test');
      const contact = await Contact.find({});
      console.log(contact);
      // Here we get the data. Iterate through the actual data. We iterate through contact, so we have an array that is going to come back from our server, an array of contacts.
      for (let item of contact) {
        console.log(item); // for each item in the contact, console.log the item.
      }
  
      // Here we get the position of data
      for (let itemPos in contact) {
        console.log(itemPos);
      }
  
      res.json(contact);
    } catch (err) {
      // Handle errors
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };


export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    /* { new: true }, */ (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

export const deleteContact = (req, res) => {
  Contact.findByIdAndDelete({ _id: req.params.contactId }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted contact" });
  });
};
