const big5Norms = [
  {
    id: 1,
    group: "young males",
    age: [18, 28], // lower and upper age limit
    extraversion: [24, 34], //31 and 69 percentile cutoff score
    neuroticism: [25, 34],
    agreeableness: [34, 40],
    conscientiousness: [29, 36],
    openness: [37, 43],
  },
  {
    id: 2,
    group: "somewhat young males",
    age: [29, 38],
    extraversion: [25, 35],
    neuroticism: [24, 33],
    agreeableness: [35, 41],
    conscientiousness: [31, 38],
    openness: [38, 44],
  },
  {
    id: 3,
    group: "middle age males",
    age: [39, 48],
    extraversion: [26, 35],
    neuroticism: [23.5, 33],
    agreeableness: [34.5, 42],
    conscientiousness: [32, 40],
    openness: [38, 45],
  },
  {
    id: 4,
    group: "Old middleage males",
    age: [49, 58],
    extraversion: [26, 35],
    neuroticism: [22, 32],
    agreeableness: [36, 43],
    conscientiousness: [33, 41],
    openness: [38, 44],
  },
  {
    id: 5,
    group: "old males",
    age: [59, 120],
    extraversion: [26, 37],
    neuroticism: [22, 31],
    agreeableness: [38, 43],
    conscientiousness: [31, 40],
    openness: [38, 44],
  },
  {
    id: 6,
    group: "Young females",
    age: [18, 28],
    extraversion: [26, 35],
    neuroticism: [26, 37],
    agreeableness: [37, 44],
    conscientiousness: [30, 37],
    openness: [35, 42],
  },
  {
    id: 7,
    group: "somewhat young females",
    age: [29, 38],
    extraversion: [26, 36],
    neuroticism: [27, 36],
    agreeableness: [38, 45],
    conscientiousness: [32, 39],
    openness: [36, 43],
  },
  {
    id: 8,
    group: "middleage females",
    age: [39, 48],
    extraversion: [28, 38],
    neuroticism: [25, 34],
    agreeableness: [39, 46],
    conscientiousness: [33, 40],
    openness: [37, 43],
  },
  {
    id: 9,
    group: "old middleage females",
    age: [49, 58],
    extraversion: [29, 38],
    neuroticism: [22, 31],
    agreeableness: [40, 46],
    conscientiousness: [34, 41],
    openness: [37, 44],
  },
  {
    id: 10,
    group: "old females",
    age: [59, 120],
    extraversion: [27, 37],
    neuroticism: [23, 32],
    agreeableness: [40, 46],
    conscientiousness: [34, 41],
    openness: [37, 44],
  },
];

const big5 = [
  { id: 1, type: "E", item: "I am the life of the party.", reverse: false },
  { id: 2, type: "N", item: "I get stressed out easily.", reverse: false },
  {
    id: 3,
    type: "A",
    item: "I feel little concern for others.",
    reverse: true,
  },
  { id: 4, type: "C", item: "I am always prepared.", reverse: false },
  { id: 5, type: "O", item: "I have a rich vocabulary.", reverse: false },
  { id: 6, type: "E", item: "I don't talk a lot.", reverse: true },
  { id: 7, type: "N", item: "I am relaxed most of the time.", reverse: true },
  { id: 8, type: "A", item: "I am interested in people.", reverse: false },
  { id: 9, type: "C", item: "I leave my belongings around.", reverse: true },
  {
    id: 10,
    type: "O",
    item: "I have difficulty understanding abstract ideas.",
    reverse: true,
  },
  {
    id: 11,
    type: "E",
    item: "I feel comfortable around people.",
    reverse: false,
  },
  { id: 12, type: "N", item: "I worry about things.", reverse: false },
  { id: 13, type: "A", item: "I insult people.", reverse: true },
  { id: 14, type: "C", item: "I pay attention to details.", reverse: false },
  { id: 15, type: "O", item: "I have a vivid imagination.", reverse: false },
  { id: 16, type: "E", item: "I keep in the background.", reverse: true },
  { id: 17, type: "N", item: "I seldom feel blue.", reverse: true },
  {
    id: 18,
    type: "A",
    item: "I sympathize with others' feelings.",
    reverse: false,
  },
  { id: 19, type: "C", item: "I make a mess of things.", reverse: true },
  {
    id: 20,
    type: "O",
    item: "I am not interested in abstract ideas.",
    reverse: true,
  },
  { id: 21, type: "E", item: "I start conversations.", reverse: false },
  { id: 22, type: "N", item: "I am easily disturbed.", reverse: false },
  {
    id: 23,
    type: "A",
    item: "I am not interested in other people's problems.",
    reverse: true,
  },
  { id: 24, type: "C", item: "I get chores done right away.", reverse: false },
  { id: 25, type: "O", item: "I have excellent ideas.", reverse: false },
  { id: 26, type: "E", item: "I have little to say.", reverse: true },
  { id: 27, type: "N", item: "I get upset easily.", reverse: false },
  { id: 28, type: "A", item: "I have a soft heart.", reverse: false },
  {
    id: 29,
    type: "C",
    item: "I often forget to put things back in their proper place.",
    reverse: true,
  },
  {
    id: 30,
    type: "O",
    item: "I do not have a good imagination.",
    reverse: true,
  },
  {
    id: 31,
    type: "E",
    item: "I talk to a lot of different people at parties.",
    reverse: false,
  },
  { id: 32, type: "N", item: "I change my mood a lot.", reverse: false },
  {
    id: 33,
    type: "A",
    item: "I am not really interested in others.",
    reverse: true,
  },
  { id: 34, type: "C", item: "I like order.", reverse: false },
  {
    id: 35,
    type: "O",
    item: "I am quick to understand things.",
    reverse: false,
  },
  {
    id: 36,
    type: "E",
    item: "I don't like to draw attention to myself.",
    reverse: true,
  },
  { id: 37, type: "N", item: "I have frequent mood swings.", reverse: false },
  { id: 38, type: "A", item: "I take time out for others.", reverse: false },
  { id: 39, type: "C", item: "I shirk my duties.", reverse: true },
  { id: 40, type: "O", item: "I use difficult words.", reverse: false },
  {
    id: 41,
    type: "E",
    item: "I don't mind being the center of attention.",
    reverse: false,
  },
  { id: 42, type: "N", item: "I get irritated easily.", reverse: false },
  { id: 43, type: "A", item: "I feel others' emotions.", reverse: false },
  { id: 44, type: "C", item: "I follow a schedule.", reverse: false },
  {
    id: 45,
    type: "O",
    item: "I spend time reflecting on things.",
    reverse: false,
  },
  { id: 46, type: "E", item: "I am quiet around strangers.", reverse: true },
  { id: 47, type: "N", item: "I often feel blue.", reverse: false },
  { id: 48, type: "A", item: "I make people feel at ease.", reverse: false },
  { id: 49, type: "C", item: "I am exacting in my work.", reverse: false },
  { id: 50, type: "O", item: "I am full of ideas.", reverse: false },
];

const traitDescriptions = {
  extraversion: {
    description:
      "This factor has two familiar ends of its spectrum: extroversion and introversion. It concerns where an individual draws their energy from and how they interact with others. In general, extroverts draw energy from or recharge by interacting with others, while introverts get tired from interacting with others and replenish their energy with solitude.",
    low: "People low in extroversion are more likely to be people “of few words who are quiet, introspective, reserved, and thoughtful.",
    average:
      "Your score on extraversion is close to average indicating that you can strike a healthy balance between active social life and time for yourself.",
    high: "People high in extroversion tend to seek out opportunities for social interaction, where they are often the “life of the party.” They are comfortable with others, are gregarious, and are prone to action rather than contemplation (Lebowitz, 2016a).",
  },
  neuroticism: {
    description:
      "Neuroticism is not a factor of meanness or incompetence, but one of confidence and being comfortable in one’s own skin. It encompasses one’s emotional stability and general temper.",
    low: "Individuals who score on the low end of neuroticism are more likely to feel confident, sure of themselves, and adventurous. They may also be brave and unencumbered by worry or self-doubt.",
    average:
      "You are average on neuroticism indicating that you handle everyday stressors well but you are not too emotionally cold and distant. ",
    high: "Those high in neuroticism are generally prone to anxiety, sadness, worry, and low self-esteem. They may be temperamental or easily angered, and they tend to be self-conscious and unsure of themselves (Lebowitz, 2016a).",
  },
  agreeableness: {
    description:
      "This factor concerns how well people get along with others. While extroversion concerns sources of energy and the pursuit of interactions with others, agreeableness concerns one’s orientation to others. It is a construct that rests on how an individual generally interacts with others.",
    low: "People on the low end of the agreeableness spectrum are less likely to be trusted and liked by others. They tend to be callous, blunt, rude, ill-tempered, antagonistic, and sarcastic. Although not all people who are low in agreeableness are cruel or abrasive, they are not likely to leave others with a warm fuzzy feeling.",
    average:
      "You scored average on agreeableness. This indicates a  flexible intersocial behavior where people can create close connections with others but are not overly concerned about being accepted. ",
    high: "People high in agreeableness tend to be well-liked, respected, and sensitive to the needs of others. They likely have few enemies and are affectionate to their friends and loved ones, as well as sympathetic to the plights of strangers (Lebowitz, 2016a).",
  },
  conscientiousness: {
    description:
      "Conscientiousness is a trait that can be described as the tendency to control impulses and act in socially acceptable ways, behaviors that facilitate goal-directed behavior (John & Srivastava, 1999). Conscientious people excel in their ability to delay gratification, work within the rules, and plan and organize effectively.",
    low: "People low in conscientiousness are much more likely to procrastinate and to be flighty, impetuous, and impulsive.",
    average:
      "Your conscientiousness score is about average, indicating a good balance between dedication to career and your professional goals, as opposed to relaxation and personal life.  ",
    high: "People high in conscientiousness are likely to be successful in school and in their careers, to excel in leadership positions, and to doggedly pursue their goals with determination and forethought (Lebowitz, 2016a).",
  },
  openness: {
    description:
      "Openness to experience has been described as the depth and complexity of an individual’s mental life and experiences (John & Srivastava, 1999). It is also sometimes called intellect or imagination.",
    low: "An individual who is low in openness to experience probably prefers routine over variety, sticks to what he or she knows, and prefers less abstract arts and entertainment.",
    average:
      "Your score on openness is close to average indicating a moderate and considerate openness to new experiences.",
    high: "An individual who is high in openness to experience is likely someone who has a love of learning, enjoys the arts, engages in a creative career or hobby, and likes meeting new people.",
  },
};

const itemIDs = {};

big5.forEach((el) => {
  itemIDs[el.id] = [el.type, el.reverse];
});

export { itemIDs, big5, big5Norms, traitDescriptions };
