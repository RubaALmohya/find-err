import React ,{useState , useEffect}from "react";
import '../App.css'

function About() {
  const [numstate , setNumstate] = useState(0);

  useEffect(()=>{
  if(numstate==1){
    let newh= document.createElement("h5");
    newh.innerHTML= '\nبدأ تاريخ المملكة العربية السعودية عندما استرد الملك عبدالعزيز آل سعود الرياض وعمل على توحيد البلاد وتأسيس الدولة السعودية للمرة الثالثة. وشهدت العقود الأولى من تاريخ المملكة حملات توحيد واستعادة مناطق في شبه الجزيرة العربية،\n وتحقيق الاستقرار، وتوطين قبائلها،\n وتحقيق المنجزات الحضارية.\n وبعد انتهاء توحيد البلاد صدر إعلان اسم المملكة العربية السعودية في عام ١٣٥١هـ/١٩٣٢م وأصبح تاريخ هذا الإعلان في ٢٣ سبتمبر يوماً وطنياً للمملكة.';
    document.body.appendChild(newh);
    newh.style.fontSize="20px";
    newh.style.color="black";
    newh.style.textAlign="center";
    newh.style.background ="rgba(255, 253, 253, 0.77)";
  }
  },[numstate]);
    
  const readState = () =>{
    if(numstate !=1){setNumstate(numstate+1);}
    else{setNumstate(0);}
  }
  return (
    <div className="about0">
      <div className="about1">
   <h1 >تاريخنا</h1>
   <h4>تعود جذور المملكة العربية السعودية إلى أقدم الحضارات التي كانت موجودة في شبه الجزيرة العربية.<br/> منطقة تقع بين الماضي والحاضر وفي المركز الذي يجمع ثلاث قارات، وهو مركز تجاري حيوي لعب دوراً رئيسياً في التاريخ العالمي، ومهد الإسلام، حيث انطلق منه</h4>
    <br></br>
   
    <h5 onClick={readState}>اقرا </h5>
 

    </div>
    </div>
  );
}

export default About;
