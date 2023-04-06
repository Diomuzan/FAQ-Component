class QuestionComponent extends Component{
    constructor(question, anwer){
        super("div");
        this.rootElement.class = "faqSection";
        this.question = question;
        this.anwer = anwer;
        this.initView();
    }


    initView(){           
            this.rootElement.innerHTML += `
                <p class='vraag'>${this.question}</p>
                <p class='antwoord'>${this.anwer}</p>`;
    
            const question = this.querySelector('vraag');
            question.addEventListener("click", () => {
                this.onClick();

            });
            
        
        
    }

    onClick(){
        const answer = this.querySelector('antwoord');
        // const answer = document.querySelector(`.${ans}`);
        if(answer.classList.contains('hidden')){
            answer.classList.remove('hidden');
        }
        else{
            answer.classList.add('hidden');
        }

    
    }
}