import UseReviws from "../UseReviw/UseReviw";
import Typewriter from 'typewriter-effect';

const Reviws = () => {
  const [reviws = []] = UseReviws(); // Default to empty array

  if (!reviws.length) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="lg:text-5xl text-2xl font-bold flex gap-2 text-center">
          <span className='uppercase text-transparent text-bg-clip bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
            <Typewriter
              options={{
                strings: ['Customer Reviews'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {reviws.map(item => (
          <div key={item._id} className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={item.url} alt="Reviewer" className="rounded-full w-36 h-36" />
              
            </figure>
            <div className="card-body items-center text-center">
            <p className="text-yellow-500 text-2xl  font-semibold">
                Rating: {item.rating} ⭐
              </p>
              <h2 className="card-title">{item.review}</h2>
              <p>{item.Recipe}</p>
              <p>{item.suggestion}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviws;
