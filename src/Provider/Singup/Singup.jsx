import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Authcontext } from "../ProviderAuth/ProviderAuth";
import Google from "../Google/Google";
import PublicAxios from "../../Axios/PublicAxios/PublicAxios";

const Singup = () => {
  const {Resistacesing,UpdateProfile} = useContext(Authcontext)
  const navigator= useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axios = PublicAxios()
  const [view, setView] = useState(true);

  const onSubmit = (data) => {


    Resistacesing(data.email,data.password)
    .then(result=>{  
      const userInfo = {
        displayName: data.name,
        photoURL: data.photoURL,
        email: data.email,
      };
      const userInfos = {
        email: data.email,
        name: data.name,
      };
      axios.post('/user',userInfos)
     
      Swal.fire({
        title: "SingUp success",
        icon: "success",
        draggable: true
      });
      navigator('/')

      UpdateProfile(userInfo)
   
    
     
   

    })
    .catch(error=>{
    
    })
   
  };

  return (
    <div>
      <h1 className="lg:text-5xl text-2xl text-center font-bold">
        Resistance now!
      </h1>
      <div className="hero">
        <div className="hero-content flex-col my-7 gap-5 items-center lg:flex-row-reverse">
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors?.photoURL && (
                  <p className="text-red-500">Photo URL is required.</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="User Name"
                  className="input input-bordered"
                />
                {errors?.name && (
                  <p className="text-red-500">Name is required.</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required.</p>
                )}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={view ? "password" : "text"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  })}
                  placeholder="Password"
                  className="input input-bordered w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-8 text-gray-600"
                  onClick={() => setView(!view)}
                >
                  {view ? <FaRegEyeSlash /> : <FaEye />}
                </button>
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be at least 6 characters long.
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be less than 20 characters long.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must contain uppercase, lowercase, number, and
                    special character.
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className='uppercase btn-block   btn text-white  bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500'>
                  Resistance
                </button>
              </div>
              <div>
                <h3 className="text-xl text-info font-semibold">
                  Create your account
                </h3>
                <p>
                  Have an account?{" "}
                  <Link to="/login" className="underline text-info">
                    Log in now
                  </Link>
                </p>

                <Google></Google>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
