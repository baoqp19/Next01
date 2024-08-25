"use client"; // chuyền vể client component
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "@/assets/style.css";
import clsx from "clsx";

const Navigation = () => {
  // lấy pathname --> thao tác ở client
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav>
      <ul>
        {/* && là biểu thức nếu trái là true thì phải cũng true */}
        <li className={clsx(pathname === "/client" && "active")}>
          <Link href="/client">Trang Chủ</Link>
        </li>
        <li className={clsx(pathname === "/client/posts" && "active")}>
          <Link href="/client/posts">Tin tức</Link>
        </li>
        <li className={clsx(pathname === "/client/san-pham" && "active")}>
          <Link href="/client/san-pham">Sản phẩm</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
