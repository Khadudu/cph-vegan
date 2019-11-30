exports.showHome = (req, res) => {
  res.render("index");
};

let courses = [
  {
    title: "Vegan-Cake",
    cost: 50
  },
  {
    title: "Pure Smoothies and Juices",
    cost: 25
  },
  {
    title: "Main-Course Vegan",
    cost: 10
  }
];

exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses
  });
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
  console.log("form submitted");
};
