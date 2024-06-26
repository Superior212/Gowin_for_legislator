import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const LegislatorProfile = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
            Legislator Profile
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="mb-4 w-48 rounded-full overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Legislator Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
              <Input
                type="text"
                placeholder="Enter name"
                className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2"
              />
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              <Input
                type="text"
                placeholder="Enter title"
                className="text-gray-500 dark:text-gray-400 text-sm"
              />
            </p>
          </div>
          <div className="col-span-1 space-y-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                Contact
              </h4>
              <div className="space-y-2">
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Phone:</span>
                  <Input
                    type="tel"
                    placeholder="Enter phone number"
                    className="text-gray-500 dark:text-gray-400"
                  />
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Email:</span>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="text-gray-500 dark:text-gray-400"
                  />
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Website:</span>
                  <Input
                    type="url"
                    placeholder="Enter website"
                    className="text-gray-500 dark:text-gray-400"
                  />
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                Bio
              </h4>
              <Textarea
                placeholder="Enter bio"
                className="text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                Legislative Roles
              </h4>
              <div className="space-y-2">
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Committees:</span>
                  <Input
                    type="text"
                    placeholder="Enter committees"
                    className="text-gray-500 dark:text-gray-400"
                  />
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  <span className="font-medium">Caucuses:</span>
                  <Input
                    type="text"
                    placeholder="Enter caucuses"
                    className="text-gray-500 dark:text-gray-400"
                  />
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                Voting Record
              </h4>
              <Textarea
                placeholder="Enter voting record"
                className="text-gray-500 dark:text-gray-400"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">
                Social Media
              </h4>
              <div className="flex items-center space-x-4">
                <Input
                  type="url"
                  placeholder="Enter Twitter URL"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                />
                <Input
                  type="url"
                  placeholder="Enter Facebook URL"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                />
                <Input
                  type="url"
                  placeholder="Enter Instagram URL"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <Button>Save</Button>
        </div>
      </div>
    </section>
  );
};

export default LegislatorProfile;
