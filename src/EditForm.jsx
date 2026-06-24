import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({ editData, onUpdate, onCancel }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    reset(editData);
  }, [editData, reset]);

  return (
    <div>
      <h2>Edit Record</h2>

      <form onSubmit={handleSubmit(onUpdate)}>
        <input {...register("name")} placeholder="Name" />
        <p>{errors?.name?.message}</p>

        <input {...register("email")} placeholder="Email" />
        <p>{errors?.email?.message}</p>

        <input {...register("purpose")} placeholder="Purpose" />
        <p>{errors?.purpose?.message}</p>

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>Cancel</button>
      </form>
    </div>
  );
};

export default EditForm;