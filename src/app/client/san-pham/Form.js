"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Form = () => {
  const [form, setForm] = useState({
    status: "",
    keywords: "",
  });
  const router = useRouter();
  const pathname = usePathname();
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    const url = `${pathname}/?${new URLSearchParams(form).toString()}`
    // console.log(url);
    router.push(url)
    
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <select name="status" id="" onChange={handleChange}>
        <option value="all">Tất cả trạng thai</option>
        <option value="active">Kích hoạt</option>
        <option value="Inactive">Chưa kích hoạt</option>
      </select>
      <input
        type="search"
        name="keywords"
        placeholder="Từ khóa..."
        onChange={handleChange}
      />
      <button>Lọc</button>
    </form>
  );
};

export default Form;
