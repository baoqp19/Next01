const AdminLayout = ({ children }) => {
  return (
    <div>
     <>
        <header>
            <h1>Header Admin</h1>
        </header>
        <main>{children}</main>
        <footer>
            <h1>Footer Admin</h1>
        </footer>
     
     </>
    </div>
  );
};

export default AdminLayout;
