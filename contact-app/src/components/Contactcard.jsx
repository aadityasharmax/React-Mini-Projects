import React from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { db } from '../config/firebase';
import { deleteDoc , doc } from 'firebase/firestore';
import AddandUpdateContact from './AddandUpdateContact';
import useDisclosure from '../hooks/useDisclosure';
import { toast } from 'react-toastify';


const Contactcard = ({contact}) => {
    const{isOpen , onClose , onOpen} = useDisclosure();

    const deleteContact = async (id) => {
        try {
                

            await deleteDoc(doc(db,"contacts",id))
            toast.success("contact deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
    <div>
        {
          
            <div key={contact.id} className='flex items-center justify-between bg-[#FFEAAE] rounded-lg mt-4' >
              <div className='flex justify-between items-center gap-2'>
              <IoPersonCircle className='text-orange-600 text-5xl '/>
              <div className='flex flex-col '>
                <h1 className='text-black text-lg font-medium '>{contact.name}</h1>
                <p className='text-black text-sm break-all '>{contact.email}</p>
              </div>
              </div>
              <div className='flex gap-4'>
              <MdEdit  onClick={onOpen} className='text-black text-3xl cursor-pointer'/>
              <MdDelete onClick={() => deleteContact(contact.id)} className='text-purple-700  text-3xl cursor-pointer'/>
              </div>
            </div>
          
        }
      </div>
      <AddandUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>

    </>
    
  )
}

export default Contactcard