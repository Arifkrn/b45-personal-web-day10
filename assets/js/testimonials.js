const testimonials = [
    {
        image  : "./assets/img/arifk.jpeg",
        content: "terimakasih mas telah membantu",
        author : "martin odegaard",
        bintang: 1
    
    },
    {
        image  : "./assets/img/arifk.jpeg",
        content: "terimakasih keren mas",
        author : "Jude Bellingham",
        bintang: 2
    },
    {
        image  : "./assets/img/arifk.jpeg",
        content: "lumayan bagus mas",
        author : "Kai Havert",
        bintang: 3
    }

]
function allTestimonial(){
    if(!testimonials.length){
        return document.getElementById("testimonial").innerHTML = `<h2>Data Not Found</h2>`
    }
    console.log(testimonials)
// let testimonialHTML = ``

const testimonialHTML = testimonials.map((testimonial) =>{
    return `<div class="testimonial">
    <img src="${testimonial.image}"/>
    <p class="quote">"${testimonial.content}"</p>
    <p class="author">${testimonial.author}</p>
    <p class="filterbin">${testimonial.bintang}<i class="bi bi-star-fill"></i></p>
    </div>`
})

    document.getElementById("testimonials").innerHTML = testimonialHTML.join('')
}

function filterTestimonial(bintang){
    const filterTest = testimonials.filter(testimonial => {
        return testimonial.bintang == bintang
    })
    const testimonialHTML = filterTest.map((testimonial) =>{
        return `<div class="testimonial">
        <img src="${testimonial.image}"/>
        <p class="quote">"${testimonial.content}"</p>
        <p class="author">${testimonial.author}</p>
        <p class="filterbin">${testimonial.bintang}<i class="bi bi-star-fill"></i></p>
        </div>`
    })
    document.getElementById("testimonials").innerHTML = testimonialHTML.join('')

}

allTestimonial()