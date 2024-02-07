const _ = require("lodash");
module.exports = {

  home: async (req, res) => {
    try {
      return res.view("homepage",{categories});
    } catch (err) {
      console.log(err);
      return res.json({ status: "404", message: "failed", data: err.message });
    }
  },
  search: async (req, res) => {
    try {
        var params = req.allParams();
        var data = categories.filter(item => item.name.toLowerCase().includes(params.searchTerm.toLowerCase())).slice(0,5) 
        return res.json({ status: "200", message: "success", data});
    } catch (err) {
      console.log(err);
      return res.json({ status: "404", message: "failed", data: err.message });
    }
  },
};



const categories = [
    {
        name: 'Mathematics',
        link: '/categories/mathematics',
        quote: '“Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.” - Albert Einstein',
    },
    {
        name: 'Science',
        link: '/categories/science',
        quote: '“The important achievement of Apollo was demonstrating that humanity is not forever chained to this planet and our visions go rather further than that and our opportunities are unlimited.” - Neil Armstrong',
    },
    {
        name: 'History',
        link: '/categories/history',
        quote: '“The only thing we learn from history is that we learn nothing from history.” - Georg Wilhelm Friedrich Hegel',
    },
    {
        name: 'Geography',
        link: '/categories/geography',
        quote: '“The more I study geography, the more I realize that I knew nothing about the world.” - Albert Einstein',
    },
    {
        name: 'Literature',
        link: '/categories/literature',
        quote: '“A room without books is like a body without a soul.” - Marcus Tullius Cicero',
    },
    {
        name: 'Grammar and Language Arts',
        link: '/categories/grammar-and-language-arts',
        quote: '“Language is the road map of a culture. It tells you where its people come from and where they are going.” - Rita Mae Brown',
    },
    {
        name: 'General Knowledge',
        link: '/categories/general-knowledge',
        quote: '“Knowledge is power.” - Sir Francis Bacon',
    },
    {
        name: 'World Capitals',
        link: '/categories/world-capitals',
        quote: '“The gladdest moment in human life is a departure into unknown lands.” - Sir Richard Burton',
    },
    {
        name: 'Famous Inventors and Inventions',
        link: '/categories/famous-inventors-and-inventions',
        quote: '“The best way to predict the future is to invent it.” - Alan Kay',
    },
    {
        name: 'Art and Artists',
        link: '/categories/art-and-artists',
        quote: '“Art is not what you see, but what you make others see.” - Edgar Degas',
    },
    {
        name: 'Music and Musicians',
        link: '/categories/music-and-musicians',
        quote: '“Without music, life would be a mistake.” - Friedrich Nietzsche',
    },
    {
        name: 'Philosophy',
        link: '/categories/philosophy',
        quote: '“The unexamined life is not worth living.” - Socrates',
    },
    {
        name: 'Technology and Gadgets',
        link: '/categories/technology-and-gadgets',
        quote: '“Any sufficiently advanced technology is indistinguishable from magic.” - Arthur C. Clarke',
    },
    {
        name: 'Computer Science',
        link: '/categories/computer-science',
        quote: '“The computer was born to solve problems that did not exist before.” - Bill Gates',
    },
    {
        name: 'Environmental Science',
        link: '/categories/environmental-science',
        quote: '“What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.” - Mahatma Gandhi',
    },
    {
        name: 'Astronomy and Space',
        link: '/categories/astronomy-and-space',
        quote: '“The important achievement of Apollo was demonstrating that humanity is not forever chained to this planet and our visions go rather further than that and our opportunities are unlimited.” - Neil Armstrong',
    },
    {
        name: 'Health and Nutrition',
        link: '/categories/health-and-nutrition',
        quote: '“The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.” - Ann Wigmore',
    },
    {
        name: 'Current Affairs and News',
        link: '/categories/current-affairs-and-news',
        quote: '“The more you know, the more you realize you don’t know.” - Aristotle',
    },
    {
        name: 'Sports and Athletes',
        link: '/categories/sports-and-athletes',
        quote: '“You miss 100% of the shots you don’t take.” - Wayne Gretzky',
    },
    {
        name: 'Economics and Finance',
        link: '/categories/economics-and-finance',
        quote: '“The stock market is filled with individuals who know the price of everything, but the value of nothing.” - Philip Fisher',
    },
    {
        name: 'Social Studies',
        link: '/categories/social-studies',
        quote: '“History is a relentless master. It has no present, only the past rushing into the future. To try to hold fast is to be swept aside.” - John F. Kennedy',
    },
    {
        name: 'Psychology',
        link: '/categories/psychology',
        quote: '“The best way to predict the future is to create it.” - Peter Drucker',
    },
    {
        name: 'Sociology',
        link: '/categories/sociology',
        quote: '“Sociology is the scientific study of the obvious.” - Rory Sutherland',
    },
    {
        name: 'Anthropology',
        link: '/categories/anthropology',
        quote: '“The study of culture is where all science must begin.” - Edward T. Hall',
    },
    {
        name: 'Political Science',
        link: '/categories/political-science',
        quote: '“Politics is the art of the possible, the attainable — the art of the next best.” - Otto von Bismarck',
    },
    {
        name: 'Foreign Languages',
        link: '/categories/foreign-languages',
        quote: '“One language sets you in a corridor for life. Two languages open every door along the way.” - Frank Smith',
    },
    {
        name: 'Business and Entrepreneurship',
        link: '/categories/business-and-entrepreneurship',
        quote: '“The best way to predict the future is to create it.” - Peter Drucker',
    },
    {
        name: 'Marketing',
        link: '/categories/marketing',
        quote: '“The aim of marketing is to know and understand the customer so well the product or service fits them and sells itself.” - Peter Drucker',
    },
    {
        name: 'Communication Skills',
        link: '/categories/communication-skills',
        quote: '“The art of communication is the language of leadership.” - James Humes',
    },
    {
        name: 'Personal Development',
        link: '/categories/personal-development',
        quote: '“The only person you are destined to become is the person you decide to be.” - Ralph Waldo Emerson',
    },
    {
        name: 'Time Management',
        link: '/categories/time-management',
        quote: '“The key is not in spending time, but in investing it.” - Stephen R. Covey',
    },
    {
        name: 'Culinary Arts',
        link: '/categories/culinary-arts',
        quote: '“Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors — it’s how you combine them that sets you apart.” - Wolfgang Puck',
    },
    {
        name: 'Fashion and Style',
        link: '/categories/fashion-and-style',
        quote: '“Fashion is about dressing according to what’s fashionable. Style is more about being yourself.” - Oscar de la Renta',
    },
    {
        name: 'Film and Cinema',
        link: '/categories/film-and-cinema',
        quote: '“Movies can and do have tremendous influence in shaping young lives in the realm of entertainment towards the ideals and objectives of normal adulthood.” - Walt Disney',
    },
    {
        name: 'Dance and Choreography',
        link: '/categories/dance-and-choreography',
        quote: '“Dance is the hidden language of the soul.” - Martha Graham',
    },
    {
        name: 'Photography',
        link: '/categories/photography',
        quote: '“Photography is the story I fail to put into words.” - Destin Sparks',
    },
    {
        name: 'Architecture',
        link: '/categories/architecture',
        quote: '“Architecture is a visual art, and the buildings speak for themselves.” - Julia Morgan',
    },
    {
        name: 'Medicine and Healthcare',
        link: '/categories/medicine-and-healthcare',
        quote: '“The best way to find yourself is to lose yourself in the service of others.” - Mahatma Gandhi',
    },
    {
        name: 'Dentistry',
        link: '/categories/dentistry',
        quote: '“The toothbrush is the modern version of the touchstone.” - Mark Twain',
    },
    {
        name: 'Veterinary Medicine',
        link: '/categories/veterinary-medicine',
        quote: '“The greatness of a nation and its moral progress can be judged by the way its animals are treated.” - Mahatma Gandhi',
    },
    {
        name: 'Law and Legal Studies',
        link: '/categories/law-and-legal-studies',
        quote: '“Ignorance of the law is no excuse in any country. If it were, the laws would lose their effect, because it can always be pretended.” - Thomas Jefferson',
    },
    {
        name: 'Environmental Law',
        link: '/categories/environmental-law',
        quote: '“What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another.” - Mahatma Gandhi',
    },
    {
        name: 'Artificial Intelligence',
        link: '/categories/artificial-intelligence',
        quote: '“The development of full artificial intelligence could spell the end of the human race.” - Stephen Hawking',
    },
    {
        name: 'Robotics',
        link: '/categories/robotics',
        quote: '“The robots are coming, whether we like it or not.” - Mark Cuban',
    },
    {
        name: 'Virtual Reality',
        link: '/categories/virtual-reality',
        quote: '“Virtual reality is the first step in a grand adventure into the landscape of the imagination.” - Frank Biocca',
    },
    {
        name: 'Augmented Reality',
        link: '/categories/augmented-reality',
        quote: '“We want to build the impossible.” - Jeff Bezos',
    },
    {
        name: 'Renewable Energy',
        link: '/categories/renewable-energy',
        quote: '“The use of solar energy has not been opened up because the oil industry does not own the sun.” - Ralph Nader',
    },
    {
        name: 'Climate Change',
        link: '/categories/climate-change',
        quote: '“We won’t have a society if we destroy the environment.” - Margaret Mead',
    },
    {
        name: 'Space Exploration',
        link: '/categories/space-exploration',
        quote: '“Exploration knows no bounds.” - Christina Koch',
    },
    {
        name: 'Psychiatry',
        link: '/categories/psychiatry',
        quote: '“The greatest healing therapy is friendship and love.” - Hubert H. Humphrey',
    },
    {
        name: 'Nursing',
        link: '/categories/nursing',
        quote: '“Nurses may not be angels, but they are the next best thing.” - Anonymous',
    },
    {
        name: 'Pharmacy',
        link: '/categories/pharmacy',
        quote: '“The art of medicine consists of amusing the patient while nature cures the disease.” - Voltaire',
    },
    {
        name: 'Physics',
        link: '/categories/physics',
        quote: '“Physics is the poetry of the universe.” - Dr. Sabine Hossenfelder',
    },
    {
        name: 'Chemistry',
        link: '/categories/chemistry',
        quote: '“Chemistry can be a good and bad thing. Chemistry is good when you make love with it. Chemistry is bad when you make crack with it.” - Adam Sandler',
    },
    {
        name: 'Biology',
        link: '/categories/biology',
        quote: '“The only real voyage of discovery consists not in seeking new landscapes, but in having new eyes.” - Marcel Proust',
    },
    {
        name: 'Astrophysics',
        link: '/categories/astrophysics',
        quote: '“The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.” - Carl Sagan',
    },
    {
        name: 'Paleontology',
        link: '/categories/paleontology',
        quote: '“Fossils have richly illustrated the past, but the story of life can be told only by the finest biological detective work.” - Stephen Jay Gould',
    },
    {
        name: 'Zoology',
        link: '/categories/zoology',
        quote: '“The greatness of a nation and its moral progress can be judged by the way its animals are treated.” - Mahatma Gandhi',
    },
    {
        name: 'Botany',
        link: '/categories/botany',
        quote: '“In every walk with nature, one receives far more than he seeks.” - John Muir',
    },
    {
        name: 'Microbiology',
        link: '/categories/microbiology',
        quote: '“The more I study microbiology, the more I am convinced that life was originally conceived in the slime of the sea.” - Sir Harold Kroto',
    },
];
