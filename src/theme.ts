import { extendTheme } from "native-base"

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light'
}

const colors = {
    primary: {
        50: '#EEF2F6',
        100: '#CFD'
    }
}

export default extendTheme({config, colors})