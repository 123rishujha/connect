"use client"

import { useRef } from "react";
import { CtrlInput } from "@/components/common/CtrlInput";
import { MyButton } from "@/components/common/MyButton";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";


const Login = () =>{
    const user = useSelector(store=>store.user);
    const inputRef = useRef(null);
    console.log(user)

    const inputProps = [
        {
            name:"userName",
            placeholder: "User Name",
            // label: "User Name",
        },
        {
            name:"password",
            placeholder: "Password",
        },
    ]

    return <div >
        <h1 className="text-primary-main">Login Page</h1>
        <div className="w-full" >
            <Formik 
            initialValues={{userName:"",password:"" }} 
            onSubmit={(values)=> console.log("909 submitted",values)} 
            validationSchema={Yup.object({
                userName: Yup.string().required(),
                password: Yup.string().min(6,'Minimun 6 character required').required(),
            })}
            >
                {(formik)=>{
                    return (
                    <Form >
                        <div> 
                            <CtrlInput.Normal ref={inputRef} formik={formik} {...inputProps[0]} />
                        </div>
                        <div className="mt-1">
                            <CtrlInput.Password ref={inputRef} formik={formik} {...inputProps[1]} />
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