import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),

    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["update"],
    }),
    getReview: builder.query({
      query: (id) => `/books/review/${id}`,
      providesTags: ["reviews"],
    }),
    updateBook: builder.mutation({
      query: ({ id, bookData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: bookData,
      }),
      invalidatesTags: ["update"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useDeleteBookMutation,
  useAddBookMutation,
  useUpdateBookMutation,
  usePostReviewMutation,
  useGetReviewQuery,
} = bookApi;
