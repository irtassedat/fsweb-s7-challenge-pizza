import * as Yup from "yup";

const orderSchema = Yup.object().shape({
    name: Yup.string().min(2,"İsim en az 2 karakter olmalıdır"),
    text: Yup.string()
})

export default orderSchema