class Testimonial{
    image = ""
    content = ""
    author = ""

    constructor(image, content, author){
        this.image = image,
        this.content = content,
        this.author = author
    }
    html(){
        return`<div class="testimonial">
        <img src="${this.image}"/>
        <p class="quote">"${this.content}"</p>
        <p class="author">${this.author}</p>
        </div>`
    }
}

const testimonial1 = new Testimonial("./assets/img/arifk.jpeg", "terimakasih mas telah membantu", "martin odegaard")
const testimonial2 = new Testimonial("./assets/img/arifk.jpeg", "terimakasih keren mas", "Jude Bellingham")
const testimonial3 = new Testimonial("./assets/img/arifk.jpeg", "lumayan bagus mas", "Kai Havert")


const testimonials = [testimonial1, testimonial2, testimonial3]

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++ ){
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML