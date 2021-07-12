import { useState } from "react";

const initialForm = {
    inputUser: {
        value: "",
        error: false,
    },
    inputPassword: {
        value: "",
        error: false,
    },
};

function useFormLogin() {
    const [stateForm, setStateForm] = useState(initialForm);

    const { inputUser, inputPassword } = stateForm;
    function submitForm(e) {
        e.preventDefault();

        if (
            !(inputUser.error && inputPassword.error) &&
            inputUser.value !== "" &&
            inputPassword.value !== ""
        ) {
            // console.log()
            location.assign("/");
        }
    }

    function handleInputUser(e) {
        if (
            e.target.value.match(
                /^[\w()<>\-,;:"[\]ç%&ñ]+@[a-z]+\.com\.?((net|[a-z])|com|gob)?\.?(com|net)?$/
            ) &&
            e.target.value.trim() !== ""
        ) {
            setStateForm({
                ...stateForm,
                inputUser: {
                    ...stateForm.inputUser,
                    value: e.target.value,
                    error: false,
                },
            });
        } else {
            setStateForm({
                ...stateForm,
                inputUser: {
                    ...stateForm.inputUser,
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

    return {
        stateForm,
        submitForm,
        handleInputUser,
        handleInputPassword,
    };
}

export default useFormLogin;
