import { courses } from "../constants";

const Courses = () => {
  return (
    <section className="c-space section-spacing" id="courses">
      <h2 className="text-heading">Courses</h2>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {courses.map((c, idx) => (
          <div key={idx} className="grid-default-color p-4 rounded-lg text-neutral-300">
            {c}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;


