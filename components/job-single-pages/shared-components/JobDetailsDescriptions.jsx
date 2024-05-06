const JobDetailsDescriptions = ({ job }) => {
  return (
    <div className="job-detail">
      <div dangerouslySetInnerHTML={{ __html: job?.contentSenzaFontFamily }} />
    </div>
  );
};

export default JobDetailsDescriptions;
