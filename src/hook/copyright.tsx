const copyright = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  if (currentYear <= 2024) {
    return <p>Copyright &copy; 2024 Nguyễn Phát Hưng. All rights reserved</p>;
  }
  return (
    <p>
      Copyright &copy; 2024 - {currentYear} Nguyễn Phát Hưng. All rights
      reserved
    </p>
  );
};

export default copyright;
