const JobConsultants = ({ hrConsultants }) => {
  return (
    <ul className="job-skills">
      {hrConsultants?.map((hrConsultant, i) => (
        <li key={i}>
          <a href="#">{hrConsultant}</a>
        </li>
      ))}
    </ul>
  );
};

export default JobConsultants;
