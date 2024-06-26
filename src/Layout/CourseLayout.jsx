import React from "react";
import CourseHeader from "@/components/CourseHeader";
import BreadcrumbComponent from "@/components/Breadcrumb";
import Loading from "@/components/Loading";
import { useCourseQuery } from "@/slices/authApiSlice";
import { useParams } from "react-router-dom";

const CourseLayout = () => {
  const { courseId } = useParams();
  const { data: course, isLoading, isError } = useCourseQuery(courseId);

  return (
    <>
      <div>
        <CourseHeader />
        <BreadcrumbComponent />
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-mulish">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              {isLoading ? (
                <Loading />
              ) : isError ? (
                <p>Error loading course</p>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-4">{course.title}</h2>

                  {course.overview.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 mb-6">
                      {paragraph}
                    </p>
                  ))}

                  <div className="mt-4">
                    <p className="text-gray-700 mb-2 font-bold">
                      Skills Covered:
                    </p>
                    <ul className="text-gray-700 list-disc px-4">
                      {course.skillsCovered.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLayout;
