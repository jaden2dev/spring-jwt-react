import {SubmitHandler, useForm} from "react-hook-form";
import * as authAction from "../../utils/auth-action";

type Inputs = {
    email: string,
    password: string,
};

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        authAction.loginActionHandler(data.email, data.password).then(r => {
            console.log('response=>' ,r);
        })
        // console.log(data);
    }

    // watch console.
    // console.log(watch(["email","password"]))

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='userid'>Id</label>
                    <input className={"border-2"} {...register("email", { required: true })}/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='password' className={"border-2"} {...register("password", { required: true })}/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </section>
    )
}

export default LoginForm;