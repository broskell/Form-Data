import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  purpose: z.string().min(5, "Purpose must be at least 5 characters long"),
});

const Form = () => {
  const [tableData, setTableData] = useState([]);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "Kellampalli Saathvik",
      email: "saathvik@example.com",
      purpose: "Learning React Hook Form",
    },
  });

  const onSubmit = (data) => { setTableData([...tableData, data]) };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <p>{errors?.name?.message}</p>

        <input {...register("email")} placeholder="Email" />
        <p>{errors?.email?.message}</p>

        <input {...register("purpose")} placeholder="Purpose" />
        <p>{errors?.purpose?.message}</p>

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;