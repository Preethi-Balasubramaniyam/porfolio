import Header from "@/components/common/Header";
import Education from "../components/education";

const EducationPage = () => {
  return(
    <>
      <div className="education-page-container">
        <Header />
        <Education />
        
      </div>
      <style jsx>{`
        .education-page-container {
          min-height: 100vh;
        }
      `}</style>
      </>
  ) ;
};

export default EducationPage;
