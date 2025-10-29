import { skillsDetailed } from "../constants";

const Skills = () => {
  return (
    <section className="c-space section-spacing" id="skills">
      <h2 className="text-heading">Skills</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillsDetailed.map((group, idx) => (
          <div key={idx} className="grid-default-color p-6 rounded-lg">
            <p className="text-xl font-semibold text-neutral-200 mb-2">{group.category}</p>
            <ul className="list-disc list-inside text-neutral-400">
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


