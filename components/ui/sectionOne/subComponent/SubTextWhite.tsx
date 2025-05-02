import '../../../../style/Section1.css';

const SubTextWhite = ({ text, margin }: { margin: number; text: string }) => {
  return (
    <div className="whiteText " style={{ marginTop: margin }}>
      {text}
    </div>
  );
};
export default SubTextWhite;
