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
          {/* ... Altri campi ... */}

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
