window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController {

    init() {


        let questions = [{
            question: 'vraag1',
            answer: 'antwoord1',
        },{
            question: 'vraag2',
            answer: 'antwoord2',
        }];
            // let questions = ["Vraag 1", "Vraag2", "Vraag3"];
            // let anwers = ["Antwoord1", "Antwoord2", "Antwoord3"];

         
    
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i].question;
            const answer = questions[i].answer;

            let questionComponent = new QuestionComponent(question, answer); 
            document.querySelector("section").append(questionComponent.getView());

        }

            
        

      //  let questionComponent = new QuestionComponent();
    }
}