import Link from "next/link";

const ApplyJobModalContent = ({ job }) => {
  return (
    <div>
      <iframe
        className="resize"
        src={job?.url}
        width="100%"
        height={"511px"}
      ></iframe>
    </div>
  );
};

export default ApplyJobModalContent;
