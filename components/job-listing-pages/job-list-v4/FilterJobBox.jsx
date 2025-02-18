import React from "react";
import Link from "next/link";
import Image from "next/image";

const FilterJobBox = ({ jobs }) => {
  let content = jobs?.map((item) => (
    <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item.id}>
      <div className="inner-box">
        <div className="content">
          <span className="company-logo">
            <Image
              width={50}
              height={49}
              src="/images/resource/placeholder.png"
              alt="item brand"
            />
          </span>
          <h4>
            <Link href={`/job-single-v1/${item.index}`}>{item.title}</Link>
          </h4>

          <ul className="job-info">
            <li>
              <span className="icon flaticon-briefcase"></span>
              {item.shortName}
            </li>
            {/* compnay info */}
            <li>
              <span className="icon flaticon-map-locator"></span>
              {item.location}
            </li>
            {/* location info */}
            <li>
              <span className="icon flaticon-clock-3"></span>{" "}
              {item.time || "08:30 - 18:00"}
            </li>
            {/* time info */}
            <li>
              <span className="icon flaticon-money"></span>{" "}
              {item.salary || "70/80 K"}
            </li>
            {/* salary info */}
          </ul>
          {/* End .job-info */}

          <ul className="job-other-info">
            {item?.jobType?.map((val, i) => (
              <li key={i} className={`${val.styleClass}`}>
                {val.type}
              </li>
            ))}
          </ul>
          {/* End .job-other-info */}

          <button className="bookmark-btn">
            <span className="flaticon-bookmark">
              <Link target="_blank" href={`${item.longtext1}`}></Link>
            </span>
          </button>
        </div>
      </div>
    </div>
    // End all jobs
  ));

  return (
    <div className="ls-outer">
      <div className="row">{content}</div>
    </div>
  );
};

export default FilterJobBox;
