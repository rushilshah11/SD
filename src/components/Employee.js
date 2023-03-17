import ModalTest from "./modalTest";

function Employee(props) {
  return (
    <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.image}
        alt="Woman's Face"
      ></img>
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5 sm:flex space-x-3">
          <p className="text-lg text-black font-semibold">{props.name} </p>
          <p className="text-slate-500 text-smallfont-small">{props.role}</p>
        </div>
        <div className="text-center space-y-1 sm:text-left sm:flex sm:items-center sm:space-y-0 sm:space-x-3">
          <a href={props.linkedIn} target="_blank">
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Connect
            </button>
          </a>

          <ModalTest name={props.name}/>
        </div>
      </div>
    </div>
  );
}

export default Employee;
