import TypeIt from "typeit-react";

const SuperStrong = ({ children }) => {
  return <strong className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{children}</strong>;
};
function TypedIntro() {
  
return (
      <div className="App text-l sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed sm:leading-relaxed md:leading-loose lg:leading-loose xl:leading-loose">
        <TypeIt options={{
          speed: 75,
        }}>
          Hi there! My name is<br/><SuperStrong>Matthew Ching</SuperStrong> <br/>and I am a software developer. <br/><br/> Thanks for stopping by.
        </TypeIt>
      </div>
    );
  };

export default TypedIntro;