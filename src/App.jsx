/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import avatar from "./assets/avatar-jessica.jpeg";

function App() {

  return (
    <>
      <div className="w-full h-[100vh] bg-Off-Black flex items-center">

        <div className="flex flex-col h-fit w-[90%] md:w-3/5 lg:w-1/4 mx-auto bg-Dark-Grey rounded-2xl px-9 py-9">

          <img src={avatar} alt="active-status" className="profile-image h-[30%] w-[30%] rounded-full mx-auto mb-4" />

          <div className="flex flex-col text-center mb-5 mt-3">
            <h4 className="text-White font-inter text-2xl font-semibold">Jessica Randall</h4>
            <p className="text-Green text-sm font-medium pt-1">London, United Kingdom</p>
          </div>

          <div className="flex flex-col gap-y-3">
            <p className="text-White font-extralight text-sm text-center mb-2">"Front-end developer and avid reader."</p>
            <span className="p-3 bg-Grey rounded-md text-center text-White font-semibold">GitHub</span>
            <span className="p-3 bg-Grey rounded-md text-center text-White font-semibold">Frontend Mentor</span>
            <span className="p-3 bg-Grey rounded-md text-center text-White font-semibold">LinkedIn</span>
            <span className="p-3 bg-Grey rounded-md text-center text-White font-semibold">Twitter</span>
            <span className="p-3 bg-Grey rounded-md text-center text-White font-semibold">Instagram</span>
          </div>

        </div>

      </div>


      <div className="attribution text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blueC">Frontend Mentor</a>. Coded by
        <a href="https://devemma.netlify.app/" target="_blank" className="text-blueC">Emmanuel Tofunmi</a>.
      </div>

    </>
  );
}

export default App;
