"use client"

import { CtrlInput } from "@/components/common/CtrlInput";
import { MyButton } from "@/components/common/MyButton";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";

const Login = () =>{
    const user = useSelector(store=>store.user);
    console.log(user)

    const inputProps = [
        {
            name:"userName",
            placeholder: "User Name",
            // label: "User Name",
        }
    ]

    return <div >
        <h1 className="text-primary-main">Login Page</h1>
        <div className="w-500">
            <form className="p-3 rounded shadow-sm bg-secondary-light">
                <div className="mb-3 justify-between">
                    <label className="block" >Email</label>
                    <input type="email" className="rounded p-1 outline-primary-main"  />
                </div>
                <div className="mb-3">
                    <label className="block" >password</label>
                    <input type="password" className="rounded p-1 outline-primary-main"  />
                </div>
                <div className="mb-3">
                    <button type="submit" className="bg-primary-main text-white p-1">Login</button>
                </div>
            </form>
        </div>
        <div className="w-full" >
            <Formik initialValues={{userName:""}} onSubmit={(values)=> console.log("909 submitted",values)}>
                {(formik)=>{
                    return (
                    <Form >
                        <div>
                            <CtrlInput.Normal formik={formik} {...inputProps[0]} />
                        </div>
                        <MyButton type="submit" styles={{marginTop:"10px"}} variant="outlined">Submit</MyButton>
                    </Form>
                    )
                }}
            </Formik>
        </div>
    </div>
}

export default Login;