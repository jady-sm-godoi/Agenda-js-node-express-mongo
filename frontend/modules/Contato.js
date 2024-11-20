import validator from "validator";

export default class Contato{
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

        const nome = el.querySelector('input[name=nome]')
        const sobrenome = el.querySelector('input[name=sobrenome]')
        const email = el.querySelector('input[name=email]')
        const telefone = el.querySelector('input[name=telefone]')
        let error = false;

        if(nome.value == ""){
            alert('campo nome vazio!')
            error = true;
        }
        if(sobrenome.value == ""){
            alert('campo sobrenome vazio!')
            error = true;
        }
        if(!validator.isEmail(email.value)){
            alert("Email inválido!");
            error = true;
        }
        if(!validator.isMobilePhone(telefone.value, ['pt-BR'])){
            alert('telefone inválido!');
            error = true;
        }

        if(!error) el.submit();
    }
}