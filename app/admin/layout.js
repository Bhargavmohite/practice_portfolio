import Admin_footer from "@/components/Admin_footer";
import Admin_navbar from "@/components/Admin_navbar";

export default function AdminLayout({ children }) {
  return (
    <div>
      {/* Admin Navbar / Sidebar */}
      <Admin_navbar/>
      {children}
      <Admin_footer/>
    </div>
  );
}
