import Form from "./Form";

export const metadata = {
  title: "Danh sach san pham",
};

const Products = ({ searchParams }) => {

  return (
    <div>
      <h1>Danh sach san pham</h1>
      <h2>Tu khoa: {searchParams.keywords}</h2>
      <h2>Trang thai: {searchParams.status}</h2>
      <Form/>
    </div>
  );
};

export default Products;
