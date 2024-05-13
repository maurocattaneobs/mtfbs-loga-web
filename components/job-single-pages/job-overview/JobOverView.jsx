const JobOverView = ({ job }) => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-reference"></i>
          <h5>Referimento:</h5>
          <span>{job?.referenceNumber}</span>
        </li>
        <li>
          <i className="icon icon-briefcase"></i>
          <h5>Posizione:</h5>
          <span>{job?.shortName}</span>
        </li>
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Data pubblicazione:</h5>
          <span>{job?.publishFromDate}</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Validità:</h5>
          <span>{job?.publishToDate}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>Luogo di lavoro:</h5>
          <span>{job?.location}</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Titolo di lavoro:</h5>
          <span>{job?.title}</span>
        </li>
        <li>
          <i className="icon icon-clock"></i>
          <h5>Orario:</h5>
          <span>40h / week</span>
        </li>
        <li>
          <i className="icon icon-salary"></i>
          <h5>Salario:</h5>
          <span>CHF 70k - 80k</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
