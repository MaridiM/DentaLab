import { useTranslation } from "react-i18next"

export const useTranslate = (page = null, layers = [],  ) => {
    const { t} = useTranslation(page)

    const translation = {}
    layers && layers.map(arg => {
        const typeArg = typeof(arg) === 'object'
        return translation[typeArg ? arg[0] : arg ] = t( typeArg ? arg[0] : arg, { 
            returnObjects: typeArg && arg[1] ? arg[1] : false 
        })
    })


    return { translation }

}
