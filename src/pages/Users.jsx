import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
// import $ from "jquery";

const Users = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [formIdToDelete, setFormIdToDelete] = useState(null);

  const openDeleteModal = (formId) => {
    setFormIdToDelete(formId);
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
    setFormIdToDelete(null);
  };

  const confirmDelete = () => {
    if (formIdToDelete) {
      document.getElementById(formIdToDelete).submit();
    }
    closeDeleteModal();
  };

  useEffect(() => {
    const table = new DataTable("#userTable", {
      responsive: true,
    });

    // Clean up the DataTable instance on unmount
    return () => {
      table.destroy();
    };
  }, []);

  // Dummy data for the example
  const users = [
    {
      id: 1,
      email: "user1@example.com",
      roles: "Admin",
      firstname: "John",
      lastname: "Doe",
      phoneNumber: "1234567890",
      state: { name: "California" },
      constituency: { name: "District 1" },
      stateoforiginfilename: "doc1.pdf",
      status: "Active",
    },
    // Add more users as needed
  ];



  return (
    <div>
      <div className="content-page">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-end">
            <Link to="/users/new" className="bg-green-200 p-2 rounded-md mb-3">
              Create new
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table
              id="userTable"
              className="min-w-full bg-white border shadow-md rounded-lg border-gray-300">
              <thead className="bg-gray-100 rounded-lg">
                <tr>
                  <th className="py-2 px-2 text-xs border-b border-r border-gray-300 min-w-[150px] text-center">
                    Email
                  </th>
                  <th className="py-2 px-2 text-xs border-b border-r border-gray-300 min-w-[150px] text-center">
                    Roles
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    First Name
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    Last Name
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    Phone Number
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    State
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    Constituency
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    Document Upload
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    Account Status
                  </th>
                  <th className="py-2 px-2 text-sm border-b border-r border-gray-300 min-w-[150px] text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="py-2 px-4 border-b border-r border-gray-300">
                        <a href="#" className="text-blue-600 hover:underline">
                          {user.email}
                        </a>
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300 min-w-[150px]">
                        <span>{user.roles}</span>
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300 min-w-[150px]">
                        {user.firstname}
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300 min-w-[150px]">
                        {user.lastname}
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300 min-w-[250px]">
                        {user.phoneNumber}
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300 min-w-[150px]">
                        {user.state.name}
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300 min-w-[150px]">
                        {user.constituency.name}
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300 min-w-[150px]">
                        <span>{user.stateoforiginfilename}</span>
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300">
                        <span
                          className={`${
                            user.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          } py-1 px-2 rounded-full text-xs`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-r border-gray-300">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/user`}
                            className="border border-gray-300 rounded p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span className="sr-only">View</span>
                          </Link>
                          <Link
                            to={`/users/edit/${user.id}`}
                            className="border border-gray-300 rounded p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
                            </svg>
                            <span className="sr-only">Edit</span>
                          </Link>
                          <form
                            id={`delete-user-${user.id}`}
                            method="post"
                            action={`/users/delete/${user.id}`}
                            onSubmit={(e) => e.preventDefault()}>
                            <input
                              type="hidden"
                              name="_token"
                              value="YOUR_CSRF_TOKEN_HERE"
                            />
                            <button
                              type="button"
                              className="border border-gray-300 rounded p-2 delete-button"
                              onClick={() =>
                                openDeleteModal(`delete-user-${user.id}`)
                              }>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              </svg>
                              <span className="sr-only">Delete</span>
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">No records found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {deleteModal && (
            <div
              id="deleteModal"
              className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-5 rounded shadow-lg w-1/3">
                <h2 className="text-lg mb-4">
                  Are you sure you want to delete this user?
                </h2>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={closeDeleteModal}
                    className="bg-gray-200 px-4 py-2 rounded">
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
