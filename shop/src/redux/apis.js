import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApiSlice = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:42069/',
    }),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => ({
                url: '/products/' + String(id),
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }),
        }),
    })
});

export const { useGetProductQuery } = productApiSlice;