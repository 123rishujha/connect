"use client"

import { useRef } from "react";
import { CtrlInput } from "../../_components/common/CtrlInput";
import { MyButton } from "../../_components/common/MyButton";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { ValidationType } from "../../_helperFunc.js/Validation";


const Login = () =>{
    const t = useTranslations()

    const user = useSelector(store=>store.user);
    const inputRef = useRef(null);
    console.log(user)

    const inputProps = [
        {
            name:"userName",
            placeholder: t("auth.form.userName"),
        },
        {
            name:"password",
            placeholder: t("auth.form.password"),
        },
    ]

    const validationSchema = Yup.string().required()
    console.log("909 validationSchema",validationSchema)

    return <div >
        <h1 className="text-primary-main">Login Page</h1>
        <div className="w-full" >
            <Formik 
            initialValues={{userName:"",password:"" }} 
            onSubmit={(values)=> console.log("909 submitted",values)} 
            validationSchema={Yup.object({
                // userName: Yup.string().required(),
                userName: ValidationType("normal",{type:"normal",required: true, max: 4}),
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