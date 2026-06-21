import countries from "world-countries";
import { useForm } from "react-hook-form";
import Button from "../components/shared/Button";

const countryNames = countries.map((c) => c.name.common);

function Employment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onsubmit(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex w-340 mx-auto flex-col my-20 gap-20">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl text-red-700 font-bold">Employed form</h1>
      </div>

      <div className=" flex justify-center gap-10 items-center ">
        <input
          {...register("name", {
            required: "this fild is required",
          })}
          type="text"
          placeholder="name"
          className="border border-gray-400 px-4 py-2 rounded-lg w-75"
        />
        {errors.name && <p className="text-red-700"> errors.name.message</p>}
        {/* father's name */}
        <input
          {...register("fahersname ", {
            required: "this fild is required",
          })}
          type="text"
          placeholder="faher's name "
          className="border border-gray-400 px-4 w-75 py-2 rounded-lg"
        />
        {errors.fahersname && (
          <p className="text-red-700">errors.fahersname.message</p>
        )}
      </div>

      <div className="w-340 mx-auto flex justify-center gap-10 items-center ">
        <select
          {...register("country", {
            required: "this field is required",
          })}
          className="border border-gray-400 w-75 px-4 py-2 rounded-lg">
          {countryNames.map((item) => (
            <option>{item}</option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-700 "> errors.country.message </p>
        )}

        <input
          {...register("provice", {
            required: "this field is requred",
          })}
          type="text"
          placeholder="province"
          className="border border-gray-400 w-75 px-4 py-2 rounded-lg"
        />
        {errors.provice && (
          <p className="text-red-700 ">errors.provice.message</p>
        )}
      </div>

      <div className="w-340 mx-auto flex justify-center gap-10 items-center ">
        <input
          {...register("birthday", {
            required: true,
          })}
          className="border border-gray-400 w-75 px-4 py-2 rounded-lg"
          type="date"
          placeholder="Birthday"
        />
        {errors.birthday && (
          <p className="text-red-700">errors.birthday.message </p>
        )}
        <input
          {...register("city", {
            required: true,
          })}
          className="border border-gray-400 w-75 px-4 py-2 rounded-lg"
          type="text"
          placeholder="city"
        />
        {errors.city && <p className="text-red-700">errors.city.message </p>}
      </div>

      <div className="w-340 mx-auto flex justify-center gap-10 items-center ">
        <input
          {...register("phonenumber", {
            required: true,
          })}
          className="border border-gray-400 w-75 px-4 py-2 rounded-lg"
          type="tel"
          placeholder="Phone Number"
        />
        {errors.phonenumber && (
          <p className="text-red-700">errors.phonenumber.message </p>
        )}
        <input
          {...register("homenumner", {
            required: true,
            minLength: {
              value: 11,
              message: "is not valid",
            },
          })}
          type="tel"
          placeholder="Home number"
          className="border border-gray-400 w-75 px-4 py-2 rounded-lg"
        />
        {errors.homenumner && (
          <p className="text-red-700">errors.homenumner.message </p>
        )}
      </div>

      <div className="w-340 mx-auto flex  justify-center gap-10 items-center ">
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "is not valid",
            },
          })}
          className="border w-75 border-gray-400 px-4 py-2 rounded-lg"
          type="mail"
          placeholder="@gmail.com"
        />
        {errors.email && <p className="text-red-700">errors.email.message </p>}
        <input
          {...register("url", {
            required: true,
          })}
          className="border w-75 border-gray-400 px-4 py-2 rounded-lg"
          type="url"
          placeholder="website"
        />
        {errors.url && <p className="text-red-700">errors.url.message </p>}
      </div>

      <div className="flex flex-col justify-center mx-auto items-center">
        <label className="text-gray-400">note</label>
        <textarea
          {...register("note", {
            required: true,
          })}
          className="border border-gray-400 px-4 py-2 rounded-lg w-160 h-40"></textarea>
      </div>
      <div className="flex flex-col justify-center mx-auto items-center">
        <Button type={"submit"}>submit</Button>
      </div>
    </form>
  );
}

export default Employment;
