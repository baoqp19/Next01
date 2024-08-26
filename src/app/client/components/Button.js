"use client";

import { useRouter } from "next/navigation"; // chú ý import

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin");
  };
  return (
    <main>
      <h1>Hello</h1>
      <button onClick={handleClick}>Vào quản trị</button>
    </main>
  );
};

export default Button;
