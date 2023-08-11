import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApiSlice = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ([id, authKey]) => ({
                url: '/products/' + String(id),
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Internship-Auth': authKey
                }
            }),
        }),
    })
});

export const { useGetProductQuery } = productApiSlice;