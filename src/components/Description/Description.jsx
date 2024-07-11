import style from "./Description.module.css";

const Description = ({ title, subtitle }) => {
  return (
    <div className={style.description}>
      <h1 className={style.descriptionTitle}>{title}</h1>
      <h3 className={style.descriptionSubTitle}>{subtitle}</h3>
    </div>
  );
};

export default Description;
