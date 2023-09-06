import React from 'react';
import InvoiceField from './Invoicefield'

import { BsCurrencyRupee } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const InvoiceItem = ({ id, name, qty, price, onDeleteItem, onEdtiItem }) => {
  const deleteItemHandler = () => {
    onDeleteItem(id);
  };

  return (
    <tr>
      <td className="w-full ">
        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            placeholder: 'Item name',
            type: 'text',
            name: 'name',
            id: id,
            value: name,
           
          }}
        />
      </td>
      <td className="min-w-[65px] md:min-w-[80px]">
        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            type: 'number',
            min: '1',
            name: 'qty',
            id: id,
            value: qty,
          }}
        />
      </td>
      <td className="relative min-w-[100px] md:min-w-[150px] ">
      
       <span className='realative' >
      < BsCurrencyRupee className='absolute mt-1 ms-7' />
      </span>
        <InvoiceField
        
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className: 'text-right',
            type: 'number',
            min: '0.01',
            step: '0.01',
            name: 'price',
            id: id,
            value: price,
          }}
        />
      </td>
      <td className="flex items-center justify-center">
        <button
          className=" bg-red-500   hover:bg-red-600 text-white px-1 py-1"
          onClick={deleteItemHandler}
        >
       < MdDeleteForever className='text-2xl' />
        </button>
      </td>
    </tr>
  );
};

export default InvoiceItem;