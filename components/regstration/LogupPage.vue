<template>
    <form @submit = "onSubmit" class="xsm:w-full sm:w-4/5 md:w-2/5">
        <div class="relative">
            <input v-model="inputData.firstName" class=" border-2 py-0.5 px-1  outline-none border-black rounded-md w-full" type="phone"
                >
            <span v-show = '!inputValidate.phoneValidate' class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputName")}}
                </span>
                <span v-show = 'inputValidate.phoneValidate' class="absolute font-sans bg-white px-0.4 text-sm text-red -top-0.5 left-6">{{$t("registration.validateInputName")}}
            </span>
        </div>
        <div class="relative mt-4">
            <input v-model="inputData.phone" class=" border-2 py-0.5 px-1  outline-none border-black rounded-md w-full" type="phone"
                maxlength="13">
            <span v-show = '!inputValidate.phoneValidate' class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputPhone")}}</span>
                <span v-show = 'inputValidate.phoneValidate' class="absolute font-sans bg-white px-0.4 text-sm text-red -top-0.5 left-6">*{{$t("registration.validatePhone")}}
            </span>
        </div>
        <div class="relative my-4">
            <input v-model="inputData.password"  class=" border-2 py-0.5 px-1  outline-none border-black rounded-md w-full" type="phone"
                maxlength="13">
            <span v-show = '!inputValidate.passwordValidate' class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputParol2")}}</span>
            <span v-show = 'inputValidate.passwordValidate' class="absolute font-sans bg-white px-0.4 text-sm text-red -top-0.5 left-6">*{{$t("registration.validateParol2")}}</span>
        </div>
        <div class="relative mb-4">
            <input v-model="inputData.passwordConfirmation"  class=" border-2 py-0.5 px-1  outline-none border-black rounded-md w-full" type="phone"
                maxlength="13">
            <span v-show = '!inputValidate.passwordConfirmationValidate' class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputParol3")}}</span>
            <span v-show = 'inputValidate.passwordConfirmationValidate' class="absolute font-sans bg-white px-0.4 text-sm text-red -top-0.5 left-6">*{{$t("registration.validateParol2")}}</span>
        </div>
        <div>
            <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox" checked>
                <span class="ml-2 font-sans"> <span class="text-green underline cursor-pointer">"{{$t("registration.agreement")}}" </span> </span>
            </label>
        </div>
        <button type="submit" class="bg-green mt-2 mb-4
         text-white py-0.5 w-full font-semibold font-sans rounded-md outline-none border-green">{{$t("registration.logIn")}}</button>
    </form>

</template>

<script>
export default {
    name: "LoginPage",
    props: {
        inputData: {
            type: Object | Array,
            required: true,
            default: [],
        },
        inputValidate: {
            type: Object | Array,
            required: true,
            default: [],
        }
    },
    data() {
        return {
           
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            if (this.inputData.phone == "") {
                this.inputValidate.phoneValidate = true;
            }
            else if (this.inputData.phone){
                this.inputValidate.phoneValidate = false;
            }
            if (this.inputData.password == "") {
                this.inputValidate.passwordValidate = true;
            }
            else if (this.inputData.password){
                this.inputValidate.passwordValidate = false;
            }
            if (this.inputData.firstName == "") {
                this.inputValidate.firstNameValidate = true;
            }
            else if (this.inputData.firstName){
                this.inputValidate.firstNameValidate = false;
            }
            if (this.inputData.passwordConfirmation == "") {
                this.inputValidate.passwordConfirmationValidate = true;
            }
            else if (this.inputData.passwordConfirmation){
                this.inputValidate.passwordConfirmationValidate = false
            }
        }
    },
}
</script>

<style scoped>
    .form-checkbox{
        accent-color:green;
    }
</style>