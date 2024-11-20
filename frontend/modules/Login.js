import validator from "validator";

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }

    init(){
        this.events();
    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e){
        const el = e.target;
        const emailimput = el.querySelector('input[name="email"]');
        const passwordimput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validator.isEmail(emailimput.value)){ 
            alert('Email inválido!')
            error = true;
        }

        if(passwordimput.value.length < 3 || passwordimput.value.length > 50){
            alert('Senha precisa ter entre 3 e 50 caracteres.')
            error = true;
        }

        if(!error) el.submit();

    }
}