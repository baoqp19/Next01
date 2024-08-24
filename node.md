Request -> Router -> Layout -> Page  

 -- đường dẫn nào bằng /admin --> dùng layou có tên adminLayout
 -- đường dẫn nào bằng / --> dùng layout có tên ClientLayout

 Request --> Router --> RootLayout --> Special Layout --> Page

 tạo Page có đường dẫn : /about ==> thư mục about file page đổi thành about

 tạo Page có đường dẫn /about/about-us

 -- [slug] là thư mục thêm tên gì cũng dc
 -- [[...slug]] là thu muc nhièu cap haha/hihi/hehe slug[0], slug[1]