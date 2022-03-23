import TextAnimation from "react-text-animations";

const AnimatedText = () => {
  return (
    <TextAnimation.Slide
      target="Meet"
      //   animation={{ delay: 1000 }}
      text={["Meet.", "See.", "Learn.", "Teach."]}
    >
      {" "}
    </TextAnimation.Slide>
  );
};

export default AnimatedText;
