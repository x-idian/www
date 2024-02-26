import strategy_roadmap_img from "$lib/assets/strategy-roadmap.jpg";
import model_training_img from "$lib/assets/model-training.jpg";
import vendor_evaluation_img from "$lib/assets/vendor-evaluation.jpg";
import readiness_assessment_img from "$lib/assets/readiness-assessment.jpg";
class ContentImage {
    title: string;
    body: string;
    image: string

    constructor(title: string, body: string, image: string) {
        this.title = title;
        this.body = body;
        this.image = image
    }
}
export const how_we_can_help :ContentImage[] = [
    new ContentImage(
        "Strategy and Roadmap",
        "X-idian works with businesses to develop a plan for using AI to achieve their goals. We work with you to identify the best ways to use AI in your company, assess the feasibility of your ideas, and prioritise your initiatives. We also help you create a strategic plan that aligns your AI efforts with your overall business goals.",
        strategy_roadmap_img
    ),
    new ContentImage(
        "Data Strategy and Management",
        "X-idian assist businesses connect their AI to their existing systems and workflows. We partner with our clients to find the best places to connect AI, design APIs, and make sure that everything works together smoothly. We also customize AI solutions to fit specific business needs.",
        model_training_img
    ),
    new ContentImage(
        "Readiness Assessment",
        "We guide our clients to get ready to use AI. We look at their data, infrastructure, skills, and culture to see if they are ready for AI. This assessment helps us find any problems before we put in AI solutions.",
        readiness_assessment_img
    ),
     new ContentImage(
        "Vendor Evaluation and Selection",
         "We help you choose the right AI tool or solution for your project by carefully evaluating vendors based on their technology, performance, scalability, pricing, and fit with your goals. This helps you implement AI efficiently and effectively to achieve your desired outcomes.",
         vendor_evaluation_img
    ),
     new ContentImage(
        "Implementation",
        "We guide our clients to get ready to use AI. We look at their data, infrastructure, skills, and culture to see if they are ready for AI. This assessment helps us find any problems before we put in AI solutions.",
         model_training_img
    ),

]
