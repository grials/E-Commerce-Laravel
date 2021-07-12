import React from "react";
import styled from "styled-components";
import useFormRegister from "../hooks/useFormRegister";

const formRegisterData = {
    headerForm: [
        {
            title: "home",
            href: "/",
        },
        {
            title: "register",
            href: "#",
        },
    ],
    form: {
        title: "create an account",
        section_1: {
            title: "personal information",
            inputName: {
                title: "name",
                placeholder: "Name",
                require: true,
            },
            inputEmail: {
                title: "email address",
                placeholder: "Email address",
                require: true,
            },
            checkbox: {
                title: "sing up for newsletter",
            },
        },
        section_2: {
            title: "login information",
            inputPassword: {
                title: "password",
                placeholder: "password",
                require: true,
            },
            inputConfirmPassword: {
                title: "confirm password",
                placeholder: "confirm password",
                require: true,
            },
        },
        titleButton: "register",
    },
};

function FormRegister() {
    const {
        stateForm,
        submitForm,
        handleInputName,
        handleInputEmail,
        handleInputPassword,
        handleInputConfirmPassword,
    } = useFormRegister();

    const { inputName, inputEmail, inputPassword, inputConfirmPassword } =
        stateForm;
    return (
        <ContinerFormRegister>
            <div className="continer">
                <div className="continer2">
                    <div className="rediredHeaderForm">
                        <div className="continer">
                            <div className="continer2">
                                {formRegisterData.headerForm.map(
                                    (elem, index) => (
                                        <a key={index} href={elem.href}>
                                            <h1>{elem.title}</h1>
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="continerForm">
                        <div className="continer">
                            <div className="continer2">
                                <form
                                    onSubmit={(e) => submitForm(e)}
                                    className="form"
                                >
                                    <input
                                        type="hidden"
                                        name="_token"
                                        value="{{ csrf_token() }}"
                                    />
                                    <div className="headerForm">
                                        <h1>{formRegisterData.form.title}</h1>
                                    </div>
                                    <div className="sectionInformation">
                                        <div className="continer">
                                            <div className="continer2">
                                                <h2>
                                                    {
                                                        formRegisterData.form
                                                            .section_1.title
                                                    }
                                                </h2>
                                                <Input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    title={
                                                        formRegisterData.form
                                                            .section_1.inputName
                                                            .title
                                                    }
                                                    placeholder={
                                                        formRegisterData.form
                                                            .section_1.inputName
                                                            .placeholder
                                                    }
                                                    require={
                                                        formRegisterData.form
                                                            .section_1.inputName
                                                            .require
                                                    }
                                                    state={inputName.value}
                                                    handleFunction={
                                                        handleInputName
                                                    }
                                                    error={inputName.error}
                                                    messageError={"only letter"}
                                                />
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    title={
                                                        formRegisterData.form
                                                            .section_1
                                                            .inputEmail.title
                                                    }
                                                    placeholder={
                                                        formRegisterData.form
                                                            .section_1
                                                            .inputEmail
                                                            .placeholder
                                                    }
                                                    require={
                                                        formRegisterData.form
                                                            .section_1
                                                            .inputEmail.require
                                                    }
                                                    state={inputEmail.value}
                                                    handleFunction={
                                                        handleInputEmail
                                                    }
                                                    error={inputEmail.error}
                                                    messageError={
                                                        "email invalid"
                                                    }
                                                />
                                                <div className="continerCheckBox">
                                                    <input
                                                        type="checkbox"
                                                        name="check"
                                                        id="check"
                                                    />
                                                    <label htmlFor="check">
                                                        {
                                                            formRegisterData
                                                                .form.section_1
                                                                .checkbox.title
                                                        }
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sectionPassword">
                                        <div className="continer">
                                            <div className="continer2">
                                                <h2>
                                                    {
                                                        formRegisterData.form
                                                            .section_2.title
                                                    }
                                                </h2>
                                                <Input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    title={
                                                        formRegisterData.form
                                                            .section_2
                                                            .inputPassword.title
                                                    }
                                                    placeholder={
                                                        formRegisterData.form
                                                            .section_2
                                                            .inputPassword
                                                            .placeholder
                                                    }
                                                    require={
                                                        formRegisterData.form
                                                            .section_2
                                                            .inputPassword
                                                            .require
                                                    }
                                                    state={inputPassword.value}
                                                    handleFunction={
                                                        handleInputPassword
                                                    }
                                                    error={inputPassword.error}
                                                    messageError={
                                                        "invalid password min 4 and only letters, numbers and simbols ($%&_!¡?¿)"
                                                    }
                                                />
                                                <Input
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    title={
                                                        formRegisterData.form
                                                            .section_2
                                                            .inputConfirmPassword
                                                            .title
                                                    }
                                                    placeholder={
                                                        formRegisterData.form
                                                            .section_2
                                                            .inputConfirmPassword
                                                            .placeholder
                                                    }
                                                    require={
                                                        formRegisterData.form
                                                            .section_2
                                                            .inputConfirmPassword
                                                            .require
                                                    }
                                                    state={
                                                        inputConfirmPassword.value
                                                    }
                                                    handleFunction={
                                                        handleInputConfirmPassword
                                                    }
                                                    error={
                                                        inputConfirmPassword.error
                                                    }
                                                    messageError={
                                                        "the password are not the same"
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button>
                                        {formRegisterData.form.titleButton}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContinerFormRegister>
    );
}

function Input({
    type,
    id,
    name,
    title,
    placeholder,
    require,
    state,
    handleFunction,
    error,
    messageError,
}) {
    return (
        <ContinerInput>
            <div className="continer">
                <div className={`continer2 ${error ? "error" : ""}`}>
                    <label htmlFor={`${id}`}>
                        {title}
                        {require ? <span>{"*"}</span> : null}
                    </label>
                    <input
                        type={`${type}`}
                        name={`${name}`}
                        id={`${id}`}
                        placeholder={placeholder}
                        value={state}
                        onChange={(e) => handleFunction(e)}
                    />
                    {error ? <h3>{messageError}</h3> : null}
                </div>
            </div>
        </ContinerInput>
    );
}

const ContinerFormRegister = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 32px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > .continer2 {
            max-width: 1200px;
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            .rediredHeaderForm {
                width: 100%;
                height: auto;
                position: relative;
                & > .continer {
                    width: 100%;
                    height: auto;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    & > .continer2 {
                        max-width: 1100px;
                        width: 100%;
                        height: 30px;
                        position: relative;
                        display: flex;
                        justify-content: flex-start;
                        align-items: stretch;
                        & > a {
                            width: auto;
                            text-decoration: none;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            & > h1 {
                                text-align: center;
                                text-transform: uppercase;
                                position: relative;
                                color: #000;
                                font-size: 1rem;
                                padding: 0 16px;
                            }
                            &:not(:last-child) {
                                & > h1 {
                                    &::before {
                                        position: absolute;
                                        content: "/";
                                        top: 0;
                                        left: 100%;
                                        color: #000;
                                        font-size: 1rem;
                                    }
                                }
                            }
                            &:first-child {
                                & > h1 {
                                    padding-left: 0;
                                }
                                &:hover > h1 {
                                    color: #f00;
                                }
                            }
                        }
                    }
                }
            }
            .continerForm {
                width: 100%;
                height: auto;
                position: relative;
                & > .continer {
                    width: 100%;
                    height: auto;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    & > .continer2 {
                        width: 100%;
                        height: auto;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & > .form {
                            width: 100%;
                            height: auto;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: stretch;
                            padding: 16px;
                            border: 1px solid #fff;
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5),
                                0 2px 4px -1px rgba(0, 0, 0, 0.06);
                            /* box-shadow: 15px 15px 25px #0005; */
                            & > .headerForm {
                                width: 100%;
                                height: auto;
                                position: relative;
                                & > h1 {
                                    height: auto;
                                    width: 100%;
                                    text-align: left;
                                    padding: 8px 0;
                                    font-size: 1.5rem;
                                    text-transform: uppercase;
                                    color: #000;
                                }
                            }
                            .sectionInformation {
                                width: 100%;
                                height: auto;
                                position: relative;
                                & > .continer {
                                    width: 100%;
                                    height: auto;
                                    position: relative;
                                    & > .continer2 {
                                        width: 100%;
                                        height: auto;
                                        position: relative;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: stretch;
                                        justify-content: flex-start;
                                        & > h2 {
                                            width: 100%;
                                            font-size: 1.2rem;
                                            color: #444;
                                            text-align: left;
                                            &::first-letter {
                                                text-transform: uppercase;
                                            }
                                        }
                                        .continerCheckBox {
                                            width: 100%;
                                            height: auto;
                                            display: flex;
                                            padding: 8px 0 16px 0;
                                            align-items: center;
                                            justify-content: flex-start;
                                            & > input[type="checkbox"] {
                                                margin-right: 4px;
                                            }
                                            & > label {
                                                font-size: 1rem;
                                                color: #000;
                                                &::first-letter {
                                                    text-transform: uppercase;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            .sectionPassword {
                                width: 100%;
                                height: auto;
                                position: relative;
                                & > .continer {
                                    width: 100%;
                                    height: auto;
                                    position: relative;
                                    padding: 8px 0 16px 0;
                                    & > .contitner2 {
                                        width: 100%;
                                        height: auto;
                                        position: relative;
                                        display: flex;
                                        flex-direction: column;
                                        justify-content: flex-start;
                                        align-items: stretch;
                                        & > h2 {
                                            font-size: 1.2rem;
                                            color: #444;
                                            text-align: left;
                                            &::first-letter {
                                                text-transform: uppercase;
                                            }
                                        }
                                    }
                                }
                            }
                            & > button {
                                align-self: flex-end;
                                font-size: 1rem;
                                text-align: center;
                                border: none;
                                background-color: #f00;
                                border-radius: 5px;
                                color: #fff;
                                text-transform: uppercase;
                                padding: 16px;
                                cursor: pointer;
                                border: 3px solid #f00;
                                transition: all 0.3s ease-in-out;
                                &:hover {
                                    background-color: transparent;
                                    color: #f00;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 750px) and (max-width: 900px) {
        & > .continer {
            & > .continer2 {
                align-items: flex-start;
                .continerForm {
                    & > .continer {
                        & > .continer2 {
                            width: 350px;
                        }
                    }
                }
            }
        }
    }
    @media (min-width: 900px) {
        & > .continer {
            & > .continer2 {
                align-items: center;
                .rediredHeaderForm {
                    /* width: 100%; */
                }
                .continerForm {
                    & > .continer {
                        padding: 36px 0;
                        & > .continer2 {
                            width: 550px;
                            & > .form {
                                padding: 32px 64px;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const ContinerInput = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    & > .continer {
        width: 100%;
        height: auto;
        position: relative;
        padding: 8px 0;
        & > .continer2 {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            flex-direction: column;
            & > label {
                &::first-letter {
                    text-transform: uppercase;
                }
                font-size: 1rem;
                height: 30px;
                padding: 8px 0;
                color: #000;
                & > span {
                    margin-left: 4px;
                    color: #000;
                    font-size: 1rem;
                }
            }
            & > input {
                width: 100%;
                height: 35px;
                color: #000;
                background-color: #fff;
                padding: 8px 0 2px 8px;
                border: 1px solid #000077;
                border-radius: 5px;
                outline: none;
                &::placeholder {
                    padding: 10px 0 0 8px;
                    color: #00aa00;
                }
            }
        }
        & > .error {
            & > input {
                border-color: #f00;
            }
            & > h3 {
                width: 100%;
                font-size: 0.8rem;
                color: #f00;
                text-transform: uppercase;
            }
        }
    }
`;

export default FormRegister;
