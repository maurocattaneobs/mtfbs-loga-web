import React from "react";

const FilterJobBox = ({ jobs }) => {
  // Funzione per convertire base64 in Blob e aprirlo
  const openBase64Pdf = (base64Data) => {
    // Decodifica la stringa base64
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Crea un blob di tipo PDF
    const blob = new Blob([byteArray], { type: "application/pdf" });

    // Genera un object URL
    const blobUrl = URL.createObjectURL(blob);

    // Apri il blobUrl in una nuova scheda
    window.open(blobUrl, "_blank", "noopener,noreferrer");
  };

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

          {/* Bottone per aprire il PDF in una nuova scheda */}
          <button
            className="theme-btn btn-style-three bg-blue"
            onClick={() => openBase64Pdf(item.file1)}
          >
            Apri il formulario
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="ls-outer">
      <div className="row">{content}</div>
    </div>
  );
};

export default FilterJobBox;
