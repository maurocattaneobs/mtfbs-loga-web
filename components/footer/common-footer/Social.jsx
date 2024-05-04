const Social = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "#" },
    { id: 3, icon: "fa-instagram", link: "#" },
    { id: 4, icon: "fa-linkedin-in", link: "#" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`fab ${item.icon}`}></i>
        </a>
      ))}
    </>
  );
};

export default Social;
