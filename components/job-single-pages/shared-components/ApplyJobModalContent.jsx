import Link from "next/link";

const ApplyJobModalContent = ({ job, language }) => {
  return (
    <div>
      <iframe
        className="resize"
        src={
          language === "DS" ? job?.url.repace("lang=IS", "lang=DS") : job?.url
        }
        width="100%"
        height={"511px"}
      ></iframe>
    </div>
  );
};

export default ApplyJobModalContent;
