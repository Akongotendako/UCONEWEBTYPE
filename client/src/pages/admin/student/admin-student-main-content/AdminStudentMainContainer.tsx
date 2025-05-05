import { useEffect } from "react";
import AdminStudentMainContent from "../../../../components/features/admin/admin-student/admin-student-main-content/AdminStudentMainContent"
import userStore from "../../../../stores/userStore"

const AdminStudentMainContainer = () => {

  const {fetchUsers} = userStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])
  
  return (
    <AdminStudentMainContent/>
  )
}

export default AdminStudentMainContainer