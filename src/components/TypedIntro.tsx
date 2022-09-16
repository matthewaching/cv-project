import TypeIt from "typeit-react";

const SuperStrong = ({ children }) => {
  return <strong className="text-8xl">{children}</strong>;
};
function TypedIntro() {
  
return (
      <div className="App text-4xl leading-loose">
        <TypeIt options={{
          speed: 75,
        }}>
          Hi there! My name is<br/><SuperStrong>Matthew Ching</SuperStrong> <br/>and I am a software developer. <br/><br/> Thanks for stopping by.
        </TypeIt>
      </div>
    );
  };

export default TypedIntro;