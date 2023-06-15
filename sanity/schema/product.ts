export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Product Images",
          type: "image",
        },
      ],
    },
    {
      name: "productDetails",
      title: "Product Details",
      type: "string",
    },
  ],
};
