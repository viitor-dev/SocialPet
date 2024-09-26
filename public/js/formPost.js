export class formPost {
    constructor(idForm, idTextarea, idUlpost) {
        this.form = document.getElementById(idForm);
        this.textarea = document.getElementById(idTextarea);
        this.ulPost = document.getElementById(idUlpost);
        this.addSubmit();
    }
    
    onSubmit(func){
        this.form.addEventListener('submit',func)
    }
    /*Validação de campo de texto vazio ou menor que 3*/
    formValidate(value){
        if(value == "" || value == null || value == undefined || value.length <3){
            return false
        }
        return true
    }
    /*função para obter a data atual*/ 
    getTime(){
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        return `${hour}h ${minutes}min`
    }
    /*FUNÇÃO PARA O BOTÃO PUBLICAR (BOTÃO SUBMIT)*/
    addSubmit(){
        const handleSubmit = (event) => {
            event.preventDefault();
            if(this.formValidate(this.textarea.value)){
                const time = this.getTime();
                const newPost = document.createElement('li');
                newPost.classList.add('post');
                /*CONTEÚDO DA POSTAGEM DINÂMICA*/
                newPost.innerHTML = `

                <div class="info-user-post">
                    <div class="img-user-post">
                        <img src="images/dog-tyson.jpeg">
                    </div>

                    <div class="name-and-hour"> <strong>Jeferson Ribeiro</strong>
                    <p>${time}</p>
                    </div>
                </div>
                
                <p>
                    ${this.textarea.value}
                </p>

                <div class="img-post">
                    <img src="images/cachorro-cururu.webp">
                    
                </div>


                <div class="action-btn-post">
                    <button type="button" class="files-post like"><img src="icons/paw.svg" alt="Curtir">curtir</button>
                    <button type="button" class="files-post direct"><img src="icons/direct.svg" alt="Comentar">comentar</button>
                    <button type="button" class="files-post share"><img src="icons/share.svg" alt="Compartilhar">compartilhar</button>
                </div>
            
            `;
            
            this.ulPost.append(newPost);
            this.textarea.value="";

            }
            /*ALERTA PARA CAMPO VAZIO OU < 3 LINHAS*/
            else {
                alert('Verifique o campo digitado.')
            }
        }
            

        this.onSubmit(handleSubmit)
    }

}
const postForm = new formPost('formPost','textarea','posts')

