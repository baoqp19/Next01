export const metadata = {
  title: "Danh sach san pham",
}

const Products = ({searchParams}) => {
  return (
    <div>
        <h1>Danh sach san pham</h1>
        <h2>Tu khoa: {searchParams.keywords}</h2>
        <h2>Trang thai: {searchParams.status}</h2>
        <form action="">
          <select name="status" id="">
            <option value="all">Tất cả trạng thai</option>
            <option value="active">Kích hoạt</option>
            <option value="Inactive">Chưa kích hoạt</option>
          </select>
          <input type="search" name="keywords" placeholder='Từ khóa...' />
          <button>Lọc</button>
        </form>
    </div>
  )
}

export default Products