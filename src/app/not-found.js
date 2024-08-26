import Link from "next/link";
import React from "react";
// toàn cục nên hiện khi 404 nêu bỏ trong thư mục client thì không 
const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Đi đâu đây</p>
      <Link href="/admin">Về trang chủ</Link>
    </div>
  );
};

export default NotFound;
