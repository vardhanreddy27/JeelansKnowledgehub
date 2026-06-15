import ServicePage from "@/components/ServicePage";
import { COURSES } from "@/lib/site";

export default function CoursePage({ course }) {
  return <ServicePage course={course} />;
}

export function getStaticPaths() {
  return {
    paths: COURSES.map((course) => ({ params: { course: course.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const course = COURSES.find((item) => item.slug === params.course);

  return {
    props: { course },
  };
}
