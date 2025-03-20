import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, updateDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});

const AddandUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("contact added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("contact updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          // To show update contact details in update modal
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-2">
            <div>
              <label htmlFor="name" className="flex flex-col font-bold gap-1">
                Name
              </label>
              <Field
                name="name"
                className="h-10 p-1 outline-0 border rounded-lg w-full"
              />
              <div className="text-red-600  text-sm">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="flex flex-col font-bold gap-1">
                Email
              </label>
              <Field
                name="email"
                className="h-10 outline-0 border p-2 rounded-lg w-full"
              />
              <div className="text-red-600 text-sm">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button
              type="submit"
              className=" self-end border rounded-lg  py-1 cursor-pointer h-[31px] mt-2 w-[120px] bg-[#FCCA3F]"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandUpdateContact;
