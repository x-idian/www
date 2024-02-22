class Content {
    title: string;
    body: string;


    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
    }
}

export const our_values: Content[] = [
    new Content("Excellence with Pace", "We are committed to excellence in everything we do,from working with clients and our team to partnering with others and supporting the community. We aim for outstanding results, but we don’t let perfectionism get in the way."),
    new Content("Fun with Accountability", "We work hard and have fun, and we take responsibility for our work. We believe that having fun at work makes us more engaged, creative, and productive. We take our work seriously, but we don’t take ourselves too seriously."),
    new Content("Curiosity with Bravery", "Curiosity and determination are key to our innovation and growth. Curiosity fuels our learning culture, while courage helps us take risks and try new things. Together, they spark groundbreaking discoveries and inventive solutions."),
    new Content("Team Work with Simplicity", "We believe teamwork is powerful. We communicate clearly and listen to everyone. We take responsibility for our actions and decisions. We keep things simple and adapt to change."),
    new Content("Focused with Data Driven", "X-idian is on a mission to lead the AI revolution by creating new and innovative solutions that transform industries. We strive for excellence and aim to push the boundaries of what is possible with AI."),
    new Content("Respect with Client Focus", "We value the opinions, contributions, and dignity of all employees and clients. We believe everyone deserves to be treated with kindness, fairness, and understanding.")
]