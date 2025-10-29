import { Timeline } from "../components/Timeline";
import { extracurricular } from "../constants";

const Extracurricular = () => {
  return (
    <div className="w-full">
      <Timeline data={extracurricular} title="Extracurricular" />
    </div>
  );
};

export default Extracurricular;


