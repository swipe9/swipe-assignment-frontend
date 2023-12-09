import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const index = state.findIndex(
        (invoice) => invoice.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload.updatedInvoice;
      }
    },
    bulkUpdate:(state,action)=>{
      action.payload.forEach((invoice)=>{
        const index = state.findIndex(
          (oldinvoice) => invoice.id === oldinvoice.id
        );
        if (index !== -1) {
          console.log(invoice)
          state[index] = invoice;
        }

      })
    }
  },
});

export const {
  addInvoice,
  deleteInvoice,
  updateInvoice,
  bulkUpdate
} = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
