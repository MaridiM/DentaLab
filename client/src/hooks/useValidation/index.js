export const useValidation = () => {
    const REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const validate = (form) =>  {
        console.log(form)
    }

    return { validate }
}