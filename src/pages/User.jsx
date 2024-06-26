

const User = () => {
  return (
    <div>
      <div className="bg-green-100 text-gray-600 py-4 px-6">
        <h2 className="text-2xl font-bold mx-5">User Details</h2>

        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              <span>Back</span>
            </a>
            <div className="flex items-center gap-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg shadow-lg">
              <div className="border-b px-4 py-2">
                <h3 className="text-lg font-bold">User Details</h3>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">First Name</label>
                    <p>user</p>
                  </div>
                  <div>
                    <label className="block font-medium">Last Name</label>
                    <p>user.lastname</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Email</label>
                    <p>user.email</p>
                  </div>
                  <div>
                    <label className="block font-medium">Roles</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                        userRoles
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Date of Birth</label>
                    <p>user.</p>
                  </div>
                  <div>
                    <label className="block font-medium">Gender</label>
                    <p>usersex</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">Phone Number</label>
                    <p>user.phoneNumber</p>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Verification Status
                    </label>

                    <span className="bg-green-500 text-white px-2 py-1 rounded">
                      Verified
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">
                      Approval Status
                    </label>
                    <span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded">
                        Approved
                      </span>
                    </span>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Account Status
                    </label>
                    <span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded">
                        Active
                      </span>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium">State</label>
                    <p>user.state</p>
                  </div>
                  <div>
                    <label className="block font-medium">Constituency</label>
                    <p>user.constituency.name</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-lg shadow-lg">
              <div className="border-b px-4 py-2">
                <h3 className="text-lg font-bold">Document</h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label className="block font-medium">State of Origin</label>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>

                    <>
                      <a
                        href={`/profile/sor`}
                        target="_blank"
                        className="text-blue-500 hover:underline">
                        View File
                      </a>
                      <button className="border border-gray-300 text-gray-700 py-1 px-2 rounded">
                        <a href={`/download/sor`}>Download</a>
                      </button>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
