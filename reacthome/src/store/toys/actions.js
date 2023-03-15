import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getToDo = createAsyncThunk("toDo/getToDo", async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.data

});