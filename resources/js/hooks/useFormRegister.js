import { useState } from "react";

const initialForm = {
    inputName: {
        value: "",
        error: false,
    },
    inputEmail: {
        value: "",
        error: false,
    },
    inputPassword: {
        value: "",
        error: false,
    },
    inputConfirmPassword: {
        value: "",
        error: false,
    },
};

function useFormRegister() {
    const [stateForm, setStateForm] = useState(initialForm);

    const { inputName, inputEmail, inputPassword, inputConfirmPassword } =
        stateForm;
    function submitForm(e) {
        e.preventDefault();

        if (
            !(
                inputName.error &&
                inputEmail.error &&
                inputPassword.error &&
                inputConfirmPassword.error
            ) &&
            inputName.value !== "" &&
            inputEmail.value !== "" &&
            inputPassword.value !== "" &&
            inputConfirmPassword.value !== ""
        ) {
            // console.log()
            location.assign("/");
        }
    }

    function handleInputName(e) {
        if (
            e.target.value.match(/^[a-zA-Z ñáéíóúÁÉÍÓÚ]+$/gi) &&
            e.target.value.trim() !== ""
        ) {
            setStateForm({
                ...stateForm,
                inputName: {
                    ...stateForm.inputName,
                    value: e.target.value,
                    error: false,
                },
            });
        } else {
            setStateForm({
                ...stateForm,
                inputName: {
                    ...stateForm.inputName,
                    value: e.target.value,
                    error: true,
                },
            });
        }
    }

    function handleInputEmail(e) {
        if (
            e.target.value.match(
                /^[\w()<>\-,;:"[\]ç%&ñ]+@[a-z]+\.com\.?((net|[a-z])|com|gob)?\.?(com|net)?$/
            ) &&
            e.target.value.trim() !== ""
        ) {
            setStateForm({
                ...stateForm,
                inputEmail: {
                    ...stateForm.inputEmail,
                    value: e.target.value,
                    error: false,
                },
            });
        } else {
            setStateForm({
                ...stateForm,
                inputEmail: {
                    ...stateForm.inputEmail,
                    value: e.target.value,
                    error: true,
                },
            });
        }
    }

    function handleInputPassword(e) {
        if (
            e.target.value.match(/^[a-zA-ZñáéíóúÁÉÍÓÚ/*-_$%&|!¡?¿+]+$/gi) &&
            e.target.value.trim() !== "" &&
            e.target.value.length >= 4
        ) {
            setStateForm({
                ...stateForm,
                inputPassword: {
                    ...stateForm.inputPassword,
                    value: e.target.value,
                    error: false,
                },
            });
            if (e.target.value === stateForm.inputConfirmPassword.value) {
                // console.log("entre");
                setStateForm({
                    ...stateForm,
                    inputConfirmPassword: {
                        ...stateForm.inputConfirmPassword,
                        error: false,
                    },
                });
            }
        } else {
            setStateForm({
                ...stateForm,
                inputPassword: {
                    ...stateForm.inputPassword,
                    value: e.target.value,
                    error: true,
                },
            });
        }
    }

    function handleInputConfirmPassword(e) {
        if (e.target.value === stateForm.inputPassword.value) {
            setStateForm({
                ...stateForm,
                inputConfirmPassword: {
                    ...stateForm.inputConfirmPassword,
                    value: e.target.value,
                    error: false,
                },
            });
        } else {
            setStateForm({
                ...stateForm,
                inputConfirmPassword: {
                    ...stateForm.inputConfirmPassword,
                    value: e.target.value,
                    error: true,
                },
            });
        }
    }

    return {
        stateForm,
        setStateForm,
        submitForm,
        handleInputName,
        handleInputEmail,
        handleInputPassword,
        handleInputConfirmPassword,
    };
}

export default useFormRegister;
