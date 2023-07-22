import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    userId: string,
    userPassword: string,
};

const LoginForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    // watch console.
    console.log(watch(["userId","userPassword"]))

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='userid'>Id</label>
                    <input className={"border-2"} {...register("userId", { required: true })}/>
                    {errors.userId && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password' className={"border-2"} {...register("userPassword", { required: true })}/>
                    {errors.userPassword && <span>This field is required</span>}
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </section>
    )
}

export default LoginForm;