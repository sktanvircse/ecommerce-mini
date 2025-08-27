// store/orderSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderItem {
    id: number;
    name: string;
    price: number;
}

interface Order {
    id: string;
    items: OrderItem[];
    total: number;
    date: string;
}

interface OrderState {
    orders: Order[];
}

const initialState: OrderState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            state.orders.push(action.payload);
        },
    },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
